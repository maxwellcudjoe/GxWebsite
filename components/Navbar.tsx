import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Landmark } from 'lucide-react';
import { NAV_ITEMS } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center gap-2">
              <div className="bg-brand-600 p-1.5 rounded-lg">
                <Landmark className="h-6 w-6 text-white" />
              </div>
              <span className="font-bold text-xl text-slate-900 tracking-tight">Gx<span className="text-brand-600">LMS</span></span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`${
                  location.pathname === item.path
                    ? 'text-brand-600 font-semibold'
                    : 'text-slate-600 hover:text-brand-600'
                } transition-colors duration-200 text-sm font-medium`}
              >
                {item.label}
              </Link>
            ))}
            <Link 
              to="/onboarding"
              className="bg-brand-600 hover:bg-brand-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors shadow-sm"
            >
              Get Started
            </Link>
          </div>

          <div className="flex items-center md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-slate-500 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-brand-500"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-200">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`${
                  location.pathname === item.path
                    ? 'bg-brand-50 text-brand-700'
                    : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                } block px-3 py-2 rounded-md text-base font-medium`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/onboarding"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center mt-4 bg-brand-600 text-white px-4 py-3 rounded-md font-medium"
            >
              Get Started Now
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;