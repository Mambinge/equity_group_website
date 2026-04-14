import PageLayout from '../components/PageLayout';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Target, Lightbulb, Shield, Award } from 'lucide-react';

const About = () => {
  const values = [
    { title: 'Results Don’t Lie', icon: Award, description: 'We focus on tangible outcomes and measurable success.' },
    { title: 'Care for our clients', icon: Shield, description: 'Delivering maximum value is at the core of everything we do.' },
    { title: 'Knowledge', icon: Lightbulb, description: 'Continuous learning and expertise driving innovative solutions.' },
    { title: 'Excellence', icon: Target, description: 'Striving for highest quality in every technological implementation.' },
  ];

  return (
    <PageLayout>
      {/* Page Header */}
      <section className="bg-primary pt-12 pb-16 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-2xl font-bold mb-6">About Equity Groups</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A digital technology products and services partner founded in 2023, preferred by top brands in Zimbabwe.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story & Approach */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
             <motion.div
               initial={{ opacity: 0, x: -30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
             >
                <h2 className="text-2xl font-bold text-primary mb-6">Our Approach</h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  We are a digital technology products and services partner focused on delivering maximum value to our clients across all projects. 
                </p>
                <div className="p-8 bg-bg-light border-l-4 border-secondary rounded-r-2xl">
                   <p className="text-xl italic text-primary font-medium">
                     "At Equity Group, we have a bold play approach and focus on value creation."
                   </p>
                </div>
                <p className="text-lg text-gray-600 leading-relaxed mt-6">
                  Our team specializes in driving business evolution through innovative digital platforms that allow organizations to scale, optimize, and lead in their respective markets.
                </p>
             </motion.div>
             <div className="relative">
                <div className="aspect-square bg-secondary/5 rounded-[4rem] flex items-center justify-center p-12">
                   <div className="relative w-full h-full bg-white rounded-[3rem] shadow-2xl overflow-hidden flex items-center justify-center p-8">
                      <div className="text-center">
                        <span className="text-8xl font-black text-secondary/10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none">EST 2023</span>
                        <div className="relative z-10">
                           <div className="text-6xl font-bold text-primary mb-2">2023</div>
                           <div className="text-secondary font-bold tracking-widest uppercase">The Beginning of Innovation</div>
                        </div>
                      </div>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-12 bg-bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-2xl font-bold text-primary mb-4">Our Core Values</h2>
            <div className="h-1 w-20 bg-secondary mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-10 rounded-3xl shadow-sm hover:shadow-xl transition-all group"
              >
                <div className="w-16 h-16 bg-primary/5 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-secondary transition-colors duration-300">
                  <v.icon className="text-secondary group-hover:text-white transition-colors" size={32} />
                </div>
                <h3 className="text-xl font-bold text-primary mb-4">{v.title}</h3>
                <p className="text-gray-500">{v.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
           <h2 className="text-2xl font-bold text-primary mb-8 italic">"Now let us make something awesome together"</h2>
           <Link to="/contact"><button className="btn-primary">Connect with us</button></Link>
        </div>
      </section>
    </PageLayout>
  );
};

export default About;
