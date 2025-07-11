import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri);

export default function handler(req, res) {
  console.log('API called');
  
  if (req.method === 'POST') {
    console.log('POST method confirmed');
    res.json({ success: true });
    console.log('Response sent');
    return;
  }
  
  res.status(405).json({ error: 'Method not allowed' });
}
