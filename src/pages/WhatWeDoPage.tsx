import React from 'react';
import { Shield, Home, Users, Heart, Globe, ArrowRight } from 'lucide-react';

const WhatWeDoPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">What We Do</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            UNHCR works to protect and assist refugees, returnees, internally displaced and stateless people worldwide.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-blue-50 p-8 rounded-lg">
            <Shield className="w-12 h-12 text-blue-600 mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Protect</h2>
            <p className="text-gray-700 mb-4">We ensure refugees are protected from harm and discrimination.</p>
            <button className="text-blue-600 font-semibold flex items-center">
              Learn More <ArrowRight className="w-4 h-4 ml-2" />
            </button>
          </div>
          
          <div className="bg-green-50 p-8 rounded-lg">
            <Home className="w-12 h-12 text-green-600 mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Assist</h2>
            <p className="text-gray-700 mb-4">We provide life-saving assistance including shelter and healthcare.</p>
            <button className="text-green-600 font-semibold flex items-center">
              Learn More <ArrowRight className="w-4 h-4 ml-2" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDoPage;