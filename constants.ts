import {
  ShieldCheck,
  BarChart3,
  Landmark,
  FileSpreadsheet,
  Lock,
  Briefcase,
  Globe,
  Users,
  CheckCircle2,
  BookOpen,
  GraduationCap,
  Award,
  Calendar,
  Video,
  MessageSquare,
  CreditCard,
  Wallet,
  Building2,
  UserCheck,
  FileText,
  PiggyBank,
  Banknote,
  Receipt,
  Calculator,
  TrendingDown,
  AlertTriangle,
  ClipboardList,
  Settings,
  UserCog,
  GitBranch,
  Clock,
  Smartphone,
  Send,
  RefreshCw,
  DollarSign,
  Scale,
  BadgeCheck,
  FolderOpen,
  Activity,
  Target,
  Percent,
  HandCoins,
  Building,
  ScrollText,
  Bell,
  MapPin,
  Phone
} from 'lucide-react';
import { NavItem, Feature, PricingTier, Step } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'Features', path: '/features' },
  { label: 'Screenshots', path: '/screenshots' },
  { label: 'Compliance', path: '/compliance' },
  { label: 'Pricing', path: '/pricing' },
  { label: 'Onboarding', path: '/onboarding' },
  { label: 'Contact', path: '/contact' },
];

// Main feature categories for the Features page hero
export const FEATURES: Feature[] = [
  {
    title: 'Loan Management',
    description: 'Complete loan lifecycle management from application to disbursement, repayment tracking, and recovery—with multiple interest methods.',
    icon: Landmark,
    image: '/WebistePicturesFeatures/Dashboard.png'
  },
  {
    title: 'Customer & KYC',
    description: 'Comprehensive customer registration, Ghana Card verification, document management, and KYC compliance tracking.',
    icon: Users,
    image: '/WebistePicturesFeatures/CustomerList.png'
  },
  {
    title: 'Deposit Accounts',
    description: 'Manage savings, current, and fixed deposit accounts with interest calculations, liens, and collateral management.',
    icon: Briefcase,
    image: '/WebistePicturesFeatures/DepositTransactions.png'
  },
  {
    title: 'Treasury & Teller',
    description: 'Session-based teller operations, vault management, payment channels, and daily reconciliation for complete cash control.',
    icon: Lock,
    image: '/WebistePicturesFeatures/LoanReport_Schedules.png'
  },
  {
    title: 'SMS & Notifications',
    description: 'Automated SMS alerts for deposits, withdrawals, loan repayments, charges, due date reminders, and overdue notifications.',
    icon: MessageSquare,
    image: '/WebistePicturesFeatures/MCAGReport_1.png'
  },
  {
    title: 'Risk & Compliance',
    description: 'PAR monitoring, MCAG quarterly returns, loan loss provisioning, recovery management, and complete audit trails.',
    icon: ShieldCheck,
    image: '/WebistePicturesFeatures/RegisterCustomer.png'
  }
];

// Comprehensive feature modules based on the user manual
export const FEATURE_MODULES = {
  customerManagement: {
    title: 'Customer Management',
    description: 'Complete customer lifecycle management with KYC verification',
    icon: Users,
    features: [
      { name: 'Customer Registration', description: 'Register customers with personal details, contact info, and employment data', icon: UserCheck },
      { name: 'Ghana Card Verification', description: 'Primary identification using Ghana Card (GHA-XXXXXXXXX-X format)', icon: BadgeCheck },
      { name: 'KYC Verification', description: 'Know Your Customer verification workflow with status tracking (Verified, Pending, Rejected)', icon: CheckCircle2 },
      { name: 'Document Management', description: 'Upload and manage Ghana Card, passport photos, proof of address, employment letters', icon: FolderOpen },
      { name: 'Customer Profiles', description: 'Comprehensive profiles with personal, addresses, documents, accounts, loans, and guarantors tabs', icon: FileText },
      { name: 'Next of Kin Management', description: 'Record emergency contacts with relationship type and contact details', icon: Users },
      { name: 'Address Management', description: 'Multiple address types (Residential, Work, Business) with Ghana Post GPS support', icon: MapPin },
      { name: 'Customer Search', description: 'Search by customer number, name, phone, or Ghana Card number', icon: Target },
      { name: 'Status Management', description: 'Track customer status: Active, Inactive, or Blacklisted', icon: Activity },
    ]
  },
  depositAccounts: {
    title: 'Deposit Accounts',
    description: 'Full deposit account management with interest and collateral features',
    icon: PiggyBank,
    features: [
      { name: 'Deposit Products', description: 'Configure Savings, Current, Fixed Deposit, and Mandatory Savings products', icon: Briefcase },
      { name: 'Account Opening', description: 'Open accounts with automatic account number generation (SAV-XXXX-XXXXXXXX)', icon: CreditCard },
      { name: 'Interest Calculation', description: 'Automatic interest calculation and crediting based on product configuration', icon: Percent },
      { name: 'Cash Deposits', description: 'Process over-the-counter cash deposits with receipt generation', icon: Banknote },
      { name: 'Cash Withdrawals', description: 'Process withdrawals with identity verification and daily limits', icon: Wallet },
      { name: 'MoMo Integration', description: 'Mobile Money deposits and withdrawals with reference tracking', icon: Smartphone },
      { name: 'Account Transfers', description: 'Account-to-account transfers within the institution', icon: RefreshCw },
      { name: 'Collateral & Liens', description: 'Place and release holds on deposit funds for loan collateral', icon: Lock },
      { name: 'Transaction History', description: 'Complete transaction history with filtering by date, type, branch, and teller', icon: ScrollText },
      { name: 'Minimum Balance Enforcement', description: 'Enforce minimum balance requirements per product type', icon: Scale },
    ]
  },
  loanManagement: {
    title: 'Loan Management',
    description: 'End-to-end loan lifecycle from application to closure',
    icon: Landmark,
    features: [
      { name: 'Loan Products', description: 'Configure products with interest rates, fees, terms, min/max amounts, and repayment frequency', icon: Briefcase },
      { name: 'Interest Methods', description: 'Support for Flat, Declining Balance, Declining Balance (Excel PMT), and Hybrid methods', icon: Calculator },
      { name: 'Loan Application', description: 'Submit applications with customer, product, amount, term, sector, and purpose', icon: FileText },
      { name: 'Schedule Preview', description: 'Preview repayment schedule before submission with installment amounts and dates', icon: Calendar },
      { name: 'Approval Workflow', description: 'Multi-level approval with status flow: Applied → Pending → Approved/Rejected → Disbursed', icon: CheckCircle2 },
      { name: 'Credit Assessment', description: 'Review credit history, existing loans, income ratio, and collateral coverage', icon: ClipboardList },
      { name: 'Loan Disbursement', description: 'Disburse to deposit account with automatic fee deduction and schedule generation', icon: Send },
      { name: 'Loan Fees', description: 'Processing fees, insurance fees, late fees, and prepayment fees with collection tracking', icon: Receipt },
      { name: 'Repayment Processing', description: 'Accept payments via cash, deposit account, or MoMo with payment allocation', icon: HandCoins },
      { name: 'Payment Allocation', description: 'Automatic allocation: Penalties → Insurance → Processing Fees → Interest → Principal', icon: Target },
      { name: 'Loan Statements', description: 'Generate statements showing schedule vs. actual payments and outstanding breakdown', icon: FileSpreadsheet },
      { name: 'Loan Reschedule', description: 'Restructure loans with term extension, payment holiday, or rate reduction', icon: RefreshCw },
      { name: 'Auto-Debit', description: 'Automatic deduction from deposit accounts on due dates (runs daily at 6:00 AM)', icon: Clock },
      { name: 'Loan Agreements', description: 'Generate and manage loan agreement documents with templates', icon: ScrollText },
      { name: 'Loan Sectors', description: 'MCAG-compliant sector classification: Agriculture, Trade, Services, Manufacturing, etc.', icon: Building2 },
      { name: 'Guarantor Management', description: 'Record and track loan guarantors with contact and relationship details', icon: Users },
    ]
  },
  tellerOperations: {
    title: 'Teller Operations',
    description: 'Complete cash handling with session-based controls',
    icon: Banknote,
    features: [
      { name: 'Teller Sessions', description: 'Open/close sessions with opening balance, transaction tracking, and closing reconciliation', icon: Clock },
      { name: 'Session Balancing', description: 'Compare expected vs. actual balance with shortage/overage tracking', icon: Scale },
      { name: 'Cash Deposits', description: 'Process deposits with immediate balance update and receipt printing', icon: Banknote },
      { name: 'Cash Withdrawals', description: 'Process withdrawals with customer verification and limit enforcement', icon: Wallet },
      { name: 'Loan Repayments', description: 'Collect loan payments from cash or deposit account with automatic posting', icon: HandCoins },
      { name: 'Fee Collection', description: 'Collect loan fees and deposit account fees from cash or account', icon: Receipt },
      { name: 'Vault Transfers', description: 'Request cash from vault or send excess cash to vault', icon: Lock },
      { name: 'Receipt Printing', description: 'Automatic receipt generation for all transactions', icon: FileText },
      { name: 'Transaction Limits', description: 'Enforce daily limits and single transaction limits per teller', icon: AlertTriangle },
    ]
  },
  treasuryManagement: {
    title: 'Treasury Management',
    description: 'Centralized cash and channel management',
    icon: Building,
    features: [
      { name: 'Payment Channels', description: 'Configure Cash, Mobile Money, Bank, and Vault channels with GL mappings', icon: CreditCard },
      { name: 'Till Assignment', description: 'Assign tellers to payment channels with daily limits and primary till designation', icon: UserCog },
      { name: 'Session Monitoring', description: 'Real-time view of all active teller sessions across branches', icon: Activity },
      { name: 'Session History', description: 'Historical view of closed sessions with transaction details and variances', icon: ScrollText },
      { name: 'Vault Management', description: 'Track vault cash balances and approve vault transfer requests', icon: Lock },
      { name: 'Treasury Dashboard', description: 'View total cash in tills, vault balance, today\'s deposits/withdrawals, pending approvals', icon: BarChart3 },
      { name: 'Cash Movement Approval', description: 'Approve or reject cash transfer requests between tills and vault', icon: CheckCircle2 },
    ]
  },
  cashAgents: {
    title: 'Cash Agents & Field Operations',
    description: 'Manage field agents and mobile collections',
    icon: Smartphone,
    features: [
      { name: 'Agent Registration', description: 'Register agents with code, contact details, ID, branch assignment, and operational limits', icon: UserCheck },
      { name: 'Agent Status Management', description: 'Track agent status: Active, Inactive, Suspended, or Terminated', icon: Activity },
      { name: 'Float Management', description: 'Issue and track agent float for field operations', icon: Wallet },
      { name: 'Cash Collections', description: 'Record field collections against customer loan accounts', icon: HandCoins },
      { name: 'Bulk Collection Upload', description: 'Import collections from USSD system via CSV upload', icon: FileSpreadsheet },
      { name: 'Cash Lodgements', description: 'Record agent cash deposits at branch with approval workflow', icon: Banknote },
      { name: 'USSD Collections', description: 'View and reconcile USSD payment sessions with status tracking', icon: Phone },
      { name: 'Agent Reconciliation', description: 'Daily reconciliation of opening float, collections, lodgements, and closing float', icon: Scale },
      { name: 'Agent Limits', description: 'Set float limit, daily collection limit, and per-transaction limit', icon: AlertTriangle },
    ]
  },
  expenseManagement: {
    title: 'Expense Management',
    description: 'Track and control operational expenses',
    icon: Receipt,
    features: [
      { name: 'Expense Recording', description: 'Record expenses with category, vendor, amount, date, description, and invoice number', icon: FileText },
      { name: 'Document Attachment', description: 'Attach receipts and invoices to expense records', icon: FolderOpen },
      { name: 'Approval Workflow', description: 'Submit expenses for manager approval with status tracking', icon: CheckCircle2 },
      { name: 'Expense Categories', description: 'Categorize expenses: Rent, Utilities, Salaries, Transport, Supplies with GL mapping', icon: Briefcase },
      { name: 'Vendor Management', description: 'Maintain vendor database with contact and bank details', icon: Building2 },
      { name: 'Budget Tracking', description: 'Track budget vs. actual spending by category with variance analysis', icon: Target },
      { name: 'Accrued Payables', description: 'Track accrued expenses and pending payments', icon: Clock },
    ]
  },
  riskRecovery: {
    title: 'Risk & Recovery',
    description: 'Portfolio risk monitoring and loan recovery',
    icon: ShieldCheck,
    features: [
      { name: 'PAR Dashboard', description: 'Real-time Portfolio at Risk analysis with trend charts', icon: BarChart3 },
      { name: 'PAR Buckets', description: 'Track loans by aging: Current, 1-30, 31-60, 61-90, 91-180, 180+ days overdue', icon: Target },
      { name: 'Overdue Loan List', description: 'Filter overdue loans by days, branch, loan officer, or amount range', icon: AlertTriangle },
      { name: 'SMS Reminders', description: 'Send individual or bulk SMS payment reminders to delinquent customers', icon: Bell },
      { name: 'Recovery Cases', description: 'Create and assign recovery cases with priority levels and officer assignment', icon: ClipboardList },
      { name: 'Case Activities', description: 'Log phone calls, visit notes, documents, and schedule follow-ups', icon: Activity },
      { name: 'Promise to Pay', description: 'Record customer payment commitments with follow-up dates', icon: Calendar },
      { name: 'Collateral Enforcement', description: 'Document and track collateral seizure and sale proceedings', icon: Lock },
      { name: 'Write-Off Requests', description: 'Submit uncollectible loans for write-off with justification and approval', icon: FileText },
      { name: 'Write-Off Register', description: 'Track all written-off loans and any subsequent recovery', icon: ScrollText },
      { name: 'Loan Loss Provisions', description: 'Calculate and post provisions by PAR bucket per MCAG guidelines', icon: Calculator },
      { name: 'Provision Ratios', description: 'Apply provisioning: 0% Current, 5% PAR1-30, 20% PAR31-60, 50% PAR61-90, 75% PAR91-180, 100% PAR180+', icon: Percent },
    ]
  },
  financialReporting: {
    title: 'Financial Reporting',
    description: 'Complete general ledger and financial statements',
    icon: FileSpreadsheet,
    features: [
      { name: 'Chart of Accounts', description: 'Hierarchical GL account structure: Assets (1000s), Liabilities (2000s), Equity (3000s), Income (4000s), Expenses (5000s)', icon: FolderOpen },
      { name: 'GL Account Setup', description: 'Create accounts with code, name, type, parent account, and MCAG classification', icon: Settings },
      { name: 'Journal Entries', description: 'Create manual journal entries with validation (debits must equal credits)', icon: FileText },
      { name: 'Trial Balance', description: 'Generate trial balance by period with debit/credit verification', icon: Scale },
      { name: 'Income Statement', description: 'Generate P&L showing interest income, fee income, expenses, provisions, net profit/loss', icon: TrendingDown },
      { name: 'Balance Sheet', description: 'Generate balance sheet with assets (loans, cash, fixed), liabilities (deposits), and equity', icon: FileSpreadsheet },
      { name: 'Cash Flow Statement', description: 'Generate cash flow showing operating, investing, and financing activities', icon: Activity },
      { name: 'Export to Excel/PDF', description: 'Export all financial reports to Excel or PDF format', icon: FileText },
    ]
  },
  regulatoryCompliance: {
    title: 'Regulatory Compliance',
    description: 'MCAG reporting and audit compliance',
    icon: BadgeCheck,
    features: [
      { name: 'MCAG Quarterly Returns', description: 'Generate complete quarterly returns with all sections (A-G)', icon: FileSpreadsheet },
      { name: 'Section A - Institution Info', description: 'Institution details, license number, contact information', icon: Building2 },
      { name: 'Section B - Balance Sheet', description: 'Assets, liabilities, and equity position', icon: Scale },
      { name: 'Section C - Income Statement', description: 'Revenue, expenses, and profitability', icon: TrendingDown },
      { name: 'Section D - Loan Portfolio', description: 'Loan outstanding by product, sector, and classification', icon: Landmark },
      { name: 'Section E - Savings Portfolio', description: 'Deposit balances by product type', icon: PiggyBank },
      { name: 'Section F - PAR Analysis', description: 'Portfolio at Risk breakdown by aging bucket', icon: AlertTriangle },
      { name: 'Section G - Staff Details', description: 'Staff count by role and branch', icon: Users },
      { name: 'MCAG Inspection Report', description: 'Generate inspection-ready reports with all regulatory metrics', icon: ClipboardList },
      { name: 'Period Closing', description: 'Close accounting periods to prevent backdating and lock financial data', icon: Lock },
      { name: 'Audit Trail', description: 'Complete log of all system actions: logins, transactions, changes, approvals', icon: ScrollText },
      { name: 'Audit Trail Filtering', description: 'Filter audit records by date range, user, module, or action type', icon: Target },
    ]
  },
  administration: {
    title: 'Administration',
    description: 'System configuration and user management',
    icon: Settings,
    features: [
      { name: 'User Management', description: 'Add users with email, name, phone, branch, and role assignment', icon: UserCog },
      { name: 'User Roles', description: 'Role-based access: SuperAdmin, TenantAdmin, BranchManager, LoanOfficer, Teller, Cashier, Auditor, Agent, Accountant, RiskManager', icon: Users },
      { name: 'Password Management', description: 'Reset passwords with complexity requirements (8+ chars, upper, lower, number, special)', icon: Lock },
      { name: 'User Status Control', description: 'Manage user status: Active, Inactive, or Locked', icon: Activity },
      { name: 'Branch Setup', description: 'Configure branches with code, name, address, contact, and manager', icon: Building2 },
      { name: 'Branch Hierarchy', description: 'Define Head Office, Regional, and Sub-branch structure', icon: GitBranch },
      { name: 'System Settings', description: 'Configure interest calculation, fee settings, penalty settings, SMS templates', icon: Settings },
      { name: 'Report Headers', description: 'Customize institution details on all printed reports', icon: FileText },
      { name: 'Opening Balances', description: 'Post opening balances for GL, deposit, and loan accounts during implementation', icon: Calculator },
      { name: 'Job Monitor', description: 'Monitor background jobs: Auto-Debit (6AM), Penalty (7AM), Interest Accrual (11PM), Delinquency (11PM)', icon: Clock },
      { name: 'Multi-Tenant Support', description: 'Each institution operates in isolated tenant with unique tenant code', icon: Building },
    ]
  },
  dashboardReporting: {
    title: 'Dashboard & Reporting',
    description: 'Real-time insights and management reports',
    icon: BarChart3,
    features: [
      { name: 'Branch Dashboard', description: 'Today\'s summary: disbursements, collections, new customers, overdue loans', icon: Activity },
      { name: 'Head Office Dashboard', description: 'Institution-wide metrics, branch performance comparison, executive KPIs', icon: Building },
      { name: 'Regulator Dashboard', description: 'Multi-institution view for MCAG with compliance status tracking', icon: BadgeCheck },
      { name: 'Session Timer', description: 'Visual session countdown with auto-refresh and expiry warnings', icon: Clock },
      { name: 'Quick Actions', description: 'One-click access to common tasks from dashboard', icon: Target },
      { name: 'Loan Reports', description: 'Loan disbursement, repayment, outstanding, and schedule reports', icon: FileSpreadsheet },
      { name: 'Deposit Reports', description: 'Deposit balance, transaction, and interest reports', icon: ScrollText },
      { name: 'Collection Reports', description: 'Daily collection, agent collection, and arrears reports', icon: HandCoins },
    ]
  },
  smsNotifications: {
    title: 'SMS & Notifications',
    description: 'Automated SMS alerts for all critical transactions',
    icon: MessageSquare,
    features: [
      { name: 'Loan Disbursement SMS', description: 'Automatic SMS notification when loan is disbursed with amount, account, and first repayment date', icon: Send },
      { name: 'Loan Repayment SMS', description: 'SMS confirmation after each loan repayment with amount paid, balance remaining, and next due date', icon: CheckCircle2 },
      { name: 'Deposit SMS Alert', description: 'Instant SMS notification when customer makes a deposit with amount and new balance', icon: Banknote },
      { name: 'Withdrawal SMS Alert', description: 'Immediate SMS notification when customer makes a withdrawal with amount and remaining balance', icon: Wallet },
      { name: 'Fee/Charge SMS', description: 'SMS notification when fees or charges are applied to customer accounts', icon: Receipt },
      { name: 'Payment Due Reminder', description: 'Automated SMS reminders before loan payment due dates (configurable days before)', icon: Calendar },
      { name: 'Overdue Payment SMS', description: 'SMS alerts for overdue payments with days overdue and arrears amount', icon: AlertTriangle },
      { name: 'Bulk SMS Campaigns', description: 'Send bulk SMS to selected customers or customer groups for announcements', icon: Users },
      { name: 'SMS Templates', description: 'Customizable SMS templates for each notification type with dynamic placeholders', icon: FileText },
      { name: 'SMS Delivery Reports', description: 'Track SMS delivery status: Sent, Delivered, Failed with timestamps', icon: Activity },
      { name: 'SMS Log & History', description: 'Complete log of all sent SMS messages searchable by customer, date, or type', icon: ScrollText },
      { name: 'Interest Credit SMS', description: 'SMS notification when interest is credited to savings accounts', icon: Percent },
      { name: 'Account Opening SMS', description: 'Welcome SMS with account number when new deposit account is opened', icon: CreditCard },
      { name: 'KYC Approval SMS', description: 'SMS notification when customer KYC verification is approved', icon: BadgeCheck },
      { name: 'Loan Approval SMS', description: 'SMS notification when loan application is approved, pending disbursement', icon: CheckCircle2 },
      { name: 'Loan Rejection SMS', description: 'SMS notification when loan application is rejected with reason', icon: AlertTriangle },
    ]
  }
};

export const PRICING_TIERS: PricingTier[] = [
  {
    name: 'Starter',
    price: '₵500',
    period: 'per month',
    description: 'Perfect for small micro-credit institutions starting out.',
    features: [
      'Up to 500 Customers',
      'Single Branch',
      'Loan & Deposit Management',
      'Basic MCAG Reports',
      'Email Support'
    ]
  },
  {
    name: 'Professional',
    price: '₵1,500',
    period: 'per month',
    description: 'For growing MFIs with multiple branches.',
    features: [
      'Up to 5,000 Customers',
      'Up to 5 Branches',
      'Full Treasury Management',
      'Agent Operations',
      'Priority Support'
    ],
    recommended: true
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: 'contact us',
    description: 'Full-scale solution for large regulated institutions.',
    features: [
      'Unlimited Customers',
      'Unlimited Branches',
      'Full API Access',
      'Dedicated Account Manager',
      'Custom Development'
    ]
  }
];

export const ONBOARDING_STEPS: Step[] = [
  {
    number: '01',
    title: 'Submit Interest',
    description: 'Fill out the onboarding form with your MFI details and expected customer base.'
  },
  {
    number: '02',
    title: 'Data Assessment',
    description: 'Our team reviews your current portfolio, branch structure, and migration requirements.'
  },
  {
    number: '03',
    title: 'System Setup',
    description: 'We configure your GxLMS instance with branches, loan products, GL accounts, and user roles.'
  },
  {
    number: '04',
    title: 'Training & Go-Live',
    description: 'Your staff receives comprehensive training before we launch your core banking platform.'
  }
];
