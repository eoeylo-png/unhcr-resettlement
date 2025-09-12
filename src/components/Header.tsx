import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, Menu, X, ChevronDown, Globe, Heart } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  const menuItems = [
    {
      label: 'What we do',
      items: [
        { name: 'Protect', path: '/what-we-do/protect' },
        { name: 'Assist', path: '/what-we-do/assist' },
        { name: 'Include', path: '/what-we-do/include' },
        { name: 'Solve', path: '/what-we-do/solve' },
        { name: 'Resettlement', path: '/what-we-do/build-better-futures/solutions/resettlement' },
        { name: 'Prevent', path: '/what-we-do/prevent' }
      ]
    },
    {
      label: 'Where we work',
      items: [
        { name: 'Africa', path: '/where-we-work/africa' },
        { name: 'Americas', path: '/where-we-work/americas' },
        { name: 'Asia Pacific', path: '/where-we-work/asia-pacific' },
        { name: 'Europe', path: '/where-we-work/europe' },
        { name: 'Middle East', path: '/where-we-work/middle-east' }
      ]
    },
    {
      label: 'Emergencies',
      items: [
        { name: 'Current emergencies', path: '/emergencies/current' },
        { name: 'Emergency response', path: '/emergencies/response' },
        { name: 'Preparedness', path: '/emergencies/preparedness' }
      ]
    },
    {
      label: 'About us',
      items: [
        { name: 'Who we are', path: '/about-us/who-we-are' },
        { name: 'Our mandate', path: '/about-us/mandate' },
        { name: 'Leadership', path: '/about-us/leadership' },
        { name: 'Accountability', path: '/about-us/accountability' }
      ]
    }
  ];

  return (
    <>
      {/* Top banner */}
      <div className="bg-red-600 text-white py-2 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-sm">
          <div className="flex items-center gap-4">
            <span className="font-semibold">URGENT:</span>
            <span>Millions of refugees need your help. Donate now.</span>
          </div>
          <Link 
            to="/donate"
            className="bg-white text-red-600 px-3 py-1 rounded text-xs font-semibold hover:bg-gray-100 transition-colors"
          >
            DONATE
          </Link>
        </div>
      </div>

      {/* Main header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <div className="bg-blue-600 text-white p-2 rounded mr-3">
                <Globe className="w-6 h-6" />
              </div>
              <div>
                <div className="text-xl font-bold text-blue-600">UNHCR</div>
                <div className="text-xs text-gray-600">UN Refugee Agency</div>
              </div>
            </Link>

            {/* Desktop navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {menuItems.map((item) => (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setActiveDropdown(item.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button className={`flex items-center font-medium transition-colors ${
                    location.pathname.startsWith(`/${item.label.toLowerCase().replace(' ', '-')}`) 
                      ? 'text-blue-600' 
                      : 'text-gray-700 hover:text-blue-600'
                  }`}>
                    {item.label}
                    <ChevronDown className="w-4 h-4 ml-1" />
                  </button>
                  
                  {activeDropdown === item.label && (
                    <div className="absolute top-full left-0 mt-1 bg-white shadow-lg rounded-md py-2 min-w-48 border">
                      {item.items.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.path}
                          className={`block px-4 py-2 transition-colors ${
                            location.pathname === subItem.path
                              ? 'bg-blue-50 text-blue-600'
                              : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                          }`}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Right side buttons */}
            <div className="flex items-center space-x-4">
              <button className="text-gray-600 hover:text-blue-600">
                <Search className="w-5 h-5" />
              </button>
              <Link 
                to="/donate"
                className="bg-orange-500 text-white px-4 py-2 rounded-md font-semibold hover:bg-orange-600 transition-colors flex items-center"
              >
                <Heart className="w-4 h-4 mr-2" />
                Donate
              </Link>
              <button 
                className="md:hidden text-gray-600"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-4 py-4 space-y-4">
              {menuItems.map((item) => (
                <div key={item.label}>
                  <div className="font-semibold text-gray-900 mb-2">{item.label}</div>
                  <div className="pl-4 space-y-2">
                    {item.items.map((subItem) => (
                      <Link
                        key={subItem.name}
                        to={subItem.path}
                        className={`block transition-colors ${
                          location.pathname === subItem.path
                            ? 'text-blue-600'
                            : 'text-gray-600 hover:text-blue-600'
                        }`}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;