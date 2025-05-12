import React from 'react';
import SectionHeading from '../components/SectionHeading';
import { Phone, MapPin, Clock, Mail } from 'lucide-react';
import Button from '../components/Button';

const Contact: React.FC = () => {
  const businessHours = [
    { day: 'Monday', hours: '9:00 AM - 7:00 PM' },
    { day: 'Tuesday', hours: '9:00 AM - 7:00 PM' },
    { day: 'Wednesday', hours: '9:00 AM - 7:00 PM' },
    { day: 'Thursday', hours: '9:00 AM - 8:00 PM' },
    { day: 'Friday', hours: '9:00 AM - 8:00 PM' },
    { day: 'Saturday', hours: '8:00 AM - 6:00 PM' },
    { day: 'Sunday', hours: 'Closed' },
  ];

  return (
    <section id="contact" className="py-20 bg-gray-950">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="Contact Us" 
          subtitle="Book your appointment or drop by our shop"
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold text-amber-500 mb-6">Get In Touch</h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <Phone className="w-6 h-6 text-amber-500 mr-4 mt-1" />
                <div>
                  <h4 className="text-white font-medium mb-1">Phone</h4>
                  <p className="text-gray-400">+91 7424898859</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Mail className="w-6 h-6 text-amber-500 mr-4 mt-1" />
                <div>
                  <h4 className="text-white font-medium mb-1">Email</h4>
                  <p className="text-gray-400">im.nadeem.silawat@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <MapPin className="w-6 h-6 text-amber-500 mr-4 mt-1" />
                <div>
                  <h4 className="text-white font-medium mb-1">Location</h4>
                  <p className="text-gray-400">Jodhpur, Rajasthan</p>
                </div>  
              </div>
              
              <div className="flex items-start">
                <Clock className="w-6 h-6 text-amber-500 mr-4 mt-1" />
                <div>
                  <h4 className="text-white font-medium mb-2">Business Hours</h4>
                  <div className="space-y-1">
                    {businessHours.map((schedule, index) => (
                      <div key={index} className="flex justify-between">
                        <span className="text-gray-400 w-32">{schedule.day}</span>
                        <span className="text-gray-300">{schedule.hours}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold text-amber-500 mb-6">Send a Message</h3>
            <form className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-gray-300 mb-2">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full bg-gray-800 text-white border border-gray-700 rounded-md py-3 px-4 focus:outline-none focus:ring-2 focus:ring-amber-500"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-300 mb-2">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full bg-gray-800 text-white border border-gray-700 rounded-md py-3 px-4 focus:outline-none focus:ring-2 focus:ring-amber-500"
                    placeholder="Your email"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-gray-300 mb-2">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  className="w-full bg-gray-800 text-white border border-gray-700 rounded-md py-3 px-4 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  placeholder="Subject"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-gray-300 mb-2">Message</label>
                <textarea 
                  id="message" 
                  rows={5}
                  className="w-full bg-gray-800 text-white border border-gray-700 rounded-md py-3 px-4 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  placeholder="Your message"
                ></textarea>
              </div>
              
              <div>
                <Button size="lg" className="w-full">Send Message</Button>
              </div>
            </form>
          </div>
        </div>
        
        <div className="mt-12">
          <div className="w-full h-96 rounded-lg overflow-hidden">
            <iframe 
              src="https://www.google.com/maps/place/" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy"
              title="Map"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;