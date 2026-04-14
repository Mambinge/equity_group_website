import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const ProductCard = ({ title, features, imageUrl }) => {
  return (
    <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-500 flex flex-col lg:flex-row">
      <div className="lg:w-1/2 aspect-video lg:aspect-auto bg-gray-50 flex items-center justify-center p-8">
        <div className="w-full h-full glass rounded-xl flex items-center justify-center border border-gray-200">
           {/* Placeholder for Product Image */}
           <span className="text-gray-400 font-medium">Product Visual</span>
        </div>
      </div>
      <div className="p-10 lg:w-1/2">
        <h3 className="text-2xl font-bold text-primary mb-6">{title}</h3>
        <ul className="space-y-4 mb-8">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start space-x-3 text-gray-600">
              <div className="mt-1 shrink-0 w-5 h-5 rounded-full bg-secondary/10 flex items-center justify-center">
                <Check className="text-secondary" size={12} />
              </div>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        <button className="btn-outline w-full sm:w-auto">Learn More</button>
      </div>
    </div>
  );
};

export default ProductCard;
