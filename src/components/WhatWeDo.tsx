import React from 'react';
import { Shield, Home, Users, Heart, Globe, ArrowRight } from 'lucide-react';

const WhatWeDo = () => {
  const services = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Protect',
      description: 'We work to ensure that refugees and displaced people are protected from harm and discrimination.',
      image: 'https://images.pexels.com/photos/6646916/pexels-photo-6646916.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      icon: <Home className="w-8 h-8" />,
      title: 'Assist',
      description: 'We provide life-saving assistance including shelter, food, water, and healthcare to those in need.',
      image: 'https://images.pexels.com/photos/6994987/pexels-photo-6994987.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Include',
      description: 'We advocate for the inclusion of refugees in national systems and communities worldwide.',
      image: 'https://images.pexels.com/photos/6647264/pexels-photo-6647264.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Solve',
      description: 'We work towards sustainable solutions through voluntary repatriation, integration, or resettlement.',
      image: 'https://images.pexels.com/photos/6994344/pexels-photo-6994344.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  return (
    <section className="py-16 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">What We Do</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            UNHCR works to protect and assist refugees, returnees, internally displaced and stateless people. 
            Our four key areas of work ensure comprehensive support for those who need it most.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow group cursor-pointer">
              <div className="relative">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-blue-600 bg-opacity-20 group-hover:bg-opacity-30 transition-all duration-300"></div>
                <div className="absolute top-4 left-4 bg-white rounded-full p-3 text-blue-600 shadow-lg">
                  {service.icon}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <button className="text-blue-600 font-semibold hover:text-blue-800 flex items-center group-hover:translate-x-2 transition-transform">
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-md font-semibold hover:bg-blue-700 transition-colors">
            Explore All Our Work
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;