import React from 'react';
import { AlertTriangle, Clock } from 'lucide-react';

const EmergenciesPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <AlertTriangle className="w-12 h-12 text-red-600 mr-4" />
            <h1 className="text-5xl font-bold text-gray-900">Emergencies</h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            UNHCR responds to humanitarian emergencies worldwide, providing immediate protection and assistance.
          </p>
        </div>
        
        <div className="bg-red-50 p-8 rounded-lg text-center">
          <Clock className="w-16 h-16 text-red-600 mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Emergency Response</h2>
          <p className="text-lg text-gray-700">
            When crises strike, UNHCR is ready to respond within 72 hours to provide life-saving assistance.
          </p>
        </div>
      </div>
    </div>
  );
};

export default EmergenciesPage;