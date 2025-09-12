import React from 'react';
import { Users, Home, Heart, Globe } from 'lucide-react';

const Statistics = () => {
  const stats = [
    {
      icon: <Users className="w-8 h-8" />,
      number: '100M',
      label: 'Forcibly displaced people worldwide',
      color: 'text-blue-600'
    },
    {
      icon: <Home className="w-8 h-8" />,
      number: '35M',
      label: 'Refugees under UNHCR mandate',
      color: 'text-green-600'
    },
    {
      icon: <Heart className="w-8 h-8" />,
      number: '5.4M',
      label: 'Refugees returned home',
      color: 'text-orange-600'
    },
    {
      icon: <Globe className="w-8 h-8" />,
      number: '130+',
      label: 'Countries where we work',
      color: 'text-purple-600'
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Global Impact
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Every number represents a life. Every life matters. See how we're making a difference worldwide.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-lg p-6 text-center shadow-lg hover:shadow-xl transition-shadow">
              <div className={`${stat.color} mb-4 flex justify-center`}>
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;