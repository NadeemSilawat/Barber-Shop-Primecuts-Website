import React from 'react';
import { Instagram, Facebook, Twitter, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-gray-400 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-amber-500 mb-4 font-serif">PRIMECUTS</h3>
            <p className="mb-4">
              Premium barbershop providing excellent grooming services in a relaxed and professional environment.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-amber-500 transition-colors" aria-label="Instagram">
                <Instagram />
              </a>
              <a href="#" className="text-gray-400 hover:text-amber-500 transition-colors" aria-label="Facebook">
                <Facebook />
              </a>
              <a href="#" className="text-gray-400 hover:text-amber-500 transition-colors" aria-label="Twitter">
                <Twitter />
              </a>
              <a href="#" className="text-gray-400 hover:text-amber-500 transition-colors" aria-label="YouTube">
                <Youtube />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-medium mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="hover:text-amber-500 transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-amber-500 transition-colors">About</a></li>
              <li><a href="#services" className="hover:text-amber-500 transition-colors">Services</a></li>
              <li><a href="#gallery" className="hover:text-amber-500 transition-colors">Gallery</a></li>
              <li><a href="#pricing" className="hover:text-amber-500 transition-colors">Pricing</a></li>
              <li><a href="#contact" className="hover:text-amber-500 transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-medium mb-4">Services</h4>
            <ul className="space-y-2">
              <li><a href="#services" className="hover:text-amber-500 transition-colors">Haircut</a></li>
              <li><a href="#services" className="hover:text-amber-500 transition-colors">Beard Trim</a></li>
              <li><a href="#services" className="hover:text-amber-500 transition-colors">Hot Towel Shave</a></li>
              <li><a href="#services" className="hover:text-amber-500 transition-colors">Hair Styling</a></li>
              <li><a href="#services" className="hover:text-amber-500 transition-colors">Facial Care</a></li>
              <li><a href="#services" className="hover:text-amber-500 transition-colors">VIP Packages</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-medium mb-4">Contact Info</h4>
            <ul className="space-y-2">
              <li>Jodhpur, Rajasthan</li>
              <li>im.nadeem.silawat@gmail.com</li>
              <li>+91 7424898859</li>
            </ul>
          </div>
        </div>
        
        <hr className="border-gray-800 my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {new Date().getFullYear()} PRIMECUTS. All rights reserved.</p>
          <div className="mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-amber-500 transition-colors mx-2">Privacy Policy</a>
            <span className="text-gray-700">|</span>
            <a href="#" className="text-gray-400 hover:text-amber-500 transition-colors mx-2">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;