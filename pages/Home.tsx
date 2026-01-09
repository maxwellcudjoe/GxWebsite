import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  TrendingUp, 
  Users, 
  Banknote, 
  PieChart, 
  FileText, 
  Clock, 
  Building2, 
  Smartphone,
  Play,
  Star,
  Zap,
  Lock,
  BarChart3,
  CreditCard
} from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero Section - Enhanced */}
      <div className="relative isolate overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-brand-900 via-brand-800 to-slate-900"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.03%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-50"></div>
        
        {/* Animated gradient orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-brand-500/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
          <div className="lg:grid lg:grid-cols-2 lg:gap-x-12 items-center">
            {/* Left Content */}
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 mb-8">
                <span className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm px-4 py-2 text-sm font-medium text-white ring-1 ring-white/20">
                  <ShieldCheck className="h-4 w-4 text-green-400" />
                  MCAG Regulated & Compliant
                </span>
              </div>
              
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                The Complete
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-brand-300 to-cyan-300">
                  Core Banking System
                </span>
                for Lending Institutions
              </h1>
              
              <p className="mt-6 text-lg leading-8 text-slate-300 max-w-xl">
                Empower your micro-finance institution with end-to-end loan management, deposit accounts, treasury operations, and automated MCAG compliance—all in one powerful platform.
              </p>
              
              {/* Key highlights */}
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="flex items-center gap-2 text-sm text-slate-300">
                  <CheckCircle2 className="h-5 w-5 text-green-400 flex-shrink-0" />
                  <span>Automated MCAG Returns</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-300">
                  <CheckCircle2 className="h-5 w-5 text-green-400 flex-shrink-0" />
                  <span>Real-time PAR Analysis</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-300">
                  <CheckCircle2 className="h-5 w-5 text-green-400 flex-shrink-0" />
                  <span>Multi-branch Support</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-300">
                  <CheckCircle2 className="h-5 w-5 text-green-400 flex-shrink-0" />
                  <span>SMS Notifications</span>
                </div>
              </div>

              <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <Link
                  to="/onboarding"
                  className="group inline-flex items-center gap-2 rounded-xl bg-white px-8 py-4 text-base font-semibold text-brand-600 shadow-lg shadow-brand-500/25 hover:bg-brand-50 hover:shadow-xl hover:shadow-brand-500/30 transition-all duration-300"
                >
                  Start Free Trial
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link 
                  to="/screenshots" 
                  className="group inline-flex items-center gap-2 rounded-xl bg-white/10 backdrop-blur-sm px-6 py-4 text-base font-semibold text-white ring-1 ring-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  <Play className="h-5 w-5" />
                  View Demo
                </Link>
              </div>
            </div>

            {/* Right - Dashboard Preview */}
            <div className="mt-16 lg:mt-0">
              <div className="relative">
                {/* Main dashboard card */}
                <div className="relative bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 shadow-2xl p-6 transform hover:scale-[1.02] transition-transform duration-500">
                  {/* Browser dots */}
                  <div className="flex items-center gap-2 mb-6">
                    <div className="h-3 w-3 rounded-full bg-red-400"></div>
                    <div className="h-3 w-3 rounded-full bg-yellow-400"></div>
                    <div className="h-3 w-3 rounded-full bg-green-400"></div>
                    <div className="ml-4 h-6 flex-1 bg-white/10 rounded-full"></div>
                  </div>
                  
                  {/* Stats cards */}
                  <div className="grid grid-cols-3 gap-3 mb-4">
                    <div className="bg-white/10 rounded-xl p-4">
                      <div className="text-xs text-slate-400 mb-1">Total Loans</div>
                      <div className="text-xl font-bold text-white">₵2.4M</div>
                      <div className="text-xs text-green-400 flex items-center gap-1 mt-1">
                        <TrendingUp className="h-3 w-3" /> +12.5%
                      </div>
                    </div>
                    <div className="bg-white/10 rounded-xl p-4">
                      <div className="text-xs text-slate-400 mb-1">Customers</div>
                      <div className="text-xl font-bold text-white">1,234</div>
                      <div className="text-xs text-green-400 flex items-center gap-1 mt-1">
                        <TrendingUp className="h-3 w-3" /> +8.2%
                      </div>
                    </div>
                    <div className="bg-white/10 rounded-xl p-4">
                      <div className="text-xs text-slate-400 mb-1">PAR 30</div>
                      <div className="text-xl font-bold text-white">2.1%</div>
                      <div className="text-xs text-green-400 flex items-center gap-1 mt-1">
                        <TrendingUp className="h-3 w-3" /> -0.5%
                      </div>
                    </div>
                  </div>
                  
                  {/* Chart placeholder */}
                  <div className="bg-white/5 rounded-xl p-4 mb-4">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm text-slate-300">Disbursements</span>
                      <span className="text-xs text-slate-400">Last 7 days</span>
                    </div>
                    <div className="flex items-end justify-between h-24 gap-2">
                      {[40, 65, 45, 80, 55, 70, 90].map((h, i) => (
                        <div key={i} className="flex-1 bg-gradient-to-t from-brand-500 to-brand-400 rounded-t-sm opacity-80" style={{height: `${h}%`}}></div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Quick actions */}
                  <div className="grid grid-cols-2 gap-2">
                    <div className="bg-brand-500/20 rounded-lg px-4 py-3 text-sm text-brand-200 flex items-center gap-2">
                      <Banknote className="h-4 w-4" /> New Loan
                    </div>
                    <div className="bg-purple-500/20 rounded-lg px-4 py-3 text-sm text-purple-200 flex items-center gap-2">
                      <Users className="h-4 w-4" /> Add Customer
                    </div>
                  </div>
                </div>
                
                {/* Floating notification card */}
                <div className="absolute -right-4 top-20 bg-white rounded-xl shadow-xl p-4 w-48 transform rotate-3 hover:rotate-0 transition-transform">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center">
                      <CheckCircle2 className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-slate-900">Loan Approved</div>
                      <div className="text-xs text-slate-500">₵5,000 • Just now</div>
                    </div>
                  </div>
                </div>
                
                {/* Floating PAR card */}
                <div className="absolute -left-4 bottom-20 bg-white rounded-xl shadow-xl p-4 w-40 transform -rotate-3 hover:rotate-0 transition-transform">
                  <div className="text-xs text-slate-500 mb-1">Portfolio Quality</div>
                  <div className="text-2xl font-bold text-slate-900">97.9%</div>
                  <div className="h-2 bg-slate-100 rounded-full mt-2">
                    <div className="h-2 bg-green-500 rounded-full" style={{width: '97.9%'}}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Platform Highlights */}
      <div className="bg-slate-50 py-12 border-y border-slate-200">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col items-center">
            <p className="text-sm font-medium text-slate-500 mb-6">Built for micro-credit and microfinance institutions in Ghana</p>
            <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-4">
              <div className="flex items-center gap-2 text-slate-400">
                <Building2 className="h-6 w-6" />
                <span className="font-semibold">Multi-Branch Support</span>
              </div>
              <div className="flex items-center gap-2 text-slate-400">
                <Users className="h-6 w-6" />
                <span className="font-semibold">Complete KYC</span>
              </div>
              <div className="flex items-center gap-2 text-slate-400">
                <Banknote className="h-6 w-6" />
                <span className="font-semibold">Loan & Deposit Management</span>
              </div>
              <div className="flex items-center gap-2 text-slate-400">
                <ShieldCheck className="h-6 w-6" />
                <span className="font-semibold">MCAG Compliant</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Grid Section */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <span className="inline-flex items-center rounded-full bg-brand-50 px-4 py-1.5 text-sm font-medium text-brand-700 ring-1 ring-inset ring-brand-700/10 mb-4">
              Complete Solution
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Everything you need to run your institution
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              From loan origination to regulatory reporting, GxLMS handles it all.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature Card 1 */}
            <div className="group relative bg-white rounded-2xl p-8 shadow-sm border border-slate-200 hover:shadow-xl hover:border-brand-200 transition-all duration-300">
              <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-brand-500 to-brand-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Banknote className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Loan Management</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Full loan lifecycle from application to disbursement, repayment tracking, and closure. Supports multiple interest methods.
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-center gap-2 text-sm text-slate-500">
                  <CheckCircle2 className="h-4 w-4 text-green-500" /> Flat, Declining & Reducing Balance
                </li>
                <li className="flex items-center gap-2 text-sm text-slate-500">
                  <CheckCircle2 className="h-4 w-4 text-green-500" /> Auto-debit & Penalties
                </li>
              </ul>
            </div>
            
            {/* Feature Card 2 */}
            <div className="group relative bg-white rounded-2xl p-8 shadow-sm border border-slate-200 hover:shadow-xl hover:border-brand-200 transition-all duration-300">
              <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <CreditCard className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Deposit Accounts</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Manage savings, current, fixed deposits, and mandatory savings accounts with automated interest calculations.
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-center gap-2 text-sm text-slate-500">
                  <CheckCircle2 className="h-4 w-4 text-green-500" /> Multiple Account Types
                </li>
                <li className="flex items-center gap-2 text-sm text-slate-500">
                  <CheckCircle2 className="h-4 w-4 text-green-500" /> Interest Accrual & Posting
                </li>
              </ul>
            </div>
            
            {/* Feature Card 3 */}
            <div className="group relative bg-white rounded-2xl p-8 shadow-sm border border-slate-200 hover:shadow-xl hover:border-brand-200 transition-all duration-300">
              <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <ShieldCheck className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">MCAG Compliance</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Automated quarterly returns with all 6 sections. Real-time PAR analysis and provisioning calculations.
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-center gap-2 text-sm text-slate-500">
                  <CheckCircle2 className="h-4 w-4 text-green-500" /> Auto-generated Reports
                </li>
                <li className="flex items-center gap-2 text-sm text-slate-500">
                  <CheckCircle2 className="h-4 w-4 text-green-500" /> Audit Trail
                </li>
              </ul>
            </div>
            
            {/* Feature Card 4 */}
            <div className="group relative bg-white rounded-2xl p-8 shadow-sm border border-slate-200 hover:shadow-xl hover:border-brand-200 transition-all duration-300">
              <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <PieChart className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Treasury & Accounting</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Complete general ledger, chart of accounts, trial balance, and treasury management with vault control.
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-center gap-2 text-sm text-slate-500">
                  <CheckCircle2 className="h-4 w-4 text-green-500" /> Double-entry Accounting
                </li>
                <li className="flex items-center gap-2 text-sm text-slate-500">
                  <CheckCircle2 className="h-4 w-4 text-green-500" /> Cash Movement Tracking
                </li>
              </ul>
            </div>
            
            {/* Feature Card 5 */}
            <div className="group relative bg-white rounded-2xl p-8 shadow-sm border border-slate-200 hover:shadow-xl hover:border-brand-200 transition-all duration-300">
              <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-cyan-500 to-cyan-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Smartphone className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">SMS Notifications</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Keep customers informed with automated SMS for deposits, withdrawals, repayments, and loan status updates.
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-center gap-2 text-sm text-slate-500">
                  <CheckCircle2 className="h-4 w-4 text-green-500" /> Transaction Alerts
                </li>
                <li className="flex items-center gap-2 text-sm text-slate-500">
                  <CheckCircle2 className="h-4 w-4 text-green-500" /> Payment Reminders
                </li>
              </ul>
            </div>
            
            {/* Feature Card 6 */}
            <div className="group relative bg-white rounded-2xl p-8 shadow-sm border border-slate-200 hover:shadow-xl hover:border-brand-200 transition-all duration-300">
              <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-rose-500 to-rose-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <BarChart3 className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Risk & Reporting</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Real-time portfolio at risk (PAR) tracking, aging analysis, and comprehensive management reports.
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-center gap-2 text-sm text-slate-500">
                  <CheckCircle2 className="h-4 w-4 text-green-500" /> PAR 1, 30, 60, 90, 180
                </li>
                <li className="flex items-center gap-2 text-sm text-slate-500">
                  <CheckCircle2 className="h-4 w-4 text-green-500" /> Custom Report Builder
                </li>
              </ul>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <Link to="/features" className="inline-flex items-center gap-2 text-brand-600 font-semibold hover:text-brand-700 transition-colors">
              Explore all 120+ features <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="bg-slate-900 py-24 sm:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-900/50 to-transparent"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-500/10 rounded-full blur-3xl"></div>
        
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <span className="inline-flex items-center rounded-full bg-brand-500/10 px-4 py-1.5 text-sm font-medium text-brand-300 ring-1 ring-inset ring-brand-500/20 mb-4">
                Why GxLMS
              </span>
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-6">
                Built specifically for Ghana's lending sector
              </h2>
              <p className="text-lg text-slate-400 mb-8">
                Unlike generic banking software, GxLMS was designed from the ground up for MCAG-regulated institutions, with local compliance requirements built into every feature.
              </p>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 h-10 w-10 rounded-lg bg-brand-500/20 flex items-center justify-center">
                    <Zap className="h-5 w-5 text-brand-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">Rapid Deployment</h3>
                    <p className="text-slate-400 text-sm">Go live in as little as 2 weeks with our guided onboarding process</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 h-10 w-10 rounded-lg bg-brand-500/20 flex items-center justify-center">
                    <Lock className="h-5 w-5 text-brand-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">Bank-grade Security</h3>
                    <p className="text-slate-400 text-sm">Role-based access, audit trails, and encrypted data at rest and in transit</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 h-10 w-10 rounded-lg bg-brand-500/20 flex items-center justify-center">
                    <Clock className="h-5 w-5 text-brand-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">24/7 Support</h3>
                    <p className="text-slate-400 text-sm">Local support team available via WhatsApp, phone, and email</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-12 lg:mt-0">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-12 w-12 rounded-full bg-brand-500/20 flex items-center justify-center">
                    <FileText className="h-6 w-6 text-brand-400" />
                  </div>
                  <div>
                    <div className="font-semibold text-white">MCAG Quarterly Returns</div>
                    <div className="text-sm text-slate-400">Auto-generated in minutes</div>
                  </div>
                </div>
                
                <div className="space-y-3">
                  {['Section A: Institution Info', 'Section B: Balance Sheet', 'Section C: Income Statement', 'Section D: Portfolio Analysis', 'Section E: PAR Analysis', 'Section F: Compliance Checklist'].map((section, i) => (
                    <div key={i} className="flex items-center gap-3 bg-white/5 rounded-lg px-4 py-3">
                      <CheckCircle2 className="h-5 w-5 text-green-400" />
                      <span className="text-slate-300 text-sm">{section}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 pt-6 border-t border-white/10 flex items-center justify-between">
                  <span className="text-slate-400 text-sm">Compliance Score</span>
                  <span className="text-2xl font-bold text-green-400">100%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonial / Social Proof */}
      <div className="bg-brand-50 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="flex justify-center mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 text-yellow-400 fill-yellow-400" />
              ))}
            </div>
            <blockquote className="text-2xl font-medium text-slate-900 sm:text-3xl leading-relaxed">
              "GxLMS transformed how we manage our loan portfolio. The automated MCAG reporting alone saves us days of work every quarter."
            </blockquote>
            <div className="mt-8">
              <div className="font-semibold text-slate-900">Operations Manager</div>
              <div className="text-slate-600">Financial Institution, Accra</div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section - Enhanced */}
      <div className="relative bg-gradient-to-br from-brand-900 via-brand-800 to-slate-900 py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.03%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-50"></div>
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-brand-500/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
        
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Ready to modernize your
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-brand-300 to-cyan-300">
                lending operations?
              </span>
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-slate-300">
              GxLMS helps lending institutions streamline operations, manage risk, and improve efficiency.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/onboarding"
                className="group inline-flex items-center gap-2 rounded-xl bg-white px-8 py-4 text-base font-semibold text-brand-600 shadow-lg hover:bg-brand-50 transition-all"
              >
                Start Onboarding
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a 
                href="https://wa.me/233247439400?text=Hi%2C%20I%20would%20like%20to%20learn%20more%20about%20GxLMS."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-green-500 px-8 py-4 text-base font-semibold text-white hover:bg-green-600 transition-all"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                Chat on WhatsApp
              </a>
            </div>
            
            <div className="mt-12 flex items-center justify-center gap-8 text-sm text-slate-400">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-400" />
                Free 30-day trial
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-400" />
                No credit card required
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-400" />
                Full support included
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;