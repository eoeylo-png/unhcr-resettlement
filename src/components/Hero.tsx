import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Play } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white">
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <div 
        className="relative min-h-[600px] bg-cover bg-center flex items-center"
        style={{
          backgroundImage: "url('https://images.pexels.com/photos/6647194/pexels-photo-6647194.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')"
        }}
      >
        <div className="max-w-7xl mx-auto px-4 py-20">
          <div className="max-w-2xl">
            <h1 className="text-5xl font-bold mb-6 leading-tight">
              Protecting refugees and displaced people
            </h1>
            <p className="text-xl mb-8 text-blue-100">
              UNHCR, the UN Refugee Agency, is a global organization dedicated to saving lives, 
              protecting rights and building a better future for people forced to flee their homes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-md font-semibold flex items-center justify-center transition-colors">
                Donate Now
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <Link 
                to="/watch-our-story"
                className="border border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3 rounded-md font-semibold flex items-center justify-center transition-colors"
              >
                <Play className="w-5 h-5 mr-2" />
                Watch Our Story
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;