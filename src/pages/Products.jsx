import React from 'react';
import PageLayout from '../components/PageLayout';
import { motion } from 'framer-motion';
import { 
  Database, 
  GraduationCap, 
  ShoppingCart, 
  ShieldCheck, 
  Stethoscope, 
  ScanFace,
  Globe,
  CheckCircle2
} from 'lucide-react';

const Products = () => {
  const productsList = [
    {
      title: 'ERP Software Solutions',
      icon: Database,
      description: 'Integrated business management software to transform your operations.',
      features: ['CRM & Sales', 'Fleet Management', 'HR & Payroll', 'Financial Accounting']
    },
    {
      title: 'Learning Management System',
      icon: GraduationCap,
      description: 'Comprehensive e-learning platform specifically designed for schools and institutions.',
      features: ['Software Implementation', 'Customisation', 'Staff Training', 'Continuous Support']
    },
    {
      title: 'POS & Accounting Software',
      icon: ShoppingCart,
      description: 'The "Datapoint" POS system - widely trusted by retailers across Zimbabwe.',
      features: ['Inventory Tracking', 'Multi-store Support', 'Detailed Reporting', 'Easy Integration']
    },
    {
      title: 'Multimodal Biometrics',
      icon: ScanFace,
      description: 'Next-generation identification using multiple biometric indicators.',
      features: ['Face & Fingerprint Recognition', 'Tattoo & Person Re-id', 'License Plate Recognition', 'Presentation Attack Detection']
    },
    {
      title: 'Telehealth Solution',
      icon: Stethoscope,
      description: 'Bridging the gap between patients and providers via text, voice, and video.',
      features: ['Remote Consultations', 'Electronic Prescriptions', 'Referral Systems', 'Chronic Illness Monitoring']
    },
    {
      title: 'Digital Monitoring & Safety',
      icon: ShieldCheck,
      description: 'Securus digital monitoring for safeguarding in educational institutions.',
      features: ['Student Protection', 'Global Monitoring Systems', 'Institutional Safeguarding', 'Compliance Management']
    }
  ];

  return (
    <PageLayout>
      <section className="py-12 bg-bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-2xl font-bold text-primary mb-6">Innovative Products</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We provide enterprise-grade software products that solve real business challenges.
            </p>
          </div>

          <div className="space-y-12">
            {productsList.map((product, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-[3rem] overflow-hidden flex flex-col md:flex-row shadow-lg hover:shadow-2xl transition-shadow duration-500"
              >
                <div className="md:w-1/3 bg-primary p-12 flex flex-col items-center justify-center text-center text-white">
                  <div className="w-20 h-20 bg-secondary/20 rounded-3xl flex items-center justify-center mb-6">
                    <product.icon className="text-secondary" size={40} />
                  </div>
                  <h3 className="text-2xl font-bold">{product.title}</h3>
                </div>
                <div className="md:w-2/3 p-12">
                   <p className="text-lg text-gray-600 mb-8">{product.description}</p>
                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {product.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-3 text-primary font-medium">
                           <CheckCircle2 className="text-secondary shrink-0" size={20} />
                           <span>{feature}</span>
                        </div>
                      ))}
                   </div>
                   <button className="mt-10 btn-outline">Explore Product Details</button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialty Section: AI Chatbot */}
      <section className="py-12 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="bg-primary rounded-[4rem] p-12 lg:p-16 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-1/3 h-full bg-secondary/5 rotate-12 translate-x-12 translate-y-12 shrink-0"></div>
              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                 <div>
                    <span className="bg-secondary/20 text-secondary px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-6 inline-block">Featured Product</span>
                    <h2 className="text-2xl md:text-2xl font-bold mb-6 italic">AI Powered Chatbot</h2>
                    <p className="text-xl text-gray-300 mb-8">
                      Learns from your website and knowledge base to provide incredibly accurate responses. Trusted by major institutions across Zimbabwe.
                    </p>
                    <ul className="space-y-4 mb-10">
                       {['Improves customer satisfaction', 'Generates leads 24/7', 'Multimodal interactions', 'Seamless web integration'].map(f => (
                         <li key={f} className="flex items-center space-x-3">
                            <CheckCircle2 className="text-secondary" size={20} />
                            <span>{f}</span>
                         </li>
                       ))}
                    </ul>
                 </div>
                 <div className="bg-white/5 backdrop-blur-sm p-8 rounded-3xl border border-white/10">
                    <h4 className="text-secondary font-bold uppercase tracking-widest text-sm mb-6">Active Implementations</h4>
                    <div className="space-y-4">
                       {[
                         { name: 'IOBZ', url: 'www.iobz.co.zw' },
                         { name: 'Firstlink Insurance', url: 'www.firstlinkinsurance.co.zw' },
                         { name: 'Dataage', url: 'www.dataage.co.zw' },
                         { name: 'MASCA Healthcare', url: 'www.masca.healthcare' }
                       ].map(client => (
                         <div key={client.name} className="flex justify-between items-center p-4 bg-white/5 rounded-xl">
                            <span className="font-semibold">{client.name}</span>
                            <span className="text-xs text-secondary">{client.url}</span>
                         </div>
                       ))}
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Products;
