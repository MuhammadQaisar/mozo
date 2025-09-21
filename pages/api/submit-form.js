import { MongoClient } from 'mongodb';
import nodemailer from 'nodemailer';

// MongoDB connection URI
const uri = "mongodb+srv://qaisar:Irha123@mozo-technologies.ynfl6o0.mongodb.net/";
const dbName = "mozo_technologies";
const collectionName = "contact_submissions";

// Nodemailer transporter setup (using a test account from ethereal.email)
const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    secure: false, // Use 'true' if your SMTP server uses SSL/TLS, 'false' otherwise
    auth: {
        user: 'maddison53@ethereal.email',
        pass: 'jn7jnAPss4f63QBp6D' // Replace with your actual password or app password
    },
    tls: {
        rejectUnauthorized: false // Only use this if you are having issues with self-signed certs
    }
});

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const formData = req.body;
        console.log('Received form data:', formData); // Added logging for received data

        // --- 1. Save to MongoDB --- 
        const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
        try {
            await client.connect();
            console.log('Connected to MongoDB'); // Added logging
            const database = client.db(dbName);
            const collection = database.collection(collectionName);
            const result = await collection.insertOne(formData);
            console.log('MongoDB insertion result:', result);
        } catch (error) {
            console.error('Error saving to MongoDB:', error);
            return res.status(500).json({ success: false, message: 'Error saving to database', error: error.message }); // Added error message
        } finally {
            await client.close();
            console.log('Disconnected from MongoDB'); // Added logging
        }

        // --- 2. Send Email --- 
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
                    <p><strong>Phone:</strong> ${formData.phone}</p>
                    <p><strong>Message:</strong> ${formData.message}</p>
                    <p><strong>Services:</strong> ${formData.services ? formData.services.join(', ') : 'N/A'}</p>
                `
            };

            const info = await transporter.sendMail(mailOptions);
            console.log('Email sent: %s', info.messageId);
            console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

            res.status(200).json({ success: true, message: 'Form submitted successfully!', previewURL: nodemailer.getTestMessageUrl(info) });
        } catch (error) {
            console.error('Error sending email:', error);
            res.status(200).json({ success: true, message: 'Form submitted, but failed to send email notification.', emailError: error.message }); // Added email error message
        }

    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}