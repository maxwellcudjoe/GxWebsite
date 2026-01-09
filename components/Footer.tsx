import React from 'react';
import { Link } from 'react-router-dom';
import { Landmark, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="bg-brand-600 p-1.5 rounded-lg">
                <Landmark className="h-5 w-5 text-white" />
              </div>
              <span className="font-bold text-xl text-white">GxLMS</span>
            </div>
            <p className="text-sm text-slate-400">
              The complete, multi-tenant core banking system for MCAG-regulated micro-credit institutions in Ghana.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Platform</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/features" className="hover:text-white transition-colors">Features</Link></li>
              <li><Link to="/compliance" className="hover:text-white transition-colors">Compliance</Link></li>
              <li><Link to="/pricing" className="hover:text-white transition-colors">Pricing</Link></li>
              <li><Link to="/onboarding" className="hover:text-white transition-colors">Onboarding</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="#" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link to="#" className="hover:text-white transition-colors">Terms of Service</Link></li>
              <li><Link to="#" className="hover:text-white transition-colors">Security</Link></li>
              <li><Link to="#" className="hover:text-white transition-colors">SLA</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-brand-400" />
                <span>cudjoemaxwell@gmail.com</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-brand-400" />
                <span>0247439400</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-brand-400" />
                <span>Accra, Ghana</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-800 mt-12 pt-8 text-sm text-center text-slate-500">
          &copy; {new Date().getFullYear()} GxLMS. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;