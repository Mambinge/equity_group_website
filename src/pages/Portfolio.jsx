import React from 'react';
import PageLayout from '../components/PageLayout';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ExternalLink, Globe, Layout, Share2, PhoneCall } from 'lucide-react';

const Portfolio = () => {
  const websites = [
    { name: 'Masawara', url: 'www.masawara.com' },
    { name: 'Minerva', url: 'www.minerva.co.zw' },
    { name: 'Schweppes', url: 'www.schweppes.co.zw' },
    { name: 'Escapades', url: 'www.escapades.co.zw' },
    { name: 'Pamuhacha', url: 'www.pamuhacha.co.zw' },
    { name: 'Lorimak Africa', url: 'www.lorimakafrica.com' },
    { name: 'Milano', url: 'www.milano.co.zw' },
    { name: 'Gateway Global', url: 'www.gatewayglobalco.com' },
    { name: 'IOBZ', url: 'www.iobz.co.zw' }
  ];

  const digitalMarketingClients = [
    { name: 'Coca-Cola', logo: 'CC' },
    { name: 'Schweppes', logo: 'SC' },
    { name: 'Hypery Brands', logo: 'HB' },
    { name: 'Unilever', logo: 'UL' }
  ];

  const specializedProjects = [
    {
      title: 'Call Center Solutions',
      clients: 'Botswana BOFWA, Youth Advocates Zimbabwe',
      icon: PhoneCall
    },
    {
      title: 'E-Learning Implementation',
      clients: 'IOBZ, REIZ, Study Clinic Zimbabwe',
      icon: Layout
    }
  ];

  return (
    <PageLayout>
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-2xl font-bold text-primary mb-6">Our Portfolio</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Trusted by major brands and institutions across Zimbabwe and beyond.
            </p>
          </div>

          {/* Website Development Grid */}
          <div className="mb-24">
            <div className="flex items-center space-x-4 mb-10">
               <Globe className="text-secondary" size={32} />
               <h2 className="text-2xl font-bold text-primary">Website Development</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {websites.map((site, i) => (
                <motion.a
                  key={i}
                  href={`http://${site.url}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{ y: -5 }}
                  className="bg-bg-light p-6 rounded-2xl border border-gray-100 flex justify-between items-center group"
                >
                  <span className="font-semibold text-primary">{site.name}</span>
                  <div className="flex items-center space-x-2 text-secondary opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-xs font-mono">{site.url}</span>
                    <ExternalLink size={16} />
                  </div>
                </motion.a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Digital Marketing Clients */}
            <div className="bg-primary p-12 rounded-[3.5rem] text-white">
              <div className="flex items-center space-x-4 mb-10">
                 <Share2 className="text-secondary" size={32} />
                 <h2 className="text-2xl font-bold">Digital Marketing</h2>
              </div>
              <div className="grid grid-cols-2 gap-8">
                {digitalMarketingClients.map((client, i) => (
                  <div key={i} className="bg-white/5 border border-white/10 p-6 rounded-3xl text-center">
                    <div className="text-2xl font-black text-secondary mb-2">{client.logo}</div>
                    <div className="text-sm font-medium text-gray-300">{client.name}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Specialized Projects */}
            <div className="space-y-6">
              {specializedProjects.map((proj, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  className="p-10 bg-bg-light border border-gray-100 rounded-[2.5rem] flex items-start space-x-6"
                >
                  <div className="w-14 h-14 bg-secondary/10 rounded-2xl flex items-center justify-center shrink-0">
                    <proj.icon className="text-secondary" size={28} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-2">{proj.title}</h3>
                    <p className="text-gray-600 leading-relaxed italic">{proj.clients}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-bg-light border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
           <h2 className="text-2xl font-bold text-primary mb-8 italic">"Building the digital future of Zimbabwe, one project at a time."</h2>
           <div className="flex justify-center space-x-4">
              <Link to="/contact"><button className="btn-primary">Start Your Project</button></Link>
           </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Portfolio;
