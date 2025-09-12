import React from 'react';
import { Calendar, ArrowRight } from 'lucide-react';

const NewsPage = () => {
  const newsArticles = [
    {
      title: 'UNHCR calls for urgent action as displacement reaches record high',
      excerpt: 'New data shows that forced displacement has reached unprecedented levels worldwide.',
      date: 'December 15, 2024',
      category: 'Press Release',
      image: 'https://images.pexels.com/photos/6994344/pexels-photo-6994344.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Winter support reaches refugee families across Eastern Europe',
      excerpt: 'UNHCR distributes winter supplies to thousands of refugee families.',
      date: 'December 12, 2024',
      category: 'Field Update',
      image: 'https://images.pexels.com/photos/6647020/pexels-photo-6647020.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Latest News</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay informed about our work and global refugee issues.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {newsArticles.map((article, index) => (
            <article key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src={article.image} alt={article.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <div className="flex items-center text-gray-500 text-sm mb-3">
                  <Calendar className="w-4 h-4 mr-2" />
                  {article.date}
                </div>
                <h2 className="text-xl font-semibold text-gray-900 mb-3">{article.title}</h2>
                <p className="text-gray-600 mb-4">{article.excerpt}</p>
                <button className="text-blue-600 font-semibold flex items-center">
                  Read More <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsPage;