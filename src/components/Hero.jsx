import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Play } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-0 overflow-hidden bg-primary">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 -left-20 w-80 h-80 bg-secondary/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-4 flex items-center space-x-2">
              <div className="h-px w-8 bg-secondary"></div>
              <span className="text-secondary font-semibold uppercase tracking-[0.3em] text-xs">Look At It Differently</span>
            </div>
            <h1 className="text-2xl md:text-2xl font-bold text-white leading-tight mb-4 uppercase">
              Driving Business Evolution Through <br />
              <span className="text-secondary">Innovative Digital Platforms</span>
            </h1>

            <p className="text-xl text-gray-300 mb-10 max-w-lg leading-relaxed">
              Preferred by top brands in Zimbabwe. We empower your business with custom software, data analytics, and AI-driven solutions.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 text-center">
              <Link to="/contact" className="inline-block">
                <button className="btn-primary group flex items-center justify-center space-x-2 w-full sm:w-auto px-10">
                  <span>Get Started</span>
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                </button>
              </Link>
              <button className="px-6 py-3 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all flex items-center justify-center space-x-2">
                <Play size={18} fill="white" />
                <span>Watch Demo</span>
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="hidden lg:block relative"
          >
            {/* Abstract visual element */}
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 border-2 border-secondary/30 rounded-3xl rotate-6 translate-x-4 translate-y-4"></div>
              <div className="absolute inset-0 border-2 border-white/20 rounded-3xl -rotate-3 -translate-x-4 -translate-y-4"></div>
              <div className="absolute inset-0 glass rounded-3xl flex items-center justify-center">
                {/* Mockup or Graphic */}
                <div className="w-4/5 h-4/5 bg-secondary/10 rounded-2xl p-6 border border-white/10 overflow-hidden">
                  <div className="w-full h-8 bg-white/10 rounded mb-4"></div>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="h-24 bg-white/5 rounded"></div>
                    <div className="h-24 bg-white/5 rounded"></div>
                  </div>
                  <div className="w-3/4 h-6 bg-secondary/20 rounded"></div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
