import React from 'react';
import { Heart, Shield, Users, Home } from 'lucide-react';

const DonationSection = () => {
  const donationOptions = [
    { amount: '$50', description: 'Provides emergency supplies for a family' },
    { amount: '$100', description: 'Supports a child\'s education for a month' },
    { amount: '$250', description: 'Helps build shelter for a displaced family' },
    { amount: '$500', description: 'Provides healthcare for refugees in need' }
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-orange-500 to-red-500 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div>
            <h2 className="text-4xl font-bold mb-6">
              Your Support Saves Lives
            </h2>
            <p className="text-xl mb-8 text-orange-100">
              Every donation, no matter the size, makes a real difference in the lives of refugees 
              and displaced people around the world. Join millions of supporters worldwide.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center">
                <Shield className="w-6 h-6 mr-3 text-orange-200" />
                <span>Emergency protection and assistance</span>
              </div>
              <div className="flex items-center">
                <Home className="w-6 h-6 mr-3 text-orange-200" />
                <span>Safe shelter and clean water</span>
              </div>
              <div className="flex items-center">
                <Users className="w-6 h-6 mr-3 text-orange-200" />
                <span>Education and community support</span>
              </div>
            </div>
          </div>

          {/* Right side - Donation form */}
          <div className="bg-white rounded-lg p-8 shadow-xl text-gray-900">
            <div className="text-center mb-6">
              <Heart className="w-12 h-12 text-red-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900">Make a Donation</h3>
              <p className="text-gray-600">Choose an amount to get started</p>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-6">
              {donationOptions.map((option, index) => (
                <button
                  key={index}
                  className="border-2 border-gray-200 rounded-lg p-4 text-center hover:border-orange-500 hover:bg-orange-50 transition-colors"
                >
                  <div className="text-2xl font-bold text-orange-500 mb-1">{option.amount}</div>
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

            <div className="space-y-3">
              <button className="w-full bg-orange-500 text-white py-3 rounded-md font-semibold hover:bg-orange-600 transition-colors">
                Donate Now
              </button>
              <button className="w-full border border-gray-300 text-gray-700 py-3 rounded-md font-semibold hover:bg-gray-50 transition-colors">
                Set Up Monthly Giving
              </button>
            </div>

            <p className="text-xs text-gray-500 text-center mt-4">
              Your donation is secure and tax-deductible. We protect your privacy and never share your information.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DonationSection;