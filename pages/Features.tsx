import React, { useState } from 'react';
import { FEATURES, FEATURE_MODULES } from '../constants';
import { ChevronDown, ChevronUp, CheckCircle2 } from 'lucide-react';

const Features: React.FC = () => {
  const [expandedModule, setExpandedModule] = useState<string | null>('customerManagement');

  const moduleKeys = Object.keys(FEATURE_MODULES) as Array<keyof typeof FEATURE_MODULES>;

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-brand-900 to-brand-800 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Complete Core Banking Features
            </h1>
            <p className="mt-6 text-xl leading-8 text-brand-100">
              GxLMS is a comprehensive multi-tenant core banking solution designed for lending institutions. Every feature you need to manage customers, loans, deposits, treasury, compliance, and more.
            </p>
          </div>
        </div>
      </div>

      {/* Quick Feature Cards */}
      <div className="py-16 sm:py-24 bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center mb-16">
            <h2 className="text-base font-semibold leading-7 text-brand-600">Core Modules</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Everything you need to run a lending institution
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-3">
              {FEATURES.map((feature) => (
                <div key={feature.title} className="flex flex-col bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300 border border-slate-100">
                  <dt className="flex items-center gap-x-3 text-xl font-semibold leading-7 text-slate-900 mb-4">
                    <div className="bg-brand-50 p-3 rounded-xl">
                      <feature.icon className="h-6 w-6 text-brand-600" aria-hidden="true" />
                    </div>
                    {feature.title}
                  </dt>
                  <dd className="flex flex-auto flex-col text-base leading-7 text-slate-600">
                    <p className="flex-auto">{feature.description}</p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      {/* Detailed Feature Modules */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center mb-16">
            <h2 className="text-base font-semibold leading-7 text-brand-600">Detailed Capabilities</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Explore Every Feature in Depth
            </p>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              Click on any module below to see the complete list of features and capabilities available in GxLMS.
            </p>
          </div>

          <div className="space-y-4">
            {moduleKeys.map((moduleKey) => {
              const module = FEATURE_MODULES[moduleKey];
              const isExpanded = expandedModule === moduleKey;
              
              return (
                <div key={moduleKey} className="border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-sm">
                  <button
                    onClick={() => setExpandedModule(isExpanded ? null : moduleKey)}
                    className="w-full px-6 py-5 flex items-center justify-between hover:bg-slate-50 transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <div className={`p-3 rounded-xl ${isExpanded ? 'bg-brand-600' : 'bg-brand-50'}`}>
                        <module.icon className={`h-6 w-6 ${isExpanded ? 'text-white' : 'text-brand-600'}`} />
                      </div>
                      <div className="text-left">
                        <h3 className="text-lg font-semibold text-slate-900">{module.title}</h3>
                        <p className="text-sm text-slate-500">{module.description}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-sm text-slate-400 hidden sm:block">{module.features.length} features</span>
                      {isExpanded ? (
                        <ChevronUp className="h-5 w-5 text-slate-400" />
                      ) : (
                        <ChevronDown className="h-5 w-5 text-slate-400" />
                      )}
                    </div>
                  </button>
                  
                  {isExpanded && (
                    <div className="px-6 pb-6 border-t border-slate-100">
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
                        {module.features.map((feature, idx) => (
                          <div key={idx} className="flex gap-3 p-4 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors">
                            <div className="flex-shrink-0">
                              <feature.icon className="h-5 w-5 text-brand-600 mt-0.5" />
                            </div>
                            <div>
                              <h4 className="font-medium text-slate-900 text-sm">{feature.name}</h4>
                              <p className="text-xs text-slate-500 mt-1">{feature.description}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* User Roles Section */}
      <div className="py-24 sm:py-32 bg-slate-900">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center mb-16">
            <h2 className="text-base font-semibold leading-7 text-brand-400">Role-Based Access</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              10 Pre-Configured User Roles
            </p>
            <p className="mt-6 text-lg leading-8 text-slate-300">
              GxLMS comes with comprehensive role-based access control to ensure the right people have access to the right features.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              { role: 'SuperAdmin', desc: 'Full system access' },
              { role: 'TenantAdmin', desc: 'Institution admin' },
              { role: 'BranchManager', desc: 'Branch oversight' },
              { role: 'LoanOfficer', desc: 'Loan processing' },
              { role: 'Teller', desc: 'Cash operations' },
              { role: 'Cashier', desc: 'Basic cash handling' },
              { role: 'Auditor', desc: 'Read-only audit' },
              { role: 'Agent', desc: 'Field collections' },
              { role: 'Accountant', desc: 'Financial mgmt' },
              { role: 'RiskManager', desc: 'Risk oversight' },
            ].map((item, idx) => (
              <div key={idx} className="bg-slate-800 rounded-xl p-4 text-center hover:bg-slate-700 transition-colors">
                <div className="text-brand-400 font-semibold text-sm">{item.role}</div>
                <div className="text-slate-400 text-xs mt-1">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Loan Interest Methods */}
      <div className="py-24 sm:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-base font-semibold leading-7 text-brand-600">Flexible Interest Calculation</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Multiple Interest Methods
              </p>
              <p className="mt-6 text-lg leading-8 text-slate-600">
                GxLMS supports various interest calculation methods to match your loan products and regulatory requirements.
              </p>
              <div className="mt-10 space-y-6">
                {[
                  { method: 'Flat Rate', desc: 'Interest calculated on the original principal amount throughout the loan term' },
                  { method: 'Declining Balance', desc: 'Interest calculated on the remaining principal, reducing as payments are made' },
                  { method: 'Declining Balance (Excel PMT)', desc: 'Uses Excel-style PMT formula for precise amortization schedules' },
                  { method: 'Hybrid', desc: 'Declining balance for initial periods, then switches to flat rate' },
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4">
                    <CheckCircle2 className="h-6 w-6 text-brand-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-slate-900">{item.method}</h4>
                      <p className="text-slate-600 text-sm mt-1">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
              <h3 className="font-semibold text-slate-900 mb-6">MCAG Loan Sectors Supported</h3>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { code: 'AGR', name: 'Agriculture' },
                  { code: 'TRA', name: 'Trade' },
                  { code: 'SER', name: 'Services' },
                  { code: 'MAN', name: 'Manufacturing' },
                  { code: 'CON', name: 'Construction' },
                  { code: 'TRN', name: 'Transport' },
                  { code: 'EDU', name: 'Education' },
                  { code: 'HEA', name: 'Healthcare' },
                  { code: 'OTH', name: 'Other' },
                ].map((sector, idx) => (
                  <div key={idx} className="flex items-center gap-2 p-3 bg-white rounded-lg border border-slate-100">
                    <span className="text-xs font-mono bg-brand-100 text-brand-700 px-2 py-0.5 rounded">{sector.code}</span>
                    <span className="text-sm text-slate-700">{sector.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* PAR Buckets Section */}
      <div className="py-24 sm:py-32 bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center mb-16">
            <h2 className="text-base font-semibold leading-7 text-brand-600">Risk Management</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Portfolio at Risk (PAR) Analysis
            </p>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              Track loan quality with MCAG-compliant PAR buckets and automatic provisioning calculations.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { bucket: 'Current', days: '0 days', provision: '0%', color: 'bg-green-500' },
              { bucket: 'PAR 1-30', days: '1-30 days', provision: '5%', color: 'bg-yellow-500' },
              { bucket: 'PAR 31-60', days: '31-60 days', provision: '20%', color: 'bg-orange-400' },
              { bucket: 'PAR 61-90', days: '61-90 days', provision: '50%', color: 'bg-orange-500' },
              { bucket: 'PAR 91-180', days: '91-180 days', provision: '75%', color: 'bg-red-400' },
              { bucket: 'PAR 180+', days: '181+ days', provision: '100%', color: 'bg-red-600' },
            ].map((item, idx) => (
              <div key={idx} className="bg-white rounded-xl p-5 text-center shadow-sm border border-slate-100">
                <div className={`w-3 h-3 ${item.color} rounded-full mx-auto mb-3`}></div>
                <div className="font-semibold text-slate-900">{item.bucket}</div>
                <div className="text-sm text-slate-500 mt-1">{item.days}</div>
                <div className="text-xs text-brand-600 font-medium mt-2">{item.provision} Provision</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Background Jobs Section */}
      <div className="py-24 sm:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="bg-slate-900 rounded-2xl p-8">
              <h3 className="text-white font-semibold mb-6">Automated Background Jobs</h3>
              <div className="space-y-4">
                {[
                  { job: 'Auto-Debit Processing', time: '6:00 AM', desc: 'Automatic loan payment deductions from deposit accounts' },
                  { job: 'Penalty Application', time: '7:00 AM', desc: 'Apply late fees to overdue loan accounts' },
                  { job: 'Interest Accrual', time: '11:00 PM', desc: 'Accrue daily interest on loans and deposits' },
                  { job: 'Delinquency Update', time: '11:00 PM', desc: 'Update PAR buckets and aging classification' },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4 p-4 bg-slate-800 rounded-xl">
                    <div className="bg-brand-600 text-white text-xs font-mono px-2 py-1 rounded flex-shrink-0">{item.time}</div>
                    <div>
                      <div className="text-white font-medium text-sm">{item.job}</div>
                      <div className="text-slate-400 text-xs mt-1">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-base font-semibold leading-7 text-brand-600">Automation</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Set It and Forget It
              </p>
              <p className="mt-6 text-lg leading-8 text-slate-600">
                GxLMS runs critical background processes automatically, ensuring your operations continue smoothly without manual intervention.
              </p>
              <ul className="mt-8 space-y-4">
                {[
                  'Scheduled job monitoring dashboard',
                  'Success/failure status tracking',
                  'Manual trigger capability for administrators',
                  'Detailed processing logs and record counts',
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-3 text-slate-600">
                    <CheckCircle2 className="h-5 w-5 text-brand-600 flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Keyboard Shortcuts */}
      <div className="py-24 sm:py-32 bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center mb-16">
            <h2 className="text-base font-semibold leading-7 text-brand-600">Productivity</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Keyboard Shortcuts for Power Users
            </p>
          </div>
          <div className="max-w-2xl mx-auto grid grid-cols-2 gap-4">
            {[
              { key: 'F5', action: 'Refresh dashboard' },
              { key: 'Ctrl+M', action: 'Toggle sidebar menu' },
              { key: 'Esc', action: 'Close dialogs / Collapse menu' },
              { key: 'Ctrl+S', action: 'Save (in forms)' },
              { key: 'Ctrl+P', action: 'Print (where available)' },
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-4 p-4 bg-white rounded-xl border border-slate-200">
                <kbd className="bg-slate-100 text-slate-700 px-3 py-1.5 rounded-lg font-mono text-sm border border-slate-200">{item.key}</kbd>
                <span className="text-slate-600 text-sm">{item.action}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-brand-900 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to see GxLMS in action?
          </h2>
          <p className="mt-6 text-lg leading-8 text-brand-100 max-w-2xl mx-auto">
            Schedule a demo to see how GxLMS can streamline your operations and ensure regulatory compliance.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="/onboarding"
              className="rounded-md bg-white px-6 py-3 text-sm font-semibold text-brand-600 shadow-sm hover:bg-brand-50 transition-colors"
            >
              Start Onboarding
            </a>
            <a
              href="/contact"
              className="text-sm font-semibold leading-6 text-white hover:text-brand-200 transition-colors"
            >
              Contact Sales →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;