import React, { useState, useRef } from 'react';
import PageLayout from '../components/PageLayout';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Globe, Send, Clock, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState({ type: '', message: '' });
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    subject: 'General Inquiry',
    message: ''
  });

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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate environment variables
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setStatus({ 
        type: 'error', 
        message: 'Email service is not configured.' 
      });
      return;
    }

    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.user_name,
          from_email: formData.user_email,
          subject: formData.subject,
          message: formData.message,
          email: 'sales@equitygroups.co'
        },
        publicKey
      );

      setStatus({ 
        type: 'success', 
        message: 'Message sent successfully! We will get back to you soon.' 
      });
      setFormData({
        user_name: '',
        user_email: '',
        subject: 'General Inquiry',
        message: ''
      });
    } catch (error) {
      console.error('EmailJS Error:', error);
      setStatus({ 
        type: 'error', 
        message: 'Failed to send message. Please try again later.' 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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
                 <form ref={form} onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                       <div className="space-y-2">
                          <label className="text-sm font-bold text-primary ml-1 uppercase tracking-widest">Name</label>
                          <input 
                            type="text" 
                            name="user_name"
                            value={formData.user_name}
                            onChange={handleInputChange}
                            required
                            className="w-full bg-bg-light border-none rounded-2xl p-4 focus:ring-2 focus:ring-secondary transition-all" 
                            placeholder="Enter your name" 
                          />
                       </div>
                       <div className="space-y-2">
                          <label className="text-sm font-bold text-primary ml-1 uppercase tracking-widest">Email</label>
                          <input 
                            type="email" 
                            name="user_email"
                            value={formData.user_email}
                            onChange={handleInputChange}
                            required
                            className="w-full bg-bg-light border-none rounded-2xl p-4 focus:ring-2 focus:ring-secondary transition-all" 
                            placeholder="Enter email address" 
                          />
                       </div>
                    </div>
                    <div className="space-y-2">
                       <label className="text-sm font-bold text-primary ml-1 uppercase tracking-widest">Subject</label>
                       <select 
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        className="w-full bg-bg-light border-none rounded-2xl p-4 focus:ring-2 focus:ring-secondary transition-all"
                       >
                          <option>Software Development</option>
                          <option>AI Solutions</option>
                          <option>Digital Marketing</option>
                          <option>General Inquiry</option>
                       </select>
                    </div>
                    <div className="space-y-2">
                       <label className="text-sm font-bold text-primary ml-1 uppercase tracking-widest">Message</label>
                       <textarea 
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        className="w-full bg-bg-light border-none rounded-2xl p-4 h-32 focus:ring-2 focus:ring-secondary transition-all" 
                        placeholder="How can we help?"
                       ></textarea>
                    </div>

                    {status.message && (
                      <motion.div 
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className={`p-4 rounded-2xl flex items-center space-x-3 ${
                          status.type === 'success' ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'
                        }`}
                      >
                        {status.type === 'success' ? <CheckCircle size={20} /> : <AlertCircle size={20} />}
                        <span className="text-sm font-medium">{status.message}</span>
                      </motion.div>
                    )}

                    <button 
                      type="submit"
                      disabled={isSubmitting}
                      className="btn-primary w-full flex items-center justify-center space-x-2 py-5 text-xl disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                       {isSubmitting ? (
                         <>
                           <span>Sending...</span>
                           <Loader2 size={24} className="animate-spin" />
                         </>
                       ) : (
                         <>
                           <span>Send Message</span>
                           <Send size={20} />
                         </>
                       )}
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
