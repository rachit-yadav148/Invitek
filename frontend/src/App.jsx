import React, { useState, useEffect } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Outlet,
  useLocation,
} from 'react-router-dom';
import axios from 'axios';
// You might need to install lucide-react: npm install lucide-react
import {
  HeartPulse,
  Users,
  Briefcase,
  Mail,
  Phone,
  MapPin,
  Menu,
  X,
  ChevronRight,
  ShieldCheck,
  Target,
  BarChart,
  Globe,
  Star,
  FlaskConical,
  Beaker,
  Monitor,
  Heart,
  FileScan,
  AlertCircle,
} from 'lucide-react';

// --- Configuration ---
// This is the URL of your backend server.
const BACKEND_URL = 'http://localhost:5001';

// --- Utility Components ---

// ScrollToTop: Ensures navigation to a new page scrolls the user to the top.
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// --- Layout Components ---

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Navigation links data
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Our Offerings', path: '/products' },
    { name: 'Careers', path: '/careers' },
    { name: 'Business Partners', path: '/partners' },
    { name: 'Contact Us', path: '/contact' },
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-50 border-b border-gray-200">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 flex items-center">
            <span className="text-3xl font-extrabold text-blue-700">
              Invitek
            </span>
            <span className="text-3xl font-bold text-gray-700">
             
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-gray-700 hover:text-blue-600 font-medium transition duration-150 ease-in-out pb-1 border-b-2 border-transparent hover:border-blue-600"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              aria-controls="mobile-menu"
              aria-expanded={isMobileMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 right-0 bg-white shadow-lg z-40 border-t border-gray-100" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)} // Close menu on click
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

const Footer = () => {
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
};

// Main Layout: Combines Header, Footer, and page content
const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen font-sans bg-white">
      <Header />
      <main className="flex-grow">
        {/* The Outlet renders the current route's component (e.g., Home, About) */}
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

// --- Page Components ---

// Homepage
const Home = () => {
  // Data for the product preview cards
  const homeProducts = [
    { 
      name: 'Point of Care Diagnostics', 
      icon: FlaskConical, 
      img: '/images/poc.jpg'
    },
    { 
      name: 'Blood Gas Analysers', 
      icon: Beaker, 
      img: '/images/blood.jpg'
    },
    { 
      name: 'Medical Ventilators', 
      icon: HeartPulse, 
      img: '/images/ventilator.jpg'
    },
    { 
      name: 'Patient Monitors', 
      icon: Monitor, 
      img: '/images/monitor.jpg'
    },
    { 
      name: 'Ultrasound', 
      icon: Heart, 
      img: '/images/ultrasound.jpg'
    },
    { 
      name: 'Endoscopy', 
      icon: FileScan, 
      img: '/images/endoscopy.jpg'
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[70vh] w-full flex items-center justify-center text-white">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/images/mainimage.jpg"
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
               src="images/healthcare.jpg" 
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
};

// About Us Page
const About = () => {
  return (
    <>
      {/* Page Header */}
      <div className="bg-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-4xl font-bold text-gray-900">About Us</h1>
          <p className="text-lg text-gray-600 mt-2">
            Innovation, Empathy, and Excellence in Healthcare.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto">
          
          {/* About Text */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Our Story
            </h2>
            <div className="space-y-6 text-gray-700 text-lg">
              <p>
                Invitek Medical & Healthcare Technologies Pvt. Ltd. is a new-age
                MedTech company founded by industry veterans, healthcare innovators
                and young leaders—with a shared vision to redefine how affordable
                technology serves life.
              </p>
              <p>
                With over two decades of leadership experience in building and
                scaling international medical brands, Invitek stands at the
                crossroads of innovation, empathy, and excellence. Our mission is
                to bridge the gap between advanced medical technology and
                real-world healthcare needs —providing high-quality, highly
                reliable, and intelligent medical solutions accessible across
                medical & healthcare sector.
              </p>
              <p>
                At Invitek, we believe innovation begins with understanding human
                life. From critical care and diagnostics to digital health and
                emergency solutions, every product we develop or represent
                carries a promise — to make healthcare smarter, faster, and more
                humane.
              </p>
            </div>
          </div>

          {/* Vision, Mission, Values */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            
            {/* Vision & Mission */}
            <div className="space-y-10">
              <div className="bg-blue-50 p-8 rounded-lg shadow-md border border-blue-100">
                <Target className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                  Our Vision
                </h3>
                <p className="text-gray-700">
                  To become India’s most trusted MedTech innovation partner — a
                  company that empowers hospitals, doctors, caregivers and
                  individuals through technology that heals, connects, and
                  transforms.
                </p>
              </div>
              <div className="bg-green-50 p-8 rounded-lg shadow-md border border-green-100">
                <ShieldCheck className="w-12 h-12 text-green-600 mb-4" />
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                  Our Mission
                </h3>
                <p className="text-gray-700">
                  To deliver cutting-edge medical technologies designed with
                  precision, passion, reliability and purpose — ensuring
                  clinical excellence, operational efficiency, and affordability
                  for every healthcare institution we serve.
                </p>
              </div>
            </div>
            
            {/* Values */}
            <div className="bg-gray-50 p-8 rounded-lg shadow-md border border-gray-200">
              <BarChart className="w-12 h-12 text-gray-700 mb-4" />
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Our Values
              </h3>
              <ul className="space-y-4">
                <li className="flex">
                  <ChevronRight className="w-6 h-6 text-blue-600 mr-2 flex-shrink-0 mt-1" />
                  <div>
                    <span className="font-semibold">Integrity with Innovation:</span> We
                    combine ethics with exploration — creating technology that
                    serves without compromise.
                  </div>
                </li>
                <li className="flex">
                  <ChevronRight className="w-6 h-6 text-blue-600 mr-2 flex-shrink-0 mt-1" />
                  <div>
                    <span className="font-semibold">People before Profit:</span> Our
                    focus is on outcomes that save lives, not just on sales
                    numbers.
                  </div>
                </li>
                <li className="flex">
                  <ChevronRight className="w-6 h-6 text-blue-600 mr-2 flex-shrink-0 mt-1" />
                  <div>
                    <span className="font-semibold">Global Standards, Indian Heart:</span>{' '}
                    While our technology aligns with international standards, our
                    commitment remains deeply rooted in India’s healthcare
                    realities.
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* The Invitek Promise */}
          <div className="mt-16 bg-blue-700 text-white p-10 rounded-lg shadow-xl text-center">
            <h3 className="text-3xl font-bold mb-4">The Invitek Promise</h3>
            <p className="text-lg text-blue-100 max-w-2xl mx-auto">
              We’re not just building a company — we’re building a movement
              where technology listens, responds, and heals. At Invitek, we
              invite partners, clinicians, and dreamers to join us in shaping
              the future of healthcare — one innovation at a time.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

// Products Page
const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        
        // --- MOCK DATA ---
        // Using static mock data based on the provided document.
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
            img: '/images/ventilator.jpg',
          },
          {
            id: 4,
            name: 'Patient Monitors',
            description: 'Comprehensive monitoring systems for all patient needs, from critical care to general wards.',
            img: '/images/monitor.jpg',
          },
          {
            id: 5,
            name: 'Ultrasound',
            description: 'High-resolution ultrasound imaging systems for a variety of diagnostic applications.',
            img: '/images/ultrasound.jpg',
          },
          {
            id: 6,
            name: 'Endoscopy',
            description: 'State-of-the-art endoscopy solutions for minimally invasive procedures and diagnostics.',
            img: '/images/endoscopy.jpg',
          },
        ];
        
        // Simulating an API call delay
        await new Promise(resolve => setTimeout(resolve, 500));
        
        setProducts(mockProducts);
        
        // Note: The backend server.js doesn't have a '/api/products' endpoint.
        // If one were built, you would use axios here.
        
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
};

// Careers Page
const Careers = () => {
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
};

// Business Partners Page
const BusinessPartners = () => {
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
};

// Contact Page
const Contact = () => {
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
      <div className="bg-gray-100">
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
                    H1/201, Swathi Apartment, Chak Ganjariya, Gomti Nagar
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
};

// Not Found Page
const NotFound = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
      <AlertCircle className="w-16 h-16 text-red-500 mx-auto mb-6" />
      <h1 className="text-6xl font-extrabold text-gray-900 mb-4">404</h1>
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Page Not Found</h2>
      <p className="text-lg text-gray-600 mb-8">
        Sorry, the page you are looking for does not exist.
      </p>
      <Link
        to="/"
        className="inline-block bg-blue-600 text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-blue-700 transition duration-300"
      >
        Go Back Home
      </Link>
    </div>
  );
};


// --- Main App Component ---
// This is the root component that sets up the router.
export default function App() {
  return (
    <BrowserRouter>
      {/* This utility component ensures navigation scrolls to the top of the page */}
      <ScrollToTop />
      
      <Routes>
        {/* All pages are nested inside the Layout component */}
        {/* This ensures the Header and Footer appear on every page */}
        <Route path="/" element={<Layout />}>
          
          {/* The 'index' route renders the Home component at the root path "/" */}
          <Route index element={<Home />} />
          
          {/* Other pages */}
          <Route path="about" element={<About />} />
          <Route path="products" element={<Products />} />
          <Route path="careers" element={<Careers />} />
          <Route path="partners" element={<BusinessPartners />} />
          <Route path="contact" element={<Contact />} />
          
          {/* A "Not Found" route for any other path */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

