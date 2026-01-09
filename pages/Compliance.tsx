import React from 'react';
import { Link } from 'react-router-dom';
import { FileCheck, Shield, AlertCircle, FileSpreadsheet } from 'lucide-react';

const Compliance: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Header */}
      <div className="bg-brand-900 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            MCAG Regulatory Compliance
          </h1>
          <p className="mt-6 text-lg leading-8 text-brand-100 max-w-2xl mx-auto">
            GxLMS is built from the ground up for MCAG-regulated micro-credit institutions. Automated quarterly returns, PAR tracking, and complete audit trails.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center rounded-full bg-green-50 px-3 py-1 text-sm font-medium text-green-700 ring-1 ring-inset ring-green-600/20 mb-6">
              <Shield className="h-4 w-4 mr-2" />
              MCAG Compliant
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-6">
              Built for Regulatory Excellence
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              Stay compliant with Micro-Credit Association of Ghana (MCAG) requirements. GxLMS automates your reporting obligations and maintains complete audit trails.
            </p>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <FileSpreadsheet className="h-6 w-6 text-brand-600 flex-shrink-0" />
                <span className="text-slate-700">Automated MCAG Quarterly Returns generation</span>
              </li>
              <li className="flex gap-3">
                <FileCheck className="h-6 w-6 text-brand-600 flex-shrink-0" />
                <span className="text-slate-700">Portfolio at Risk (PAR) analysis by bucket</span>
              </li>
              <li className="flex gap-3">
                <AlertCircle className="h-6 w-6 text-brand-600 flex-shrink-0" />
                <span className="text-slate-700">Loan loss provisioning per MCAG guidelines</span>
              </li>
            </ul>
            <div className="mt-10">
              <Link to="/contact" className="text-brand-600 font-semibold hover:text-brand-500">
                Schedule a security demo &rarr;
              </Link>
            </div>
          </div>
          <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200">
             <h3 className="font-semibold text-slate-900 mb-4">Compliance Features</h3>
             <div className="space-y-3">
                {[
                  "MCAG Quarterly Returns (Sections A-G)",
                  "PAR Buckets (1-30, 31-60, 61-90, 91-180, 180+)",
                  "Loan Sector Classification",
                  "Complete Audit Trail",
                  "Period Closing Controls",
                  "Role-Based Access Control",
                  "Financial Statement Generation"
                ].map((report, idx) => (
                  <div key={idx} className="flex items-center justify-between p-3 bg-white rounded-lg border border-slate-100 shadow-sm">
                    <span className="text-sm font-medium text-slate-700">{report}</span>
                    <div className="h-2 w-2 bg-green-500 rounded-full"></div>
                  </div>
                ))}
             </div>
          </div>
        </div>

        <div className="mt-24 border-t border-slate-200 pt-16">
           <div className="mx-auto max-w-2xl lg:text-center">
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                 Complete Audit Trail
              </h2>
              <p className="mt-4 text-lg text-slate-600">
                 Every action in the system is logged. From loan disbursements to teller sessions, you have a complete audit trail for regulatory inspections and internal compliance.
              </p>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Compliance;