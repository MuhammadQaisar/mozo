import { MongoClient } from 'mongodb';
import nodemailer from 'nodemailer';

// TODO: Replace hardcoded credentials with environment variables for security
// MongoDB connection URI
const uri = "mongodb+srv://qaisar:Irha123@mozo-technologies.ynfl6o0.mongodb.net/";
const dbName = "mozo_technologies";
const collectionName = "contact_submissions";

// TODO: Replace hardcoded credentials with environment variables for security
// Nodemailer transporter setup
const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    secure: false, // Use 'true' if your SMTP server uses SSL/TLS, 'false' otherwise
    auth: {
        user: 'maddison53@ethereal.email',
        pass: 'jn7jnAPss4f63QBp6D' // Replace with your actual password or app password
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
            from: '"Mozo Technologies" <noreply@mozo.com>',
            to: 'muhammadqaisar863@gmail.com',
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

        return res.status(200).json({ success: true, message: 'Form submitted successfully!', previewURL: nodemailer.getTestMessageUrl(info) });
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(200).json({ success: true, message: 'Form submitted, but failed to send email notification.', emailError: error.message }); // Added email error message
    }
}
