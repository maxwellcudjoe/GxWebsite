import React from 'react';
import { Link } from 'react-router-dom';
import { Check } from 'lucide-react';
import { PRICING_TIERS } from '../constants';

const Pricing: React.FC = () => {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Simple, transparent pricing</h2>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            Choose the plan that fits your institution size. No hidden fees, no surprises.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-slate-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
          {PRICING_TIERS.map((tier, tierIdx) => (
            <div
              key={tier.name}
              className={`p-8 sm:p-10 lg:flex-auto lg:w-1/3 flex flex-col justify-between ${
                tier.recommended 
                  ? 'bg-slate-900 ring-2 ring-brand-500 shadow-xl relative scale-105 z-10 rounded-3xl' 
                  : tierIdx === 0 
                    ? 'bg-white rounded-l-3xl lg:rounded-r-none border-l border-t border-b border-slate-200' 
                    : 'bg-white rounded-r-3xl lg:rounded-l-none border-r border-t border-b border-slate-200'
              }`}
            >
              {tier.recommended && (
                 <div className="absolute -top-4 left-0 right-0 flex justify-center">
                    <span className="bg-brand-500 text-white px-4 py-1 rounded-full text-sm font-semibold shadow-md">
                       Most Popular
                    </span>
                 </div>
              )}
              <div>
                 <h3 className={`text-2xl font-bold tracking-tight ${tier.recommended ? 'text-white' : 'text-slate-900'}`}>{tier.name}</h3>
                 <p className={`mt-2 text-base leading-7 ${tier.recommended ? 'text-slate-300' : 'text-slate-600'}`}>{tier.description}</p>
                 <div className="mt-8 flex items-baseline gap-x-2">
                    <span className={`text-4xl font-bold tracking-tight ${tier.recommended ? 'text-white' : 'text-slate-900'}`}>{tier.price}</span>
                    <span className={`text-sm font-semibold leading-6 ${tier.recommended ? 'text-slate-300' : 'text-slate-600'}`}>{tier.period}</span>
                 </div>
                 <ul className="mt-8 space-y-3 text-sm leading-6">
                    {tier.features.map((feature) => (
                       <li key={feature} className={`flex gap-x-3 ${tier.recommended ? 'text-slate-300' : 'text-slate-600'}`}>
                          <Check className={`h-6 w-5 flex-none ${tier.recommended ? 'text-brand-400' : 'text-brand-600'}`} aria-hidden="true" />
                          {feature}
                       </li>
                    ))}
                 </ul>
              </div>
              <div className="mt-10">
                 <Link
                    to="/onboarding"
                    className={`block w-full rounded-md px-3 py-2 text-center text-sm font-semibold shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 transition-colors ${
                       tier.recommended
                          ? 'bg-brand-500 text-white hover:bg-brand-400 focus-visible:outline-brand-500'
                          : 'bg-brand-50 text-brand-600 hover:bg-brand-100 ring-1 ring-inset ring-brand-200'
                    }`}
                 >
                    Select Plan
                 </Link>
              </div>
            </div>
          ))}
        </div>
        
        {/* Additional Note */}
        <div className="mx-auto max-w-2xl mt-12 bg-slate-50 p-6 rounded-xl border border-slate-200 text-center">
           <h4 className="text-lg font-semibold text-slate-900">Custom Solutions & Setup</h4>
           <p className="mt-2 text-slate-600 text-sm">
              Need more branches or custom features? <strong>Contact us</strong> for tailored pricing. <br/>
              A one-time setup and training fee applies to all new accounts, determined by portfolio size and data migration needs.
           </p>
        </div>

      </div>
    </div>
  );
};

export default Pricing;