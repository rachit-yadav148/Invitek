import React from 'react';
import { Link } from 'react-router-dom';
import {
  HeartPulse,
  Globe,
  Star,
  FlaskConical,
  Beaker,
  Monitor,
  Heart,
  FileScan,
  ChevronRight
} from 'lucide-react';

export default function Home() {
  
  // Data for the product preview cards
  const homeProducts = [
    { 
      name: 'Point of Care Diagnostics', 
      icon: FlaskConical, 
      img: 'https://placehold.co/600x400/00a0d1/ffffff?text=POC+Device'
    },
    { 
      name: 'Blood Gas Analysers', 
      icon: Beaker, 
      img: 'https://placehold.co/600x400/00a0d1/ffffff?text=Blood+Gas+Analyser'
    },
    { 
      name: 'Medical Ventilators', 
      icon: HeartPulse, 
      img: 'https://placehold.co/600x400/00a0d1/ffffff?text=Ventilator'
    },
    { 
      name: 'Patient Monitors', 
      icon: Monitor, 
      img: 'https://placehold.co/600x400/00a0d1/ffffff?text=Patient+Monitor'
    },
    { 
      name: 'Ultrasound', 
      icon: Heart, 
      img: 'https://placehold.co/600x400/00a0d1/ffffff?text=Ultrasound'
    },
    { 
      name: 'Endoscopy', 
      icon: FileScan, 
      img: 'https://placehold.co/600x400/00a0d1/ffffff?text=Endoscopy'
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[70vh] w-full flex items-center justify-center text-white">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://placehold.co/1920x1080/60a5fa/ffffff?text=High-Tech+Medical+Equipment"
            alt="Advanced medical technology"
            className="w-full h-full object-cover"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">
            Technology that Heals, Connects, and Transforms.
          </h1>
          <p className="text-lg md:text-xl text-gray-100 max-w-3xl mx-auto mb-8 drop-shadow-md">
            Invitek is a new-age MedTech company committed to providing high-quality,
            reliable, and intelligent medical solutions across the healthcare sector.
          </p>
          <div className="flex justify-center space-x-4">
            <Link
              to="/products"
              className="bg-blue-600 text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-blue-700 transition duration-300"
            >
              Our Offerings
            </Link>
            <Link
              to="/about"
              className="bg-white text-blue-700 font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-gray-100 transition duration-300"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Stats Section */}
      <section className="bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-md text-center border border-gray-200">
              <Star className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-3xl font-bold text-gray-800 mb-2">
                20+ Years Experience
              </h3>
              <p className="text-gray-600">
                Founded by industry veterans with over two decades of leadership
                in building and scaling international medical brands.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md text-center border border-gray-200">
              <Globe className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-3xl font-bold text-gray-800 mb-2">
                Pan-India Network
              </h3>
              <p className="text-gray-600">
                Our commitment is deeply rooted in India’s healthcare realities,
                supported by a robust nationwide network.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* About Us Preview */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
             <img 
               src="https://placehold.co/600x400/e0f2fe/0ea5e9?text=Invitek+Innovation" 
               alt="Medical Technology" 
               className="rounded-lg shadow-xl w-full border border-gray-200"
             />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              About Invitek
            </h2>
            <p className="text-gray-600 text-lg mb-6">
              Invitek Medical & Healthcare Technologies Pvt. Ltd. is a new-age
              MedTech company founded by industry veterans, healthcare innovators
              and young leaders—with a shared vision to redefine how affordable
              technology serves life.
            </p>
            <p className="text-gray-600 mb-8">
              With over two decades of leadership experience, Invitek stands at
              the crossroads of innovation, empathy, and excellence. Our mission
              is to bridge the gap between advanced medical technology and
              real-world healthcare needs.
            </p>
            <Link
              to="/about"
              className="text-blue-600 font-semibold inline-flex items-center hover:text-blue-800 transition"
            >
              Read Our Full Story <ChevronRight className="w-5 h-5 ml-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* Products Preview */}
      <section className="bg-blue-50 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Offerings
            </h2>
            <p className="text-lg text-gray-600">
              Delivering cutting-edge medical technologies designed with precision,
              passion, reliability and purpose.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {homeProducts.map((product) => (
              <div
                key={product.name}
                className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group"
              >
                <img 
                  src={product.img} 
                  alt={product.name} 
                  className="w-full h-48 object-cover" 
                  onError={(e) => {
                    e.target.onerror = null; 
                    e.target.src='https://placehold.co/600x400/cccccc/ffffff?text=Image+Error';
                  }}
                />
                <div className="p-6">
                  <product.icon className="w-10 h-10 text-blue-600 mb-4" />
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {product.name}
                  </h3>
                  <Link
                    to="/products"
                    className="text-blue-600 font-semibold inline-flex items-center group-hover:text-blue-800 transition"
                  >
                    Learn More <ChevronRight className="w-5 h-5 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/products"
              className="bg-blue-600 text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-blue-700 transition duration-300"
            >
              Explore All Products
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

