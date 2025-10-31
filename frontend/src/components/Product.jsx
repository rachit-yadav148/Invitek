import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import axios from 'axios';

// This is the URL of your backend.
// Since this component is isolated, we define it here.
// In a larger app, this might be in a shared config file.
const BACKEND_URL = 'http://localhost:5001';

export default function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        
        // --- MOCK DATA ---
        // We are using static mock data as per your document.
        // The backend server.js doesn't have a '/api/products' endpoint.
        // If you built one, you would use the commented-out axios call below.
        const mockProducts = [
          {
            id: 1,
            name: 'Point of Care Diagnostic Devices',
            description: 'One device can perform more than 50 different blood tests. High-quality, reliable, and intelligent medical solutions.',
            img: '/images/poc.jpg',
          },
          {
            id: 2,
            name: 'Blood Gas Analysers',
            description: 'Cutting-edge analysers for critical care diagnostics. Designed with precision, passion, and reliability.',
            img: '/images/blood.jpg',
          },
          {
            id: 3,
            name: 'Medical Ventilators',
            description: 'Advanced respiratory support for patients. Ensuring clinical excellence and operational efficiency.',
            img: 'https://placehold.co/600x400/00a0d1/ffffff?text=Ventilator',
          },
          {
            id: 4,
            name: 'Patient Monitors',
            description: 'Comprehensive monitoring systems for all patient needs, from critical care to general wards.',
            img: 'https://placehold.co/600x400/00a0d1/ffffff?text=Patient+Monitor',
          },
          {
            id: 5,
            name: 'Ultrasound',
            description: 'High-resolution ultrasound imaging systems for a variety of diagnostic applications.',
            img: 'https://placehold.co/600x400/00a0d1/ffffff?text=Ultrasound',
          },
          {
            id: 6,
            name: 'Endoscopy',
            description: 'State-of-the-art endoscopy solutions for minimally invasive procedures and diagnostics.',
            img: 'https://placehold.co/600x400/00a0d1/ffffff?text=Endoscopy',
          },
        ];
        
        // Simulating an API call delay
        await new Promise(resolve => setTimeout(resolve, 500));
        
        setProducts(mockProducts);
        
        // --- REAL API CALL (example) ---
        // If you had a products API, you would uncomment this:
        // const response = await axios.get(`${BACKEND_URL}/api/products`);
        // setProducts(response.data);
        
        setError(null);
      } catch (err) {
        console.error('Error fetching products:', err);
        setError('Failed to load products. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []); // The empty dependency array [] means this effect runs once when the component mounts

  return (
    <>
      {/* Page Header */}
      <div className="bg-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-4xl font-bold text-gray-900">Our Offerings</h1>
          <p className="text-lg text-gray-600 mt-2">
            High-Quality, Reliable, and Intelligent Medical Solutions.
          </p>
        </div>
      </div>

      {/* Products Grid */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {loading && (
          <div className="text-center text-lg text-gray-700">Loading...</div>
        )}
        {error && (
          <div className="text-center text-lg text-red-600">{error}</div>
        )}
        {!loading && !error && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col border border-gray-200 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                <img
                  src={product.img}
                  alt={product.name}
                  className="w-full h-56 object-cover"
                  onError={(e) => {
                    e.target.onerror = null; 
                    e.target.src='https://placehold.co/600x400/cccccc/ffffff?text=Image+Not+Found';
                  }}
                />
                <div className="p-6 flex-grow">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                    {product.name}
                  </h3>
                  <p className="text-gray-600">{product.description}</p>
                </div>
                <div className="p-6 bg-gray-50 border-t border-gray-100">
                  <Link
                    to="/contact"
                    className="text-blue-600 font-semibold inline-flex items-center hover:text-blue-800 transition"
                  >
                    Request Info <ChevronRight className="w-5 h-5 ml-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

