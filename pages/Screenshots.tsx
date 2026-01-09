import React, { useState } from 'react';
import { X, ZoomIn, ChevronLeft, ChevronRight } from 'lucide-react';

const SCREENSHOTS = [
  {
    src: '/WebistePicturesFeatures/Dashboard.png',
    title: 'Dashboard',
    description: 'Main dashboard with key metrics, today\'s summary, and quick actions'
  },
  {
    src: '/WebistePicturesFeatures/CustomerList.png',
    title: 'Customer List',
    description: 'View and search all registered customers with status indicators'
  },
  {
    src: '/WebistePicturesFeatures/RegisterCustomer.png',
    title: 'Customer Registration',
    description: 'Register new customers with personal details, KYC documents, and contact information'
  },
  {
    src: '/WebistePicturesFeatures/DepositAccounts.png',
    title: 'Deposit Accounts',
    description: 'Manage customer deposit accounts with balances and account details'
  },
  {
    src: '/WebistePicturesFeatures/DepositProducts.png',
    title: 'Deposit Products',
    description: 'Configure savings, current, fixed deposit, and mandatory savings products'
  },
  {
    src: '/WebistePicturesFeatures/DepositTransactions.png',
    title: 'Deposit Transactions',
    description: 'View and process deposit account transactions including deposits, withdrawals, and transfers'
  },
  {
    src: '/WebistePicturesFeatures/ActiveLoans.png',
    title: 'Active Loans',
    description: 'View all active loans with outstanding balances, due dates, and status'
  },
  {
    src: '/WebistePicturesFeatures/LoanReport_Schedules.png',
    title: 'Loan Schedules & Reports',
    description: 'View loan repayment schedules and generate comprehensive loan reports'
  },
  {
    src: '/WebistePicturesFeatures/LoanStatements.png',
    title: 'Loan Statements',
    description: 'Generate detailed loan statements showing payments, balances, and transaction history'
  },
  {
    src: '/WebistePicturesFeatures/LoanReschedule.png',
    title: 'Loan Reschedule',
    description: 'Restructure loans with term extension, payment holiday, or rate adjustments'
  },
  {
    src: '/WebistePicturesFeatures/Overdue Loans.png',
    title: 'Overdue Loans',
    description: 'Monitor and manage overdue loans with days overdue and arrears tracking'
  },
  {
    src: '/WebistePicturesFeatures/PortfolioRisk.png',
    title: 'Portfolio at Risk (PAR)',
    description: 'Real-time PAR analysis with aging buckets and provisioning calculations'
  },
  {
    src: '/WebistePicturesFeatures/TreasuryDashBoard.png',
    title: 'Treasury Dashboard',
    description: 'Monitor cash in tills, vault balances, and daily cash movements'
  },
  {
    src: '/WebistePicturesFeatures/ChartofAccounts.png',
    title: 'Chart of Accounts',
    description: 'Manage GL accounts with hierarchical structure for complete financial tracking'
  },
  {
    src: '/WebistePicturesFeatures/TrialBalance.png',
    title: 'Trial Balance',
    description: 'Generate trial balance reports with debit and credit verification'
  },
  {
    src: '/WebistePicturesFeatures/AccruedPayables.png',
    title: 'Accrued Payables',
    description: 'Track and manage accrued expenses and pending payments'
  },
  {
    src: '/WebistePicturesFeatures/SmsCommunitionLog.png',
    title: 'SMS Communication Log',
    description: 'View complete history of all SMS notifications sent to customers'
  },
  {
    src: '/WebistePicturesFeatures/UserAdministration.png',
    title: 'User Administration',
    description: 'Manage system users with roles, branches, and access permissions'
  },
  {
    src: '/WebistePicturesFeatures/RoleManagement.png',
    title: 'Role Management',
    description: 'Configure user roles with granular permission settings'
  },
  {
    src: '/WebistePicturesFeatures/BackgrounjobMonitoring.png',
    title: 'Background Job Monitoring',
    description: 'Monitor scheduled jobs: Auto-Debit, Penalty Application, Interest Accrual, Delinquency Updates'
  },
  {
    src: '/WebistePicturesFeatures/MCAGReport_1.png',
    title: 'MCAG Report - Section A',
    description: 'Institution information and summary for MCAG quarterly returns'
  },
  {
    src: '/WebistePicturesFeatures/MCAGReport_2.png',
    title: 'MCAG Report - Balance Sheet',
    description: 'Balance sheet section showing assets, liabilities, and equity position'
  },
  {
    src: '/WebistePicturesFeatures/MCAGReport_3.png',
    title: 'MCAG Report - Income Statement',
    description: 'Income statement with revenue, expenses, and profitability metrics'
  },
  {
    src: '/WebistePicturesFeatures/MCAGReport_4.png',
    title: 'MCAG Report - Portfolio Analysis',
    description: 'Loan portfolio breakdown by product, sector, and classification'
  },
  {
    src: '/WebistePicturesFeatures/MCAGReport_5.png',
    title: 'MCAG Report - PAR Analysis',
    description: 'Portfolio at Risk analysis with aging buckets and provisioning'
  },
];

const Screenshots: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setSelectedImage(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  const goToPrevious = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? SCREENSHOTS.length - 1 : selectedImage - 1);
    }
  };

  const goToNext = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === SCREENSHOTS.length - 1 ? 0 : selectedImage + 1);
    }
  };

  // Handle keyboard navigation
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImage === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') goToPrevious();
      if (e.key === 'ArrowRight') goToNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage]);

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-brand-900 to-brand-800 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              See GxLMS in Action
            </h1>
            <p className="mt-6 text-xl leading-8 text-brand-100">
              Explore screenshots of our core banking platform. Click any image to view in full size.
            </p>
          </div>
        </div>
      </div>

      {/* Screenshots Grid */}
      <div className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SCREENSHOTS.map((screenshot, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer"
                onClick={() => openLightbox(index)}
              >
                <div className="aspect-video relative overflow-hidden bg-slate-100">
                  <img
                    src={screenshot.src}
                    alt={screenshot.title}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg">
                        <ZoomIn className="h-6 w-6 text-brand-600" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-semibold text-slate-900 text-lg">{screenshot.title}</h3>
                  <p className="text-sm text-slate-500 mt-1">{screenshot.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Feature Highlights */}
      <div className="py-16 bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Designed for Efficiency
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              GxLMS features an intuitive interface designed specifically for lending institution workflows.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl border border-slate-200">
              <div className="text-4xl font-bold text-brand-600">10+</div>
              <div className="text-slate-900 font-semibold mt-2">User Roles</div>
              <p className="text-slate-500 text-sm mt-1">Role-based access from SuperAdmin to Field Agents</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-slate-200">
              <div className="text-4xl font-bold text-brand-600">120+</div>
              <div className="text-slate-900 font-semibold mt-2">Features</div>
              <p className="text-slate-500 text-sm mt-1">Comprehensive functionality for all lending operations</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-slate-200">
              <div className="text-4xl font-bold text-brand-600">100%</div>
              <div className="text-slate-900 font-semibold mt-2">MCAG Compliant</div>
              <p className="text-slate-500 text-sm mt-1">Built-in regulatory reporting and compliance</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-brand-900 py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Want to see a live demo?
          </h2>
          <p className="mt-4 text-lg text-brand-100 max-w-2xl mx-auto">
            Try out GxLMS yourself! Send us a WhatsApp message to receive your login details.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://wa.me/233247439400?text=Hi%2C%20I%20would%20like%20to%20request%20login%20details%20for%20the%20GxLMS%20demo."
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md bg-green-500 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-green-600 transition-colors flex items-center gap-2"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              Request Login Details
            </a>
            <a
              href="https://loanapstorage.blob.core.windows.net/loansapp/Publish.html"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md bg-white px-6 py-3 text-sm font-semibold text-brand-600 shadow-sm hover:bg-brand-50 transition-colors"
            >
              Try Live Demo
            </a>
          </div>
          <p className="mt-6 text-sm text-brand-200">
            Contact us on WhatsApp to get your demo credentials
          </p>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
          onClick={closeLightbox}
        >
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors z-10"
          >
            <X className="h-8 w-8" />
          </button>

          {/* Previous button */}
          <button
            onClick={(e) => { e.stopPropagation(); goToPrevious(); }}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors bg-white/10 hover:bg-white/20 rounded-full p-2"
          >
            <ChevronLeft className="h-8 w-8" />
          </button>

          {/* Next button */}
          <button
            onClick={(e) => { e.stopPropagation(); goToNext(); }}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors bg-white/10 hover:bg-white/20 rounded-full p-2"
          >
            <ChevronRight className="h-8 w-8" />
          </button>

          {/* Image container */}
          <div 
            className="max-w-[90vw] max-h-[85vh] relative"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={SCREENSHOTS[selectedImage].src}
              alt={SCREENSHOTS[selectedImage].title}
              className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg">
              <h3 className="text-white font-semibold text-xl">{SCREENSHOTS[selectedImage].title}</h3>
              <p className="text-white/70 text-sm mt-1">{SCREENSHOTS[selectedImage].description}</p>
              <p className="text-white/50 text-xs mt-2">{selectedImage + 1} of {SCREENSHOTS.length} • Use arrow keys to navigate</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Screenshots;
