import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Programs', href: '/programs' },
    { name: 'Get Involved', href: '/get-involved' },
    { name: 'News', href: '/news' },
    { name: 'Contact', href: '/contact' }
  ];

  const programs = [
    { name: 'School Support Program', href: '/programs' },
    { name: 'Community Advocacy', href: '/programs' },
    { name: 'Digital Skills Training', href: '/programs' },
    { name: 'Leadership Development', href: '/programs' }
  ];

  const socialLinks = [
    { icon: Facebook, href: 'https://facebook.com/gcewatch', color: 'hover:text-blue-600' },
    { icon: Twitter, href: 'https://twitter.com/gcewatch', color: 'hover:text-blue-400' },
    { icon: Instagram, href: 'https://instagram.com/gcewatch', color: 'hover:text-pink-600' },
    { icon: Linkedin, href: 'https://linkedin.com/company/gcewatch', color: 'hover:text-blue-700' },
    { icon: Youtube, href: 'https://youtube.com/gcewatch', color: 'hover:text-red-600' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Newsletter Signup */}
      <section className="bg-gradient-to-r from-green-600 to-blue-600 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Stay Updated with Our Impact
            </h2>
            <p className="text-lg text-green-100 mb-8 max-w-2xl mx-auto">
              Get the latest stories of transformation, program updates, and ways to make a difference 
              in girls' education across Nigeria.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:ring-2 focus:ring-white focus:outline-none"
              />
              <button className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300">
                Subscribe
              </button>
            </div>
            <p className="text-sm text-green-100 mt-4">
              Join 5,000+ supporters receiving our monthly newsletter
            </p>
          </div>
        </div>
      </section>

      {/* Main Footer Content */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Organization Info */}
            <div className="lg:col-span-1">
              <Link to="/" className="flex items-center space-x-3 mb-6">
                <div className="bg-green-600 p-2 rounded-lg">
                  <BookOpen className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h1 className="text-xl font-bold text-white">GCEWATCH</h1>
                  <p className="text-xs text-gray-300">Girl Child Education Watch</p>
                </div>
              </Link>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Empowering girls through education to transform communities and break the cycle of poverty 
                across Nigeria. Every girl deserves the chance to learn and lead.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center text-gray-300">
                  <MapPin className="h-5 w-5 mr-3 text-green-500" />
                  <span className="text-sm">Block No. 16 Osaja Street, Azare, Bauchi State, Nigeria.</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <Phone className="h-5 w-5 mr-3 text-green-500" />
                  <span className="text-sm">+234 9 123 4567</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <Mail className="h-5 w-5 mr-3 text-green-500" />
                  <span className="text-sm">info@gcewatch.org</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-bold text-white mb-6">Quick Links</h3>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-gray-300 hover:text-green-400 transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Programs */}
            <div>
              <h3 className="text-lg font-bold text-white mb-6">Our Programs</h3>
              <ul className="space-y-3">
                {programs.map((program) => (
                  <li key={program.name}>
                    <Link
                      to={program.href}
                      className="text-gray-300 hover:text-green-400 transition-colors duration-200 text-sm"
                    >
                      {program.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Get Involved */}
            <div>
              <h3 className="text-lg font-bold text-white mb-6">Get Involved</h3>
              <div className="space-y-4">
                <Link
                  to="/get-involved"
                  className="block bg-green-600 hover:bg-green-700 text-white text-center py-3 px-4 rounded-lg font-semibold transition-all duration-300 text-sm"
                >
                  Donate Now
                </Link>
                <Link
                  to="/get-involved"
                  className="block border-2 border-green-600 hover:bg-green-600 text-green-400 hover:text-white text-center py-3 px-4 rounded-lg font-semibold transition-all duration-300 text-sm"
                >
                  Volunteer
                </Link>
                <Link
                  to="/get-involved"
                  className="block border-2 border-blue-600 hover:bg-blue-600 text-blue-400 hover:text-white text-center py-3 px-4 rounded-lg font-semibold transition-all duration-300 text-sm"
                >
                  Partner With Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Copyright */}
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              <p>&copy; 2025 Girl Child Education Watch of Nigeria (GCEWATCH Nigeria). All rights reserved.</p>
              <p className="mt-1">Registered NGO in Nigeria | CAC/IT/NO: 123456</p>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              <span className="text-gray-400 text-sm mr-2">Follow us:</span>
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-gray-400 ${social.color} transition-colors duration-200`}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Legal Links */}
          <div className="mt-8 pt-8 border-t border-gray-800 text-center">
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
              <a href="/privacy-policy" className="hover:text-green-400 transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="/terms-of-service" className="hover:text-green-400 transition-colors duration-200">
                Terms of Service
              </a>
              <a href="/transparency" className="hover:text-green-400 transition-colors duration-200">
                Financial Transparency
              </a>
              <a href="/annual-reports" className="hover:text-green-400 transition-colors duration-200">
                Annual Reports
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;