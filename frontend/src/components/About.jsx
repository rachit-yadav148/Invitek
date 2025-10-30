import React from 'react';
import {
  ChevronRight,
  ShieldCheck,
  Target,
  BarChart,
} from 'lucide-react';

export default function About() {
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
              We’re not.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

