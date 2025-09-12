import React from 'react';
import { Heart, Shield, Users, Home } from 'lucide-react';

const DonatePage = () => {
  const donationOptions = [
    { amount: '$50', description: 'Provides emergency supplies for a family' },
    { amount: '$100', description: 'Supports a child\'s education for a month' },
    { amount: '$250', description: 'Helps build shelter for a displaced family' },
    { amount: '$500', description: 'Provides healthcare for refugees in need' }
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <Heart className="w-16 h-16 text-red-500 mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Make a Donation</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your support saves lives and provides hope to millions of refugees worldwide.
          </p>
        </div>
        
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="grid grid-cols-2 gap-4 mb-8">
            {donationOptions.map((option, index) => (
              <button
                key={index}
                className="border-2 border-gray-200 rounded-lg p-6 text-center hover:border-orange-500 hover:bg-orange-50 transition-colors"
              >
                <div className="text-3xl font-bold text-orange-500 mb-2">{option.amount}</div>
                <div className="text-sm text-gray-600">{option.description}</div>
              </button>
            ))}
          </div>

          <div className="mb-6">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Custom Amount
            </label>
            <div className="relative">
              <span className="absolute left-3 top-3 text-gray-400">$</span>
              <input
                type="number"
                className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                placeholder="Enter amount"
              />
            </div>
          </div>

          <button className="w-full bg-orange-500 text-white py-4 rounded-md font-semibold hover:bg-orange-600 transition-colors text-lg">
            Donate Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default DonatePage;