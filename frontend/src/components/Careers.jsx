import React from 'react';
import { Briefcase } from 'lucide-react';

export default function Careers() {
  return (
    <>
      {/* Page Header */}
      <div className="bg-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-4xl font-bold text-gray-900">Careers</h1>
          <p className="text-lg text-gray-600 mt-2">
            Join us in shaping the future of healthcare.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-3xl mx-auto text-center">
          <Briefcase className="w-16 h-16 text-blue-600 mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Join Our Movement
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            At Invitek, we believe our people are our greatest asset. We are
            building a movement where technology listens, responds, and heals.
            If you are passionate about making a difference in the MedTech
            space, we'd love to hear from you.
          </p>
          <p className="text-lg text-gray-700 mb-10">
            We are always looking for talented individuals to join our team.
            Please send your resume and a cover letter to:
          </p>
          <a
            href="mailto:careers@invitek.in" // Placeholder email
            className="inline-block bg-blue-600 text-white font-bold text-lg px-10 py-4 rounded-full shadow-lg hover:bg-blue-700 transition duration-300"
          >
            careers@invitek.in
          </a>
        </div>
      </div>
    </>
  );
}

