// Load environment variables from .env file
require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// Import Mongoose Models
const Contact = require('./models/contact.model');
const Partner = require('./models/partner.model');

const app = express();

// --- Middleware ---
// Enable All CORS Requests
app.use(cors());
// Parse JSON request bodies
app.use(express.json());

// --- Database Connection ---
const mongoUri = process.env.MONGO_URI;
if (!mongoUri) {
  console.error('MONGO_URI is not defined in the .env file.');
  process.exit(1);
}

mongoose.connect(mongoUri)
  .then(() => console.log('Successfully connected to MongoDB'))
  .catch(err => {
    console.error('Database connection error:', err);
    process.exit(1);
  });

// --- API Routes ---

// Health check route
app.get('/api', (req, res) => {
  res.status(200).json({ message: 'Invitek backend server is running!' });
});

// POST: Handle Contact Form Submission
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    // Basic validation
    if (!name || !email || !message) {
      return res.status(400).json({ message: 'Name, email, and message are required.' });
    }

    const newContact = new Contact({
      name,
      email,
      subject,
      message,
    });

    await newContact.save();

    res.status(201).json({ message: 'Thank you for your message! We will get back to you soon.' });
  } catch (error) {
    console.error('Contact form error:', error);
    res.status(500).json({ message: 'Server error. Please try again later.' });
  }
});

// POST: Handle Business Partner Form Submission
app.post('/api/partners', async (req, res) => {
  try {
    const { companyName, contactPerson, email, phone, message } = req.body;

    // Basic validation
    if (!companyName || !contactPerson || !email) {
      return res.status(400).json({ message: 'Company name, contact person, and email are required.' });
    }

    const newPartner = new Partner({
      companyName,
      contactPerson,
      email,
      phone,
      message,
    });

    await newPartner.save();

    res.status(201).json({ message: 'Thank you for your application! Our team will review it and contact you.' });
  } catch (error) {
    console.error('Partner form error:', error);
    res.status(500).json({ message: 'Server error. Please try again later.' });
  }
});

// --- Start Server ---
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Backend server running on http://localhost:${PORT}`);
});
