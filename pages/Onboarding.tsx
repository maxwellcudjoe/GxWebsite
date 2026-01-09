import React from 'react';
import { ONBOARDING_STEPS } from '../constants';

const Onboarding: React.FC = () => {
  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center mb-16">
          <h2 className="text-base font-semibold leading-7 text-brand-600">Get Started</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Streamlined Onboarding Process
          </p>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            We've made getting started with GxLMS as simple as possible. Follow the steps below to launch your core banking platform.
          </p>
        </div>

        {/* Steps */}
        <div className="mx-auto max-w-2xl lg:max-w-none mb-20">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
            {ONBOARDING_STEPS.map((step) => (
              <div key={step.number} className="relative pl-9">
                <dt className="font-semibold text-slate-900">
                  <div className="absolute left-0 top-1 h-5 w-5 text-brand-600 font-bold text-lg">
                    {step.number}
                  </div>
                  {step.title}
                </dt>
                <dd className="mt-2 text-base leading-7 text-slate-600">
                   {step.description}
                </dd>
              </div>
            ))}
          </div>
        </div>

        {/* Mock Google Form Section */}
        <div className="mx-auto max-w-2xl bg-white shadow-xl rounded-2xl overflow-hidden border border-slate-200">
           <div className="bg-brand-600 px-6 py-4">
              <h3 className="text-xl font-semibold text-white">MFI Interest Form</h3>
              <p className="text-brand-100 text-sm">Fill this out to begin your GxLMS onboarding process.</p>
           </div>
           
           {/* In a real scenario, this would be a <iframe src="https://docs.google.com/forms/..." ... /> */}
           {/* We will build a simulated form UI that looks like a clean digital form */}
           <div className="p-8 space-y-6">
              <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4">
                 <div className="sm:col-span-2">
                    <label htmlFor="company" className="block text-sm font-medium leading-6 text-slate-900">Institution Name</label>
                    <div className="mt-2">
                       <input type="text" name="company" id="company" className="block w-full rounded-md border-0 py-2 px-3 text-slate-900 ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-brand-600 sm:text-sm sm:leading-6" placeholder="e.g. ABC Microfinance Ltd" />
                    </div>
                 </div>

                 <div>
                    <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-slate-900">Contact Person Name</label>
                    <div className="mt-2">
                       <input type="text" name="first-name" id="first-name" className="block w-full rounded-md border-0 py-2 px-3 text-slate-900 ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-brand-600 sm:text-sm sm:leading-6" />
                    </div>
                 </div>

                 <div>
                    <label htmlFor="phone-number" className="block text-sm font-medium leading-6 text-slate-900">Phone Number</label>
                    <div className="mt-2">
                       <input type="tel" name="phone-number" id="phone-number" className="block w-full rounded-md border-0 py-2 px-3 text-slate-900 ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-brand-600 sm:text-sm sm:leading-6" placeholder="+233..." />
                    </div>
                 </div>

                 <div className="sm:col-span-2">
                    <label htmlFor="email" className="block text-sm font-medium leading-6 text-slate-900">Email Address</label>
                    <div className="mt-2">
                       <input type="email" name="email" id="email" className="block w-full rounded-md border-0 py-2 px-3 text-slate-900 ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-brand-600 sm:text-sm sm:leading-6" />
                    </div>
                 </div>

                 <div className="sm:col-span-2">
                    <label htmlFor="portfolio" className="block text-sm font-medium leading-6 text-slate-900">Expected Customer Base</label>
                    <div className="mt-2">
                       <select id="portfolio" name="portfolio" className="block w-full rounded-md border-0 py-2 px-3 text-slate-900 ring-1 ring-inset ring-slate-300 focus:ring-2 focus:ring-inset focus:ring-brand-600 sm:text-sm sm:leading-6">
                          <option>Less than 500 Customers</option>
                          <option>500 - 2,000 Customers</option>
                          <option>2,000 - 5,000 Customers</option>
                          <option>5,000+ Customers</option>
                       </select>
                    </div>
                 </div>
              </div>

              <div className="pt-4">
                 <button type="submit" className="w-full rounded-md bg-brand-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-brand-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600 transition-colors">
                    Submit Interest
                 </button>
                 <p className="mt-4 text-center text-xs text-slate-500">
                    * This form will submit your data securely to our onboarding team.
                 </p>
              </div>
           </div>
        </div>

      </div>
    </div>
  );
};

export default Onboarding;