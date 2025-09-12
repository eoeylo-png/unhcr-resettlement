import React from 'react';
import { Users, Award, Globe } from 'lucide-react';

const AboutUsPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">About Us</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            UNHCR, the UN Refugee Agency, is a global organization dedicated to saving lives and protecting rights.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <Users className="w-16 h-16 text-blue-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Our Team</h3>
            <p className="text-gray-600">Over 18,000 staff working in 130+ countries</p>
          </div>
          
          <div className="text-center">
            <Award className="w-16 h-16 text-blue-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Our Mission</h3>
            <p className="text-gray-600">Protecting refugees and finding solutions</p>
          </div>
          
          <div className="text-center">
            <Globe className="w-16 h-16 text-blue-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Our Reach</h3>
            <p className="text-gray-600">Serving over 100 million displaced people</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;