import React, { useState } from 'react';
import axios from 'axios';
import { Mail, Phone, MapPin } from 'lucide-react';

// Backend URL
const BACKEND_URL = 'http://localhost:5001';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [formStatus, setFormStatus] = useState({
    submitting: false,
    message: '',
    error: false
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus({ submitting: true, message: '', error: false });

    try {
      const response = await axios.post(
        `${BACKEND_URL}/api/contact`,
        formData
      );
      setFormStatus({
        submitting: false,
        message: response.data.message, // "Message received! We will get back to you soon."
        error: false
      });
      // Clear the form on success
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    } catch (err) {
      setFormStatus({
        submitting: false,
        message: err.response?.data?.message || 'An error occurred. Please try again.',
        error: true
      });
    }
  };

  return (
    <>
      {/* Page Header */}
      <div className="bg-gray-100" >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-4xl font-bold text-gray-900">Contact Us</h1>
          <p className="text-lg text-gray-600 mt-2">
            We're here to help. Reach out to us with any questions.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <div className="text-gray-700">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Get in Touch
            </h2>
            <p className="text-lg mb-8">
              We welcome your inquiries. Whether you are a healthcare
              professional, a potential business partner, or have questions
              about our products, our team is ready to assist you.
            </p>
            <ul className="space-y-6">
              <li className="flex items-start">
                <MapPin className="w-8 h-8 text-blue-600 mt-1 mr-4 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    Our Address
                  </h3>
                  <p>
                    Invitek Medical & Healthcare Technologies Pvt. Ltd.
                    <br />
                    H1/201, Swati Apartment, Chak Ganjariya, Gomti Nagar
                    Vistar, Sultanpur Road, Lucknow-226002
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <Phone className="w-7 h-7 text-blue-600 mt-1 mr-4 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    Phone
                  </h3>
                  <p>+91-9044474665</p>
                </div>
              </li>
              <li className="flex items-start">
                <Mail className="w-7 h-7 text-blue-600 mt-1 mr-4 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    Email
                  </h3>
                  <p>info@invitek.in</p> {/* Placeholder */}
                </div>
              </li>
            </ul>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 md:p-10 rounded-lg shadow-xl border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Send Us a Message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                  Subject (Optional)
                </label>
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Your Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  disabled={formStatus.submitting}
                  className="w-full flex justify-center py-3 px-4 border border-transparent rounded-full shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
                >
                  {formStatus.submitting ? 'Sending...' : 'Send Message'}
                </button>
              </div>
              {/* Form status message */}
              {formStatus.message && (
                <div className={`text-center text-sm ${
                  formStatus.error ? 'text-red-600' : 'text-green-600'
                }`}>
                  {formStatus.message}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

