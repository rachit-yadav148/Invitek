const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true,
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    trim: true,
    lowercase: true,
  },
  subject: {
    type: String,
    trim: true,
    default: 'No Subject',
  },
  message: {
    type: String,
    required: [true, 'Message is required'],
    trim: true,
  },
}, {
  timestamps: true // Adds createdAt and updatedAt timestamps
});

const Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;
