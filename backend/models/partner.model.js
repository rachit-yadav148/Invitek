const mongoose = require('mongoose');

const partnerSchema = new mongoose.Schema({
  companyName: {
    type: String,
    required: [true, 'Company name is required'],
    trim: true,
  },
  contactPerson: {
    type: String,
    required: [true, 'Contact person is required'],
    trim: true,
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    trim: true,
    lowercase: true,
  },
  phone: {
    type: String,
    trim: true,
  },
  message: {
    type: String,
    trim: true,
  },
}, {
  timestamps: true // Adds createdAt and updatedAt timestamps
});

const Partner = mongoose.model('Partner', partnerSchema);

module.exports = Partner;
