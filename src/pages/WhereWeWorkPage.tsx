import React from 'react';
import { Globe, MapPin } from 'lucide-react';

const WhereWeWorkPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Where We Work</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            UNHCR operates in over 130 countries worldwide, providing protection and assistance to refugees and displaced people.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {['Africa', 'Americas', 'Asia Pacific', 'Europe', 'Middle East'].map((region) => (
            <div key={region} className="bg-gray-50 p-6 rounded-lg text-center">
              <Globe className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">{region}</h3>
              <p className="text-gray-600">Discover our work in {region}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhereWeWorkPage;