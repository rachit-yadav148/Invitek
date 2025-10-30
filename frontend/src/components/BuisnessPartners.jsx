import React, { useState } from 'react';
import axios from 'axios';
import { Users, ChevronRight } from 'lucide-react';

// Backend URL
const BACKEND_URL = 'http://localhost:5001';

export default function BusinessPartners() {
  const [formData, setFormData] = useState({
    companyName: '',
    contactPerson: '',
    email: '',
    phone: '',
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
        `${BACKEND_URL}/api/partners`,
        formData
      );
      setFormStatus({
        submitting: false,
        message: response.data.message, // "Thank you for your interest..."
        error: false
      });
      // Clear the form on success
      setFormData({
        companyName: '',
        contactPerson: '',
        email: '',
        phone: '',
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
      <div className="bg-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-4xl font-bold text-gray-900">
            Business Partners
          </h1>
          <p className="text-lg text-gray-600 mt-2">
            Partner with us to distribute innovative MedTech solutions.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          
          {/* Form */}
          <div className="bg-white p-8 md:p-10 rounded-lg shadow-xl border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Become a Dealer
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="companyName" className="block text-sm font-medium text-gray-700">
                  Company Name
                </label>
                <input
                  type="text"
                  name="companyName"
                  id="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div>
                <label htmlFor="contactPerson" className="block text-sm font-medium text-gray-700">
                  Contact Person
                </label>
                <input
                  type="text"
                  name="contactPerson"
                  id="contactPerson"
                  value={formData.contactPerson}
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
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                  Phone Number (Optional)
                </label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message (Optional)
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  disabled={formStatus.submitting}
                  className="w-full flex justify-center py-3 px-4 border border-transparent rounded-full shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
                >
                  {formStatus.submitting ? 'Submitting...' : 'Submit Application'}
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

          {/* Text Content */}
          <div className="text-gray-700">
            <Users className="w-16 h-16 text-blue-600 mb-6" />
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Partner with Invitek
            </h2>
            <p className="text-lg mb-6">
              We are actively seeking passionate and reliable business partners
              to join our pan-India network. As a distributor for Invitek, you
              gain access to a portfolio of cutting-edge, reliable, and
              affordable medical technologies.
            </p>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Why Partner With Us?
            </h3>
            <ul className="space-y-3">
              <li className="flex">
                <ChevronRight className="w-6 h-6 text-blue-600 mr-2 flex-shrink-0 mt-1" />
                <span>Access to a high-quality, curated product portfolio.</span>
              </li>
              <li className="flex">
                <ChevronRight className="w-6 h-6 text-blue-600 mr-2 flex-shrink-0 mt-1" />
                <span>Backed by a team with 20+ years of industry experience.</span>
              </li>
              <li className="flex">
                <ChevronRight className="w-6 h-6 text-blue-600 mr-2 flex-shrink-0 mt-1" />
                <span>Strong marketing and technical support.</span>
              </li>
              <li className="flex">
                <ChevronRight className="w-6 h-6 text-blue-600 mr-2 flex-shrink-0 mt-1" />
                <span>A commitment to integrity, reliability, and shared growth.</span>
              </li>
            </ul>
            <p className="text-lg mt-8">
              If your company shares our vision of making advanced healthcare
              accessible, we invite you to fill out the form.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

