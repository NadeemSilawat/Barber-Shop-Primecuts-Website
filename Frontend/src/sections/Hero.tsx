import React, { useState, useEffect } from 'react';
import Button from '../components/Button';

const Hero: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="home" className="relative w-full h-screen">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-black bg-opacity-90 py-3 shadow-lg' : 'bg-transparent py-5'}`}>
        <div className="container mx-auto px-4 flex justify-between items-center">
          <a href="#home" className="text-2xl font-bold text-amber-500 font-serif">
            PRIME<span className="text-white">CUTS</span>
          </a>
          
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="text-white hover:text-amber-500 transition-colors">Home</a>
            <a href="#about" className="text-white hover:text-amber-500 transition-colors">About</a>
            <a href="#services" className="text-white hover:text-amber-500 transition-colors">Services</a>
            <a href="#gallery" className="text-white hover:text-amber-500 transition-colors">Gallery</a>
            <a href="#pricing" className="text-white hover:text-amber-500 transition-colors">Pricing</a>
            <a href="#contact" className="text-white hover:text-amber-500 transition-colors">Contact</a>
          </div>
          
          <div className="md:hidden">
            <button className="text-white focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero content */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: "url('https://images.pexels.com/photos/2809652/pexels-photo-2809652.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="container mx-auto px-4 h-full flex items-center">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight font-serif">
              YOUR STYLE, <span className="text-amber-500">OUR PASSION</span>
            </h1>
            <p className="text-xl text-white mb-8 max-w-xl">
              Premium barbershop experience with skilled professionals dedicated to making you look your absolute best.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#contact" className=''><Button size="lg">Book Appointment</Button></a>
              <Button variant="outline" size="lg">Our Services</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;