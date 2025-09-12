import React from 'react';
import { AlertTriangle, ArrowRight, Clock, MapPin } from 'lucide-react';

const EmergencySection = () => {
  const emergencies = [
    {
      location: 'Sudan Crisis',
      situation: 'Ongoing conflict displacing millions',
      people: '6.1M displaced',
      urgency: 'Critical',
      image: 'https://images.pexels.com/photos/6647028/pexels-photo-6647028.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      location: 'Afghanistan',
      situation: 'Humanitarian crisis continues',
      people: '3.2M refugees',
      urgency: 'Urgent',
      image: 'https://images.pexels.com/photos/6994987/pexels-photo-6994987.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      location: 'Ukraine Emergency',
      situation: 'Ongoing displacement crisis',
      people: '6.3M refugees',
      urgency: 'Critical',
      image: 'https://images.pexels.com/photos/12935073/pexels-photo-12935073.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between mb-12">
          <div>
            <div className="flex items-center mb-4">
              <AlertTriangle className="w-8 h-8 text-red-600 mr-3" />
              <h2 className="text-4xl font-bold text-gray-900">Current Emergencies</h2>
            </div>
            <p className="text-xl text-gray-600">Urgent humanitarian crises requiring immediate action</p>
          </div>
          <button className="hidden lg:flex items-center bg-red-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-red-700 transition-colors">
            <Clock className="w-5 h-5 mr-2" />
            Emergency Response
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {emergencies.map((emergency, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="relative">
                <img 
                  src={emergency.image} 
                  alt={emergency.location}
                  className="w-full h-48 object-cover"
                />
                <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-sm font-semibold ${
                  emergency.urgency === 'Critical' 
                    ? 'bg-red-600 text-white' 
                    : 'bg-orange-500 text-white'
                }`}>
                  {emergency.urgency}
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <MapPin className="w-4 h-4 text-gray-500 mr-2" />
                  <h3 className="text-xl font-semibold text-gray-900">{emergency.location}</h3>
                </div>
                
                <p className="text-gray-600 mb-3">{emergency.situation}</p>
                
                <div className="bg-gray-50 rounded-lg p-3 mb-4">
                  <div className="text-2xl font-bold text-red-600">{emergency.people}</div>
                  <div className="text-sm text-gray-600">People affected</div>
                </div>
                
                <button className="w-full bg-blue-600 text-white py-2 rounded-md font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center">
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-red-600 text-white px-8 py-3 rounded-md font-semibold hover:bg-red-700 transition-colors flex items-center mx-auto">
            <AlertTriangle className="w-5 h-5 mr-2" />
            View All Emergencies
          </button>
        </div>
      </div>
    </section>
  );
};

export default EmergencySection;