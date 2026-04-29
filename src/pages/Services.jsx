import React from 'react';
import PageLayout from '../components/PageLayout';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import { 
  Share2, 
  BarChart, 
  Zap, 
  Briefcase, 
  Code, 
  BrainCircuit,
  Search,
  Monitor,
  PhoneCall,
  Layout,
  MessageSquare,
  Shield
} from 'lucide-react';


const Services = () => {
  const serviceCategories = [
    {
      title: 'Digital Marketing',
      icon: Share2,
      items: ['Digital promotions', 'Website development', 'SEO (Search Engine Optimization)'],
    },
    {
      title: 'Data Analytics & BI',
      icon: BarChart,
      items: ['Data insights', 'Reporting', 'Business intelligence solutions'],
    },
    {
      title: 'Telecoms Aggregation',
      icon: Zap,
      items: ['SMS Services', 'USSD Solutions', 'IVR Systems', 'VoIP Integration'],
    },
    {
      title: 'Business Software Consulting',
      icon: Briefcase,
      items: ['ERP consulting', 'Business systems advisory', 'Digital transformation strategy'],
    },
    {
      title: 'Custom Software Development',
      icon: Code,
      items: ['Web applications', 'Mobile applications', 'E-learning systems'],
    },
    {
      title: 'AI Services',
      icon: BrainCircuit,
      items: ['AI-powered solutions', 'Automation tools', 'Machine Learning models'],
    },
    {
      title: 'Chatbot Development',
      icon: MessageSquare,
      items: ['WhatsApp chatbots', 'USSD/SMS chatbots', 'Cross-network integrations'],
    },
    {
      title: 'E-Learning Services',
      icon: Monitor,
      items: ['Software implementation', 'Customisation', 'Staff Training', 'Support & maintenance'],
    }
  ];

  return (
    <PageLayout>
      <section className="bg-primary/5 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-2xl font-bold text-primary mb-6">Our Services</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light">
              We provide end-to-end digital solutions that transform how businesses operate and grow.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceCategories.map((cat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-white p-10 rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500 group"
              >
                <div className="w-16 h-16 bg-primary/5 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-secondary transition-colors duration-300">
                  <cat.icon className="text-primary group-hover:text-white transition-colors" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-6">{cat.title}</h3>
                <ul className="space-y-4">
                  {cat.items.map((item, index) => (
                    <li key={index} className="flex items-center space-x-3 text-gray-600">
                      <div className="w-1.5 h-1.5 rounded-full bg-secondary"></div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialty: Web Dev Portfolio Section */}
      <section className="py-12 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                 <h2 className="text-2xl md:text-2xl font-bold mb-8 italic">Specialized Software & Website Development</h2>
                 <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                   We develop corporate websites, e-commerce platforms, and complex web applications with a focus on UX/UI design, SEO, and security.
                 </p>
                 <div className="grid grid-cols-2 gap-4 mb-10">
                    <div className="flex items-center space-x-2 text-secondary font-semibold">
                       <Layout size={20} />
                       <span>UX/UI Design</span>
                    </div>
                    <div className="flex items-center space-x-2 text-secondary font-semibold">
                       <Search size={20} />
                       <span>SEO Optimization</span>
                    </div>
                    <div className="flex items-center space-x-2 text-secondary font-semibold">
                       <Shield size={20} />
                       <span>Security Audits</span>
                    </div>
                    <div className="flex items-center space-x-2 text-secondary font-semibold">
                       <Zap size={20} />
                       <span>Performance</span>
                    </div>
                 </div>
                 <Link to="/portfolio" className="inline-block">
                   <button className="btn-primary">View Portfolio</button>
                 </Link>
              </div>
              <div className="grid grid-cols-2 gap-4 opacity-20">
                 {/* Visual grid representing code/layout */}
                 {[1,2,3,4].map(n => (
                   <div key={n} className="aspect-square border border-white/20 rounded-2xl p-4">
                      <div className="w-full h-4 bg-white/20 rounded mb-2"></div>
                      <div className="w-3/4 h-2 bg-white/10 rounded mb-2"></div>
                      <div className="w-1/2 h-2 bg-white/10 rounded"></div>
                   </div>
                 ))}
              </div>
           </div>
        </div>
      </section>
            <section className="py-12 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
           <h2 className="text-2xl font-bold text-primary mb-8 italic">"Now let us make something awesome together"</h2>
           <Link to="/contact"><button className="btn-primary">Connect with us</button></Link>
        </div>
      </section>
    </PageLayout>
  );
};

export default Services;
