import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-gray-300 pt-16 pb-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center">
              <img src={`${import.meta.env.BASE_URL}logo.svg`} alt="Equity Groups" className="h-10 w-auto" />
            </div>

            <p className="text-sm leading-relaxed">
              Driving business evolution through innovative digital platforms. We are your preferred digital technology partner in Zimbabwe.
            </p>
            {/* <div className="flex space-x-4">
              <a href="#" className="hover:text-secondary transition-colors"><Linkedin size={20} /></a>
              <a href="#" className="hover:text-secondary transition-colors"><Twitter size={20} /></a>
              <a href="#" className="hover:text-secondary transition-colors"><Facebook size={20} /></a>
            </div> */}
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="/equity_group_website/#/about" className="hover:text-secondary transition-colors">About Us</a></li>
              <li><a href="/equity_group_website/#/services" className="hover:text-secondary transition-colors">Our Services</a></li>
              <li><a href="/equity_group_website/#/products" className="hover:text-secondary transition-colors">Our Products</a></li>
              <li><a href="/equity_group_website/#/portfolio" className="hover:text-secondary transition-colors">Portfolio</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-6">Services</h4>
            <ul className="space-y-4 text-sm">
              <li>Digital Marketing</li>
              <li>Data Analytics & BI</li>
              <li>Software Consulting</li>
              <li>Telecom Aggregation</li>
              <li>AI Services</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start space-x-3">
                <MapPin className="text-secondary shrink-0" size={18} />
                <span>Harare, Zimbabwe</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="text-secondary shrink-0" size={18} />
                <span>+263 777 287 075</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="text-secondary shrink-0" size={18} />
                <span>info@equitygroup.co.zw</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 text-center text-xs">
          <p>&copy; 2003 - {new Date().getFullYear()} Equity Group. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
