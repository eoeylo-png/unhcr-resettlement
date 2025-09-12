import React from 'react';
import { Calendar, ArrowRight } from 'lucide-react';

const NewsSection = () => {
  const news = [
    {
      title: 'UNHCR calls for urgent action as displacement reaches record high',
      excerpt: 'New data shows that forced displacement has reached unprecedented levels, with over 100 million people displaced worldwide.',
      date: 'December 15, 2024',
      image: 'https://images.pexels.com/photos/6994344/pexels-photo-6994344.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Press Release'
    },
    {
      title: 'Winter support reaches refugee families across Eastern Europe',
      excerpt: 'UNHCR distributes winter supplies to thousands of refugee families as temperatures drop across the region.',
      date: 'December 12, 2024',
      image: 'https://images.pexels.com/photos/6647020/pexels-photo-6647020.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Field Update'
    },
    {
      title: 'New partnership expands education opportunities for refugee children',
      excerpt: 'A groundbreaking initiative will provide quality education to over 50,000 refugee children in camps across Africa.',
      date: 'December 10, 2024',
      image: 'https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Programme Update'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Latest News</h2>
            <p className="text-xl text-gray-600">Stay informed about our work and global refugee issues</p>
          </div>
          <button className="hidden lg:flex items-center text-blue-600 font-semibold hover:text-blue-800">
            View All News
            <ArrowRight className="w-5 h-5 ml-2" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.map((article, index) => (
            <article key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer group">
              <div className="relative">
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {article.category}
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center text-gray-500 text-sm mb-3">
                  <Calendar className="w-4 h-4 mr-2" />
                  {article.date}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {article.title}
                </h3>
                <p className="text-gray-600 mb-4">{article.excerpt}</p>
                <button className="text-blue-600 font-semibold hover:text-blue-800 flex items-center">
                  Read More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-8 lg:hidden">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-md font-semibold hover:bg-blue-700 transition-colors">
            View All News
          </button>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;