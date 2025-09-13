import React from 'react';
import { Globe, Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const footerSections = [
    {
      title: 'What we do',
      links: ['Protect', 'Assist', 'Include', 'Solve', 'Prevent', 'Emergency response']
    },
    {
      title: 'Where we work',
      links: ['Africa', 'Americas', 'Asia Pacific', 'Europe', 'Middle East', 'Global programmes']
    },
    {
      title: 'Get involved',
      links: ['Donate', 'Volunteer', 'Partner with us', 'Careers', 'Internships', 'Consultancies']
    },
    {
      title: 'Resources',
      links: ['News', 'Reports', 'Data', 'Publications', 'Multimedia', 'Research']
    }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Logo and description */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4">
              <div className="bg-blue-600 text-white p-2 rounded mr-3">
                <Globe className="w-6 h-6" />
              </div>
              <div>
                <div className="text-xl font-bold">UNHCR</div>
                <div className="text-sm text-gray-400">UN Refugee Agency</div>
              </div>
            </div>
            <p className="text-gray-400 mb-6 text-sm">
              UNHCR, the UN Refugee Agency, is a global organization dedicated to saving lives, 
              protecting rights and building a better future for refugees, forcibly displaced 
              communities and stateless people.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Footer links */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h4 className="font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a 
                      href="#" 
                      className="text-gray-400 hover:text-white text-sm transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact information */}
        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-start">
              <MapPin className="w-5 h-5 text-gray-400 mr-3 mt-1" />
              <div>
                <div className="font-semibold mb-1">Headquarters</div>
                <div className="text-gray-400 text-sm">
                  Case Postale 2500<br />
                  CH-1211 Geneva 2 Depot<br />
                  Switzerland
                </div>
              </div>
            </div>
            <div className="flex items-start">
              <Phone className="w-5 h-5 text-gray-400 mr-3 mt-1" />
              <div>
                <div className="font-semibold mb-1">Contact</div>
                <div className="text-gray-400 text-sm">
                  Tel: +1(236)349-0846<br />
                  Emergency: +447877442607
                </div>
              </div>
            </div>
            <div className="flex items-start">
              <Mail className="w-5 h-5 text-gray-400 mr-3 mt-1" />
              <div>
                <div className="font-semibold mb-1">Email</div>
                <div className="text-gray-400 text-sm">
                  unhcrkenya809@gmail.com<br />
                  unhcrsettlement@gmail.com
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom footer */}
        <div className="border-t border-gray-800 pt-6 mt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2024 UNHCR, The UN Refugee Agency. All rights reserved.
          </div>
          <div className="flex flex-wrap justify-center md:justify-end space-x-6 text-sm">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Use</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Accessibility</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Site Map</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Contact Us</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;