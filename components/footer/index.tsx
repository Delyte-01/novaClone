import React from "react";
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 container-padding">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">FS</span>
              </div>
              <span className="ml-3 text-xl font-bold text-white poppins-bold">
                FinSync
              </span>
            </div>
            <p className="text-sm leading-relaxed">
              Empowering businesses with seamless financial and operational
              solutions for sustainable growth.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-400 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 poppins-bold">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <button className="text-sm hover:text-blue-400 transition-colors">
                  Home
                </button>
              </li>
              <li>
                <button className="text-sm hover:text-blue-400 transition-colors">
                  Services
                </button>
              </li>
              <li>
                <button className="text-sm hover:text-blue-400 transition-colors">
                  About Us
                </button>
              </li>
              <li>
                <button className="text-sm hover:text-blue-400 transition-colors">
                  Contact
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 poppins-bold">
              Services
            </h3>
            <ul className="space-y-2 text-sm">
              <li>Financial Planning</li>
              <li>Operations Management</li>
              <li>Business Analytics</li>
              <li>Risk Assessment</li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 poppins-bold">
              Contact Info
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Mail size={18} className="mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-sm">info@finsync.com</span>
              </li>
              <li className="flex items-start">
                <Phone size={18} className="mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-sm">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-sm">
                  123 Business Ave, Suite 100
                  <br />
                  New York, NY 10001
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm mb-4 md:mb-0">
            © 2025 FinSync. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
