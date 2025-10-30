import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Column 1: About */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-4">Invitek</h3>
            <p className="text-gray-400 max-w-md">
              Redefining how affordable technology serves life. We bridge the gap
              between advanced medical technology and real-world healthcare needs.
            </p>
            {/* Social media links can go here */}
            <div className="flex space-x-4 mt-6">
              {/* <a href="#" className="text-gray-400 hover:text-white"><span className="sr-only">Facebook</span><Facebook /></a>
              <a href="#" className="text-gray-400 hover:text-white"><span className="sr-only">Twitter</span><Twitter /></a>
              <a href="#" className="text-gray-400 hover:text-white"><span className="sr-only">LinkedIn</span><Linkedin /></a> 
              */}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/products" className="hover:text-white transition-colors">Our Offerings</Link></li>
              <li><Link to="/careers" className="hover:text-white transition-colors">Careers</Link></li>
              <li><Link to="/partners" className="hover:text-white transition-colors">Business Partners</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Get in Touch
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-blue-400 mt-1 mr-3 flex-shrink-0" />
                <span>
                  Invitek Medical & Healthcare Technologies Pvt. Ltd.
                  <br />
                  H1/201, Swathi Apartment, Chak Ganjariya, Gomti Nagar Vistar,
                  Sultanpur Road, Lucknow-226002
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 text-blue-400 mr-3" />
                <span>+91-9044474665</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 text-blue-400 mr-3" />
                <span>info@invitek.in</span> {/* Placeholder email */}
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Invitek Medical & Healthcare
            Technologies Pvt. Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

