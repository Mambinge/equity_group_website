import React from 'react';
import PageLayout from '../components/PageLayout';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Globe, Send, Clock } from 'lucide-react';

const Contact = () => {
  const offices = [
   


    {
      title: '9nd Floor Chiedza House',
      address: 'Cnr First & Kwame, Harare',
      phone: '+263 777 287 075',
      email: 'sales@dataage.co.zw',
      website: 'www.dataage.co.zw'
    },
    {
      title: 'City Office - CBD',
      address: '9th Floor, Chiedza House, CBD, Harare',
      phone: '+263 777 287 075',
      email: 'sales@equitygroups.co',
      website: 'www.equitygroups.co'
    }
  ];

  return (
    <PageLayout>
      <section className="py-12 bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto italic underline decoration-secondary">
              "Now let us make something awesome together"
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 -mt-16 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-white p-12 rounded-[3rem] shadow-2xl border border-gray-100"
              >
                 <h2 className="text-2xl font-bold text-primary mb-8">Get in Touch</h2>
                 <form className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                       <div className="space-y-2">
                          <label className="text-sm font-bold text-primary ml-1 uppercase tracking-widest">Name</label>
                          <input type="text" className="w-full bg-bg-light border-none rounded-2xl p-4 focus:ring-2 focus:ring-secondary transition-all" placeholder="Enter your name" />
                       </div>
                       <div className="space-y-2">
                          <label className="text-sm font-bold text-primary ml-1 uppercase tracking-widest">Email</label>
                          <input type="email" className="w-full bg-bg-light border-none rounded-2xl p-4 focus:ring-2 focus:ring-secondary transition-all" placeholder="Enter email address" />
                       </div>
                    </div>
                    <div className="space-y-2">
                       <label className="text-sm font-bold text-primary ml-1 uppercase tracking-widest">Subject</label>
                       <select className="w-full bg-bg-light border-none rounded-2xl p-4 focus:ring-2 focus:ring-secondary transition-all">
                          <option>Software Development</option>
                          <option>AI Solutions</option>
                          <option>Digital Marketing</option>
                          <option>General Inquiry</option>
                       </select>
                    </div>
                    <div className="space-y-2">
                       <label className="text-sm font-bold text-primary ml-1 uppercase tracking-widest">Message</label>
                       <textarea className="w-full bg-bg-light border-none rounded-2xl p-4 h-32 focus:ring-2 focus:ring-secondary transition-all" placeholder="How can we help?"></textarea>
                    </div>
                    <button className="btn-primary w-full flex items-center justify-center space-x-2 py-5 text-xl">
                       <span>Send Message</span>
                       <Send size={20} />
                    </button>
                 </form>
              </motion.div>

              {/* Office Details */}
              <div className="space-y-8">
                 {offices.map((office, i) => (
                   <motion.div
                     key={i}
                     initial={{ opacity: 0, x: 30 }}
                     animate={{ opacity: 1, x: 0 }}
                     transition={{ delay: i * 0.2 }}
                     className="bg-bg-light p-10 rounded-[3rem] border border-gray-100 relative overflow-hidden group hover:border-secondary/50 transition-colors"
                   >
                     <div className="absolute top-0 right-0 w-24 h-24 bg-secondary/5 rounded-bl-full translate-x-4 -translate-y-4"></div>
                     <h3 className="text-2xl font-bold text-primary mb-6 flex items-center space-x-3">
                        <MapPin className="text-secondary" />
                        <span>{office.title}</span>
                     </h3>
                     <div className="space-y-6">
                        <div className="flex items-start space-x-4">
                           <MapPin className="text-secondary shrink-0" size={20} />
                           <span className="text-gray-600 font-medium">{office.address}</span>
                        </div>
                        <div className="flex items-center space-x-4">
                           <Phone className="text-secondary shrink-0" size={20} />
                           <span className="text-gray-600 font-medium">{office.phone}</span>
                        </div>
                        <div className="flex items-center space-x-4">
                           <Mail className="text-secondary shrink-0" size={20} />
                           <a href={`mailto:${office.email}`} className="text-secondary hover:underline font-medium">{office.email}</a>
                        </div>
                        <div className="flex items-center space-x-4">
                           <Globe className="text-secondary shrink-0" size={20} />
                           <a href={`http://${office.website}`} target="_blank" className="text-gray-600 hover:text-secondary transition-colors font-medium">{office.website}</a>
                        </div>
                     </div>
                   </motion.div>
                 ))}

                 {/* Hours/General */}
                 <div className="p-8 bg-primary rounded-[2.5rem] text-white flex items-center justify-between">
                    <div>
                       <div className="flex items-center space-x-2 mb-2">
                          <Clock size={18} className="text-secondary" />
                          <span className="font-bold uppercase tracking-widest text-xs">Office Hours</span>
                       </div>
                       <p className="text-gray-300">Mon - Fri: 8:00 AM - 5:00 PM</p>
                    </div>
                    <div className="text-right">
                       <p className="text-secondary font-bold">Zimbabwe</p>
                       <p className="text-xs text-gray-400">Harare HQ</p>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Contact;
