import PageLayout from '../components/PageLayout';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import ServiceCard from '../components/ServiceCard';
import ProductCard from '../components/ProductCard';
import { 
  BarChart, 
  MessageSquare, 
  Code, 
  Share2, 
  Briefcase, 
  BrainCircuit,
  Bot,
  Zap,
  Globe,
  Users
} from 'lucide-react';
import { motion } from 'framer-motion';

const Home = () => {
  const services = [
    { 
      title: 'Digital Marketing', 
      description: 'Strategic online presence and campaign management to drive engagement and sales.',
      icon: Share2 
    },
    { 
      title: 'Data Analytics & BI', 
      description: 'Turning complex data into actionable business intelligence for better decision making.',
      icon: BarChart 
    },
    { 
      title: 'Telecom Aggregation', 
      description: 'Reliable SMS, USSD, IVR, VoIP, and data services for business communications.',
      icon: Zap 
    },
    { 
      title: 'Software Consulting', 
      description: 'Expert guidance on business software alignment and digital transformation strategies.',
      icon: Briefcase 
    },
    { 
      title: 'Custom Software', 
      description: 'End-to-end development of bespoke software solutions tailored to your unique needs.',
      icon: Code 
    },
    { 
      title: 'AI Services', 
      description: 'Leveraging cutting-edge artificial intelligence to automate and optimize business processes.',
      icon: BrainCircuit 
    },
  ];

  const products = [
    {
      title: 'Enterprise ERP System',
      features: ['Financial Management', 'Supply Chain Optimization', 'HR & Payroll Integration', 'Real-time Reporting'],
    },
    {
      title: 'Learning Management System',
      features: ['Course Management', 'Student Progress Tracking', 'Interactive Assessments', 'Scalable Architecture'],
    },
    {
      title: 'AI Customer Service Chatbot',
      features: ['24/7 Availability', 'Multilingual Support', 'Website Integration', 'Continuous Learning'],
    },
    {
      title: 'Multimodal Biometric Systems',
      features: ['Face & Fingerprint Recognition', 'License Plate Detection', 'Presentation Attack Detection'],
    },
    {
      title: 'Telehealth Solution',
      features: ['Remote consultations', 'Electronic prescriptions', 'Full medical history tracking'],
    }
  ];


  const values = [
    { title: 'Results Don’t Lie', icon: BarChart },
    { title: 'Care for Clients', icon: Users },
    { title: 'Knowledge', icon: BrainCircuit },
    { title: 'Excellence', icon: Zap },
  ];

  return (
    <PageLayout>
      <Hero />

      {/* About Section */}
      <section className="py-12 bg-bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <span className="text-secondary font-bold tracking-widest uppercase text-sm mb-4 block">Our Story</span>
              <h2 className="text-2xl font-bold text-primary mb-6 leading-tight">
                Your Strategic Partner for <span className="text-secondary">Value Creation</span>
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Equity Groups is a digital technology partner focused on value creation through innovative solutions. We bridge the gap between business needs and technology-led evolution.
              </p>
              <div className="grid grid-cols-2 gap-6">
                {values.map((v, i) => (
                  <div key={i} className="flex items-center space-x-3 bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                    <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center text-secondary">
                      <v.icon size={20} />
                    </div>
                    <span className="font-semibold text-primary">{v.title}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2 relative">
               <div className="aspect-square bg-primary/5 rounded-3xl p-10 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl font-bold text-primary mb-2">10+</div>
                    <div className="text-gray-500 uppercase tracking-widest text-sm">Years of Innovation</div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-2xl font-bold text-primary mb-4">Comprehensive Digital Solutions</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              We offer a wide range of services designed to help businesses thrive in the digital age.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* AI Chatbot Section */}
      <section className="py-12 bg-primary text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-secondary/10 skew-x-12 translate-x-32"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
             <div className="lg:w-1/2">
                <div className="w-16 h-16 bg-secondary rounded-2xl flex items-center justify-center mb-6">
                  <Bot size={32} />
                </div>
                <h2 className="text-2xl font-bold mb-6">Smart AI Chatbots</h2>
                <p className="text-xl text-gray-300 mb-8">
                  Our AI chatbots learn from your website content to provide intelligent, contextual responses that improve customer engagement and reduce support overhead.
                </p>
                <div className="space-y-4 mb-10">
                  <div className="flex items-start space-x-3">
                    <Globe className="text-secondary shrink-0" />
                    <span>Trusted by leading platforms like iobz.co.zw and dataage.co.zw</span>
                  </div>
                </div>
                <Link to="/services"><button className="btn-primary">Learn More About AI</button></Link>
             </div>
             <div className="lg:w-1/2 glass p-8 rounded-3xl min-h-[400px] flex flex-col">
                <div className="flex items-center space-x-3 mb-8 border-b border-white/10 pb-4">
                  <div className="w-10 h-10 bg-secondary rounded-full"></div>
                  <div>
                    <div className="font-semibold">Equity Support Bot</div>
                    <div className="text-xs text-secondary italic">Online & Learning</div>
                  </div>
                </div>
                <div className="flex-grow space-y-4">
                  <div className="bg-white/10 p-4 rounded-2xl rounded-tl-none self-start max-w-[80%]">How can Equity Groups help my business evolve?</div>
                  <div className="bg-secondary p-4 rounded-2xl rounded-tr-none self-end max-w-[80%] ml-auto">We provide tailored digital platforms, including custom software, data analytics, and AI solutions...</div>
                </div>

                <div className="mt-8 flex space-x-2">
                  <div className="flex-grow bg-white/5 p-3 rounded-lg text-sm text-gray-400">Type your message...</div>
                  <button className="bg-secondary p-3 rounded-lg"><MessageSquare size={18} /></button>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-12 bg-bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-2xl font-bold text-primary mb-4">Our Digital Products</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Ready-to-deploy solutions that give your business a competitive edge.
            </p>
          </div>
          <div className="space-y-12">
            {products.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h4 className="text-gray-400 uppercase tracking-widest text-sm mb-12">Trusted by Leading Brands</h4>
          <div className="flex flex-wrap justify-center gap-12 lg:gap-24 opacity-50 grayscale hover:grayscale-0 transition-all duration-700">
             {['Coca-Cola', 'Schweppes', 'Unilever', 'Hypery Brands'].map((client) => (
               <span key={client} className="text-2xl font-bold text-primary">{client}</span>
             ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-secondary rounded-[3rem] p-16 text-center text-white relative overflow-hidden">
             <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] animate-slow-scroll"></div>
             <div className="relative z-10">
               <h2 className="text-2xl md:text-2xl font-bold mb-8 italic">Now let us make something awesome together</h2>
               <Link to="/contact">
                 <button className="px-10 py-5 bg-white text-secondary font-bold text-xl rounded-full hover:scale-105 transition-transform shadow-2xl">
                   Contact Us Today
                 </button>
               </Link>
             </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};


export default Home;
