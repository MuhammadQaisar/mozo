import { MongoClient } from 'mongodb';
import nodemailer from 'nodemailer';

// MongoDB connection URI from environment variables
const uri = process.env.MONGODB_URI;
const dbName = "mozo_technologies";
const collectionName = "contact_submissions";

// Nodemailer transporter setup
const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: process.env.SMTP_SECURE === 'true',
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
    },
    tls: {
        rejectUnauthorized: false
    }
});

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        res.setHeader('Allow', ['POST']);
        return res.status(405).end(`Method ${req.method} Not Allowed`);
    }

    const formData = req.body;
    console.log('Received form data:', formData);
    console.log('MONGODB_URI (first 20 chars):', process.env.MONGODB_URI ? process.env.MONGODB_URI.substring(0, 20) : 'Not found');


    // --- 1. Validate Form Data ---
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.message) {
        return res.status(400).json({ success: false, message: 'Missing required form fields.' });
    }

    // --- 2. Save to MongoDB --- 
    const client = new MongoClient(uri);
    try {
        await client.connect();
        console.log('Connected to MongoDB');
        const database = client.db(dbName);
        const collection = database.collection(collectionName);
        await collection.insertOne(formData);
        console.log('MongoDB insertion successful');
    } catch (error) {
        console.error('Error saving to MongoDB:', error);
        return res.status(500).json({ success: false, message: 'Error saving to database', error: error.message });
    } finally {
        await client.close();
        console.log('Disconnected from MongoDB');
    }

    // --- 3. Send Email --- 
    try {
        const mailOptions = {
            from: `"Mozo Technologies" <${process.env.SMTP_FROM}>`,
            to: process.env.SMTP_TO,
            subject: 'New "Get Started" Form Submission',
            html: `
                <h1>New Form Submission</h1>
                <p><strong>First Name:</strong> ${formData.firstName}</p>
                <p><strong>Last Name:</strong> ${formData.lastName}</p>
                <p><strong>Email:</strong> ${formData.email}</p>
                <p><strong>Phone:</strong> ${formData.phone || 'N/A'}</p>
                <p><strong>Message:</strong> ${formData.message}</p>
                <p><strong>Services:</strong> ${formData.services && formData.services.length > 0 ? formData.services.join(', ') : 'N/A'}</p>
            `
        };

        const info = await transporter.sendMail(mailOptions);
        console.log('Email sent: %s', info.messageId);
        
        // For ethereal email, log the preview URL
        if (process.env.SMTP_HOST === 'smtp.ethereal.email') {
            console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
        }

        return res.status(200).json({ success: true, message: 'Form submitted successfully!' });
    } catch (error) {
        console.error('Error sending email:', error);
        return res.status(500).json({ success: false, message: 'Failed to send email notification.' });
    }
}
