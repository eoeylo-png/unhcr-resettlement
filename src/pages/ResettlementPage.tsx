import React from 'react';
import { ArrowRight, Download, Users, Home, Heart, Shield, Globe, FileText, ExternalLink } from 'lucide-react';

const ResettlementPage = () => {
  const keyFacts = [
    { number: '1.4M', label: 'People in need of resettlement globally' },
    { number: '114,300', label: 'Refugees resettled in 2023' },
    { number: '37', label: 'Resettlement countries worldwide' },
    { number: '3%', label: 'Of global refugee population resettled annually' }
  ];

  const resettlementCountries = [
    { country: 'United States', refugees: '60,014', flag: '🇺🇸' },
    { country: 'Canada', refugees: '23,301', flag: '🇨🇦' },
    { country: 'Australia', refugees: '17,875', flag: '🇦🇺' },
    { country: 'Sweden', refugees: '5,243', flag: '🇸🇪' },
    { country: 'Germany', refugees: '4,234', flag: '🇩🇪' },
    { country: 'Norway', refugees: '3,156', flag: '🇳🇴' }
  ];

  const resources = [
    {
      title: 'UNHCR Resettlement Handbook',
      description: 'Comprehensive guide to resettlement procedures and best practices',
      type: 'PDF',
      size: '2.4 MB',
      url: '/pdf-viewer?doc=resettlement-handbook'
    },
    {
      title: 'Global Resettlement Statistical Report 2023',
      description: 'Annual statistics and trends in refugee resettlement',
      type: 'PDF',
      size: '1.8 MB',
      url: '/pdf-viewer?doc=resettlement-statistics-2023'
    },
    {
      title: 'Resettlement Submission Categories',
      description: 'Detailed criteria for different resettlement categories',
      type: 'PDF',
      size: '956 KB',
      url: '/pdf-viewer?doc=submission-categories'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="max-w-7xl mx-auto px-4">
          <nav className="flex items-center space-x-2 text-sm">
            <a href="/" className="text-blue-600 hover:text-blue-800">Home</a>
            <span className="text-gray-400">/</span>
            <a href="/what-we-do" className="text-blue-600 hover:text-blue-800">What we do</a>
            <span className="text-gray-400">/</span>
            <span className="text-gray-600">Build better futures</span>
            <span className="text-gray-400">/</span>
            <span className="text-gray-600">Solutions</span>
            <span className="text-gray-400">/</span>
            <span className="text-gray-900 font-medium">Resettlement</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div 
          className="relative min-h-[400px] bg-cover bg-center flex items-center"
          style={{
            backgroundImage: "url('https://images.pexels.com/photos/6647264/pexels-photo-6647264.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')"
          }}
        >
          <div className="max-w-7xl mx-auto px-4 py-16">
            <div className="max-w-3xl">
              <h1 className="text-5xl font-bold mb-6 leading-tight">
                Resettlement
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                Resettlement is the transfer of refugees from an asylum country to another State that has agreed to admit them and ultimately grant them permanent residence. It is a vital tool for international protection and a durable solution for refugees.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-md font-semibold flex items-center justify-center transition-colors">
                  <Download className="w-5 h-5 mr-2" />
                  Download Resources
                </button>
                <button className="border border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3 rounded-md font-semibold flex items-center justify-center transition-colors">
                  <ExternalLink className="w-5 h-5 mr-2" />
                  Partner Portal
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Statistics */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Resettlement by Numbers</h2>
            <p className="text-xl text-gray-600">Understanding the global scope and impact of refugee resettlement</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {keyFacts.map((fact, index) => (
              <div key={index} className="bg-white rounded-lg p-6 text-center shadow-lg">
                <div className="text-3xl font-bold text-blue-600 mb-2">{fact.number}</div>
                <div className="text-gray-600">{fact.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What is Resettlement */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">What is Resettlement?</h2>
              <div className="space-y-6">
                <p className="text-lg text-gray-700">
                  Resettlement is one of three durable solutions available to refugees, alongside voluntary repatriation and local integration. It involves the selection and transfer of refugees from a State in which they have sought protection to a third State which has agreed to admit them.
                </p>
                <p className="text-lg text-gray-700">
                  The resettlement State provides refugees with legal and physical protection, including access to civil, political, economic, social and cultural rights similar to those enjoyed by nationals.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start">
                    <Shield className="w-6 h-6 text-blue-600 mr-3 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Protection Tool</h4>
                      <p className="text-gray-600 text-sm">Provides international protection for refugees who cannot return home</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Home className="w-6 h-6 text-blue-600 mr-3 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Durable Solution</h4>
                      <p className="text-gray-600 text-sm">Offers permanent residence and path to citizenship</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Users className="w-6 h-6 text-blue-600 mr-3 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Responsibility Sharing</h4>
                      <p className="text-gray-600 text-sm">Shares responsibility among the international community</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Heart className="w-6 h-6 text-blue-600 mr-3 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Life-saving</h4>
                      <p className="text-gray-600 text-sm">Critical for refugees facing serious protection risks</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/6994344/pexels-photo-6994344.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Refugee family"
                className="rounded-lg shadow-lg"
              />
              <div className="absolute inset-0 bg-blue-600 bg-opacity-20 rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Resettlement Process */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">The Resettlement Process</h2>
            <p className="text-xl text-gray-600">A step-by-step journey from identification to integration</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: '1',
                title: 'Identification',
                description: 'UNHCR identifies refugees in need of resettlement based on protection needs and vulnerability',
                icon: <Users className="w-8 h-8" />
              },
              {
                step: '2',
                title: 'Assessment',
                description: 'Comprehensive assessment including interviews, documentation review, and medical screening',
                icon: <FileText className="w-8 h-8" />
              },
              {
                step: '3',
                title: 'Submission',
                description: 'Cases are submitted to resettlement countries based on their criteria and capacity',
                icon: <Globe className="w-8 h-8" />
              },
              {
                step: '4',
                title: 'Integration',
                description: 'Successful refugees receive support for integration into their new communities',
                icon: <Home className="w-8 h-8" />
              }
            ].map((process, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md text-center">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <div className="text-blue-600">{process.icon}</div>
                </div>
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mx-auto mb-3 text-sm font-bold">
                  {process.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{process.title}</h3>
                <p className="text-gray-600">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Top Resettlement Countries */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Top Resettlement Countries 2023</h2>
            <p className="text-xl text-gray-600">Countries leading in refugee resettlement admissions</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resettlementCountries.map((country, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <span className="text-3xl mr-3">{country.flag}</span>
                    <h3 className="text-xl font-semibold text-gray-900">{country.country}</h3>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-blue-600">{country.refugees}</div>
                    <div className="text-sm text-gray-600">refugees</div>
                  </div>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-blue-600 h-2 rounded-full" 
                    style={{ width: `${index === 0 ? 100 : (parseInt(country.refugees.replace(',', '')) / 60014) * 100}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resources and Documents */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Resources & Documents</h2>
            <p className="text-xl text-gray-600">Essential documents and resources for resettlement stakeholders</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resources.map((resource, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <div className="bg-red-100 rounded-lg p-3">
                    <FileText className="w-6 h-6 text-red-600" />
                  </div>
                  <div className="text-right">
                    <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs font-medium">{resource.type}</span>
                    <div className="text-xs text-gray-500 mt-1">{resource.size}</div>
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{resource.title}</h3>
                <p className="text-gray-600 mb-4">{resource.description}</p>
                <a 
                  href={resource.url}
                  className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-800 transition-colors"
                >
                  <Download className="w-4 h-4 mr-2" />
                  View Document
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Support Resettlement Efforts</h2>
          <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
            Your support helps UNHCR identify, process, and support refugees in need of resettlement. 
            Together, we can provide hope and new beginnings for the world's most vulnerable refugees.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-md font-semibold flex items-center justify-center transition-colors">
              <Heart className="w-5 h-5 mr-2" />
              Donate Now
            </button>
            <button className="border border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-md font-semibold flex items-center justify-center transition-colors">
              Learn About Partnerships
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ResettlementPage;