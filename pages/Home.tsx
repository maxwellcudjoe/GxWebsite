import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, ShieldCheck, TrendingUp, Users } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative isolate overflow-hidden bg-gradient-to-b from-brand-50/50">
        <div className="mx-auto max-w-7xl pb-24 pt-10 sm:pb-32 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:px-8 lg:py-40">
          <div className="px-6 lg:px-0 lg:pt-4">
            <div className="mx-auto max-w-2xl">
              <div className="max-w-lg">
                <div className="mt-24 sm:mt-32 lg:mt-16">
                  <span className="inline-flex items-center rounded-md bg-brand-50 px-2 py-1 text-xs font-medium text-brand-700 ring-1 ring-inset ring-brand-700/10 mb-6">
                    MCAG Regulated Solution
                  </span>
                </div>
                <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 sm:text-6xl">
                  The Complete Core Banking System
                </h1>
                <p className="mt-6 text-lg leading-8 text-slate-600">
                  Streamline your micro-credit operations with GxLMS. End-to-end loan management, deposit accounts, treasury, and MCAG regulatory compliance—all in one platform.
                </p>
                <div className="mt-10 flex items-center gap-x-6">
                  <Link
                    to="/onboarding"
                    className="rounded-md bg-brand-600 px-6 py-3.5 text-sm font-semibold text-white shadow-sm hover:bg-brand-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600 transition-colors"
                  >
                    Start Onboarding
                  </Link>
                  <Link to="/features" className="text-sm font-semibold leading-6 text-slate-900 flex items-center gap-1 hover:text-brand-600 transition-colors">
                    View Features <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-20 sm:mt-24 md:mx-auto md:max-w-2xl lg:mx-0 lg:mt-0 lg:w-screen">
             <div className="bg-slate-900 rounded-tl-3xl shadow-2xl p-4 sm:p-6 lg:p-8 h-full min-h-[400px] flex items-center justify-center overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-900 to-slate-900 opacity-90 z-0"></div>
                
                {/* Abstract UI representation */}
                <div className="relative z-10 w-full max-w-md bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 shadow-2xl transform rotate-[-2deg] hover:rotate-0 transition-transform duration-500">
                  <div className="flex items-center justify-between mb-6">
                     <div className="h-3 w-24 bg-brand-400 rounded-full opacity-75"></div>
                     <div className="flex space-x-2">
                        <div className="h-2 w-2 rounded-full bg-red-400"></div>
                        <div className="h-2 w-2 rounded-full bg-yellow-400"></div>
                        <div className="h-2 w-2 rounded-full bg-green-400"></div>
                     </div>
                  </div>
                  <div className="space-y-4">
                     <div className="flex justify-between items-end">
                        <div className="space-y-2">
                           <div className="h-2 w-16 bg-slate-400/30 rounded"></div>
                           <div className="h-8 w-32 bg-white/90 rounded"></div>
                        </div>
                         <div className="h-6 w-16 bg-green-500/20 text-green-400 rounded text-xs flex items-center justify-center font-mono">+12.5%</div>
                     </div>
                     <div className="h-32 bg-slate-800/50 rounded-lg border border-white/5 p-4 flex items-end justify-between space-x-2">
                         <div className="h-[40%] w-full bg-brand-500/40 rounded-t"></div>
                         <div className="h-[60%] w-full bg-brand-500/60 rounded-t"></div>
                         <div className="h-[45%] w-full bg-brand-500/40 rounded-t"></div>
                         <div className="h-[80%] w-full bg-brand-500/80 rounded-t"></div>
                         <div className="h-[65%] w-full bg-brand-500/50 rounded-t"></div>
                     </div>
                     <div className="grid grid-cols-2 gap-3">
                        <div className="h-10 bg-slate-700/50 rounded flex items-center px-3">
                           <div className="h-2 w-full bg-slate-500/30 rounded"></div>
                        </div>
                        <div className="h-10 bg-slate-700/50 rounded flex items-center px-3">
                           <div className="h-2 w-full bg-slate-500/30 rounded"></div>
                        </div>
                     </div>
                  </div>
                </div>

                 {/* Decorative elements */}
                <div className="absolute -bottom-10 -right-10 h-64 w-64 bg-brand-500/20 rounded-full blur-3xl"></div>
                <div className="absolute -top-10 -left-10 h-64 w-64 bg-purple-500/20 rounded-full blur-3xl"></div>

             </div>
          </div>
        </div>
      </div>

      {/* Trust Section */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-brand-600">Built for Trust</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Why micro-credit institutions choose GxLMS
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              <div className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-slate-900">
                  <ShieldCheck className="h-5 w-5 flex-none text-brand-600" />
                  MCAG Compliant
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-slate-600">
                  <p className="flex-auto">Built-in regulatory compliance with automated MCAG quarterly returns, PAR analysis, and audit trails. Stay compliant effortlessly.</p>
                </dd>
              </div>
              <div className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-slate-900">
                  <Users className="h-5 w-5 flex-none text-brand-600" />
                  Customer-Centered
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-slate-600">
                  <p className="flex-auto">Complete KYC verification, customer management, loan applications, and deposit accounts—all designed around your clients' needs.</p>
                </dd>
              </div>
              <div className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-slate-900">
                  <TrendingUp className="h-5 w-5 flex-none text-brand-600" />
                  Multi-Tenant & Scalable
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-slate-600">
                  <p className="flex-auto">Whether you have one branch or dozens, our multi-tenant cloud infrastructure scales to match your MFI's growth—from head office to field agents.</p>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-brand-900">
        <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to transform your micro-credit operations?
              <br />
              Start your onboarding today.
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-brand-100">
              Join the growing network of MCAG-regulated institutions using GxLMS to streamline lending, manage risk, and grow their portfolio.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                to="/onboarding"
                className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-brand-600 shadow-sm hover:bg-brand-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Get started
              </Link>
              <Link to="/contact" className="text-sm font-semibold leading-6 text-white flex items-center gap-1">
                Contact sales <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;