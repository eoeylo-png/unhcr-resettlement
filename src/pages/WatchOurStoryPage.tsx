import React, { useState } from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize, Clock, Users, Heart, Globe } from 'lucide-react';

const WatchOurStoryPage = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const totalDuration = 180; // 3 minutes

  const videoStats = [
    { icon: <Users className="w-6 h-6" />, number: '2.3M', label: 'People helped through resettlement' },
    { icon: <Globe className="w-6 h-6" />, number: '85', label: 'Countries providing new homes' },
    { icon: <Heart className="w-6 h-6" />, number: '450K', label: 'Families reunited' },
    { icon: <Clock className="w-6 h-6" />, number: '24/7', label: 'Emergency response ready' }
  ];

  const testimonials = [
    {
      name: 'Amara Hassan',
      country: 'From Somalia to Canada',
      quote: 'UNHCR gave my family hope when we had none. Today, my children go to school and dream of their future.',
      image: 'https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Ahmad Al-Rashid',
      country: 'From Syria to Germany',
      quote: 'The resettlement program saved our lives. We now have a safe home and my wife can practice medicine again.',
      image: 'https://images.pexels.com/photos/6647264/pexels-photo-6647264.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Maria Santos',
      country: 'From Venezuela to Australia',
      quote: 'UNHCR helped us start over. My children are learning English and we feel welcomed in our new community.',
      image: 'https://images.pexels.com/photos/6994344/pexels-photo-6994344.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Video */}
      <section className="relative bg-black">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Watch Our Story</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Witness the journey of hope, resilience, and new beginnings as we help refugees 
              find safety and build better futures in their new homes.
            </p>
          </div>

          {/* Video Player */}
          <div className="relative bg-gray-900 rounded-lg overflow-hidden shadow-2xl max-w-5xl mx-auto">
            {/* Video Thumbnail/Placeholder */}
            <div className="relative aspect-video bg-gradient-to-br from-blue-900 to-blue-700">
              <img 
                src="https://images.pexels.com/photos/6647194/pexels-photo-6647194.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Refugees receiving assistance"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40"></div>
              
              {/* Video Overlay Content */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="mb-6">
                    <h2 className="text-3xl font-bold mb-2">Journey to Safety</h2>
                    <p className="text-lg text-gray-200">Stories of hope and new beginnings</p>
                  </div>
                  
                  <button 
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="bg-orange-500 hover:bg-orange-600 text-white rounded-full p-6 transition-all duration-300 transform hover:scale-110 shadow-lg"
                  >
                    {isPlaying ? <Pause className="w-8 h-8" /> : <Play className="w-8 h-8 ml-1" />}
                  </button>
                </div>
              </div>

              {/* Video Controls */}
              {isPlaying && (
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
                  <div className="flex items-center space-x-4">
                    <button 
                      onClick={() => setIsPlaying(false)}
                      className="text-white hover:text-orange-400 transition-colors"
                    >
                      <Pause className="w-6 h-6" />
                    </button>
                    
                    <div className="flex-1">
                      <div className="bg-gray-600 rounded-full h-2 relative">
                        <div 
                          className="bg-orange-500 h-2 rounded-full transition-all duration-300"
                          style={{ width: `${(currentTime / totalDuration) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                    
                    <span className="text-white text-sm">
                      {formatTime(currentTime)} / {formatTime(totalDuration)}
                    </span>
                    
                    <button 
                      onClick={() => setIsMuted(!isMuted)}
                      className="text-white hover:text-orange-400 transition-colors"
                    >
                      {isMuted ? <VolumeX className="w-6 h-6" /> : <Volume2 className="w-6 h-6" />}
                    </button>
                    
                    <button className="text-white hover:text-orange-400 transition-colors">
                      <Maximize className="w-6 h-6" />
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Video Description */}
            <div className="bg-gray-800 text-white p-6">
              <h3 className="text-xl font-semibold mb-2">Journey to Safety: Stories of Hope and Resilience</h3>
              <p className="text-gray-300 mb-4">
                Follow the inspiring journeys of refugee families as they receive life-saving assistance 
                from UNHCR and begin new chapters in welcoming communities around the world. This documentary 
                showcases the resettlement process from initial identification to successful integration.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm">Documentary</span>
                <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm">Resettlement</span>
                <span className="bg-orange-600 text-white px-3 py-1 rounded-full text-sm">Hope</span>
                <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm">New Beginnings</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Statistics */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Stories Behind the Numbers</h2>
            <p className="text-xl text-gray-600">Every statistic represents a life transformed through resettlement</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {videoStats.map((stat, index) => (
              <div key={index} className="bg-white rounded-lg p-6 text-center shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-blue-600 mb-4 flex justify-center">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Voices of Hope</h2>
            <p className="text-xl text-gray-600">Hear directly from refugees who found new homes through resettlement</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.country}</p>
                  </div>
                </div>
                <blockquote className="text-gray-700 italic">
                  "{testimonial.quote}"
                </blockquote>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Chapters */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Video Chapters</h2>
            <p className="text-xl text-gray-600">Explore different aspects of the resettlement journey</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Chapter 1: Identification',
                time: '0:00 - 0:45',
                description: 'How UNHCR identifies refugees in need of resettlement',
                thumbnail: 'https://images.pexels.com/photos/6646916/pexels-photo-6646916.jpeg?auto=compress&cs=tinysrgb&w=400'
              },
              {
                title: 'Chapter 2: Assessment',
                time: '0:45 - 1:30',
                description: 'The comprehensive assessment and interview process',
                thumbnail: 'https://images.pexels.com/photos/6994987/pexels-photo-6994987.jpeg?auto=compress&cs=tinysrgb&w=400'
              },
              {
                title: 'Chapter 3: Journey',
                time: '1:30 - 2:15',
                description: 'The journey to a new country and first steps',
                thumbnail: 'https://images.pexels.com/photos/6647264/pexels-photo-6647264.jpeg?auto=compress&cs=tinysrgb&w=400'
              },
              {
                title: 'Chapter 4: Integration',
                time: '2:15 - 2:45',
                description: 'Building new lives and becoming part of communities',
                thumbnail: 'https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=400'
              },
              {
                title: 'Chapter 5: Success Stories',
                time: '2:45 - 3:00',
                description: 'Celebrating achievements and looking to the future',
                thumbnail: 'https://images.pexels.com/photos/6994344/pexels-photo-6994344.jpeg?auto=compress&cs=tinysrgb&w=400'
              }
            ].map((chapter, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow cursor-pointer">
                <img src={chapter.thumbnail} alt={chapter.title} className="w-full h-32 object-cover" />
                <div className="p-4">
                  <div className="text-sm text-blue-600 font-semibold mb-1">{chapter.time}</div>
                  <h4 className="font-semibold text-gray-900 mb-2">{chapter.title}</h4>
                  <p className="text-sm text-gray-600">{chapter.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Be Part of Their Story</h2>
          <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
            Your support helps write new chapters of hope for refugees around the world. 
            Join us in creating more stories of successful resettlement and integration.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-md font-semibold flex items-center justify-center transition-colors">
              <Heart className="w-5 h-5 mr-2" />
              Donate Now
            </button>
            <button className="border border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-md font-semibold flex items-center justify-center transition-colors">
              Share This Story
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WatchOurStoryPage;