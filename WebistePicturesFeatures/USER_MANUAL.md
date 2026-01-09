# GxLMS Core Banking System
## Comprehensive User Manual

**Version:** 1.0  
**Last Updated:** January 2026  
**For:** MCAG Regulated Micro-Credit Institutions

---

# Table of Contents

1. [Introduction](#1-introduction)
2. [Getting Started](#2-getting-started)
3. [Dashboard & Navigation](#3-dashboard--navigation)
4. [Customer Management](#4-customer-management)
5. [Deposit Accounts](#5-deposit-accounts)
6. [Loan Management](#6-loan-management)
7. [Teller Operations](#7-teller-operations)
8. [Treasury Management](#8-treasury-management)
9. [Cash Agents & Field Operations](#9-cash-agents--field-operations)
10. [Expense Management](#10-expense-management)
11. [Risk & Recovery](#11-risk--recovery)
12. [Financial Reporting](#12-financial-reporting)
13. [Regulatory Compliance](#13-regulatory-compliance)
14. [Administration](#14-administration)
15. [Keyboard Shortcuts](#15-keyboard-shortcuts)
16. [Troubleshooting](#16-troubleshooting)

---

# 1. Introduction

## 1.1 About GxLMS

GxLMS (GmxLoans Management System) is a comprehensive **multi-tenant core banking solution** designed specifically for micro-credit institutions regulated by the **Micro-Credit Association of Ghana (MCAG)**. The system provides end-to-end management of:

- Customer registration and KYC verification
- Savings/deposit account management
- Loan origination, approval, and disbursement
- Repayment collection and tracking
- Treasury and cash management
- Field agent operations
- Regulatory reporting (MCAG Quarterly Returns)
- Risk management and loan recovery

## 1.2 System Requirements

### Desktop Application (WinForms)
- **Operating System:** Windows 10 or later
- **RAM:** Minimum 4GB (8GB recommended)
- **Display:** 1366x768 minimum resolution
- **Network:** Stable internet connection

### Supported Browsers (Web Access)
- Microsoft Edge (latest)
- Google Chrome (latest)
- Mozilla Firefox (latest)

## 1.3 User Roles

| Role | Description | Primary Functions |
|------|-------------|-------------------|
| **SuperAdmin** | Full system access | All functions, system configuration |
| **TenantAdmin** | Institution administrator | User management, settings, full operations |
| **BranchManager** | Branch-level management | Loan approvals, staff supervision, reports |
| **LoanOfficer** | Loan processing | Customer registration, loan applications |
| **Teller** | Cash operations | Deposits, withdrawals, repayments |
| **Cashier** | Basic cash handling | Deposits, withdrawals |
| **Auditor** | Read-only audit access | View all modules, audit trail |
| **Agent** | Field collections | Customer registration, loan applications, collections |
| **Accountant** | Financial management | GL accounts, journals, financial reports |
| **RiskManager** | Risk oversight | PAR analysis, write-offs, provisions |

---

# 2. Getting Started

## 2.1 Logging In

### Step-by-Step Login Process

1. **Launch the Application**
   - Double-click the GxLMS desktop icon
   - The login screen will appear

2. **Enter Credentials**
   - **Tenant Code:** Your institution's unique code (e.g., "DEMO", "MCFI001")
   - **Email:** Your registered email address
   - **Password:** Your secure password

3. **Click Login**
   - The system validates your credentials
   - Upon success, you're directed to the main dashboard

### Login Screen Fields

| Field | Description | Example |
|-------|-------------|---------|
| Tenant Code | Your institution identifier | DEMO |
| Email | Your login email | admin@demo-mfi.com |
| Password | Your password | ******** |

### First-Time Login

If this is your first login:
1. Use the temporary password provided by your administrator
2. You may be prompted to change your password
3. Set a strong password (minimum 8 characters, include numbers and symbols)

## 2.2 Password Requirements

- Minimum 8 characters
- At least one uppercase letter
- At least one lowercase letter
- At least one number
- At least one special character (!@#$%^&*)

## 2.3 Session Management

- **Session Duration:** Your session is active for 30 minutes
- **Auto-Refresh:** The system automatically refreshes your session while active
- **Session Timer:** Displayed in the top-right corner (⏱️)
- **Warning:** When less than 5 minutes remain, the timer turns red

### Session Expiry

If your session expires:
1. A popup notification appears
2. Click OK to return to the login screen
3. Log in again to continue

## 2.4 Logging Out

1. Click the **Logout** button in the top-right corner
2. Confirm when prompted: "Are you sure you want to logout?"
3. Click **Yes** to logout safely

> ⚠️ **Important:** Always logout when leaving your workstation to protect sensitive data.

---

# 3. Dashboard & Navigation

## 3.1 Dashboard Overview

Upon login, you'll see a dashboard tailored to your role:

### Branch Dashboard (Default)
- **Today's Summary:** Disbursements, collections, new customers
- **Outstanding Loans:** Total portfolio value
- **Collections Due Today:** Repayments expected
- **Overdue Loans:** Number and amount of delinquent loans
- **Quick Actions:** Common tasks for fast access

### Head Office Dashboard
- **Institution-wide Metrics:** All branches combined
- **Branch Performance:** Comparative analysis
- **Regulatory Indicators:** PAR ratios, compliance status
- **Executive KPIs:** Key performance indicators

### Regulator Dashboard (MCAG)
- **Multi-Institution View:** All regulated entities
- **Compliance Status:** Regulatory metric tracking
- **Quarterly Submissions:** Report submission status

## 3.2 Navigation Menu

The left sidebar contains the main navigation menu organized by module:

### Menu Structure

| Icon | Module | Description |
|------|--------|-------------|
| 🏠 | Dashboard | Main overview screen |
| 💵 | Teller | Cash operations (deposit/withdraw/repay) |
| 👥 | Customers | Customer registration and profiles |
| 💳 | Loans | Loan products, applications, disbursements |
| 🏧 | Deposits | Deposit products and accounts |
| 💰 | Cash Agents | Field agent management |
| 🔐 | Treasury | Teller sessions, vault management |
| 💸 | Expenses | Expense recording and approval |
| 📊 | Finance | GL accounts, journals, financial statements |
| ⚠️ | Risk | PAR analysis, recovery, write-offs |
| 📋 | Reporting | Regulatory and management reports |
| ⚙️ | Administration | Users, branches, settings |

### Expanding/Collapsing Menu

- Click on a menu item with sub-items to expand (▶ → ▼)
- Click again to collapse
- Press **Ctrl+M** to toggle the entire sidebar

## 3.3 Top Bar Information

The top bar displays:

| Element | Description |
|---------|-------------|
| 🏦 Institution | Your MFI name |
| 📍 Branch | Your assigned branch |
| 👤 User | Your full name |
| 🔐 Role | Your system role |
| ⏱️ Timer | Session time remaining |
| 🔄 Refresh | Refresh current view |
| Logout | End your session |

---

# 4. Customer Management

## 4.1 Overview

The Customer module manages all client information including:
- Personal details and identification
- Contact information
- Addresses
- Documents (Ghana Card, passport photos)
- Next of kin
- KYC verification status

## 4.2 Customer List

### Accessing Customer List
1. Click **Customers** in the navigation menu
2. Click **Customer List**

### Customer List Features

| Feature | Description |
|---------|-------------|
| Search | Search by name, phone, or customer number |
| Filter by Status | Active, Inactive, Blacklisted |
| Sort Columns | Click column headers to sort |
| Export | Export list to Excel/PDF |

### Searching for Customers

1. Type in the search box (minimum 3 characters)
2. Search matches against:
   - Customer number
   - Full name
   - Phone number
   - Ghana Card number
3. Results appear in real-time

## 4.3 Registering a New Customer

### Step-by-Step Registration

1. **Navigate to New Customer**
   - Click **Customers** → **New Customer**
   - Or click **➕ New Customer** from Customer List

2. **Enter Personal Information**
   - **First Name:** Required
   - **Middle Name:** Optional
   - **Last Name:** Required
   - **Date of Birth:** Required (must be 18+ years)
   - **Gender:** Male/Female

3. **Enter Contact Information**
   - **Phone Number:** Required (Ghana format: 0XX XXX XXXX)
   - **Alternative Phone:** Optional
   - **Email:** Optional

4. **Enter Identification**
   - **Ghana Card Number:** Required (GHA-XXXXXXXXX-X)
   
5. **Enter Address**
   - **Address Type:** Residential, Work, or Business
   - **House Number:** Optional
   - **Street Name:** Optional
   - **Landmark:** For easy location
   - **Digital Address:** Ghana Post GPS address
   - **City:** Required
   - **Region:** Select from dropdown

6. **Enter Employment/Income**
   - **Occupation:** Customer's job
   - **Employer Name:** If employed
   - **Monthly Income:** Estimated income (GH₵)

7. **Enter Next of Kin**
   - **Full Name:** Required
   - **Relationship:** Spouse, Parent, Sibling, etc.
   - **Phone:** Required
   - **Address:** Optional

8. **Save Customer**
   - Click **💾 Register Customer**
   - System generates a unique Customer Number

### Required Documents

| Document | Purpose |
|----------|---------|
| Ghana Card | Primary identification |
| Passport Photo | Visual identification |
| Proof of Address | Address verification |
| Employment Letter | Income verification (if employed) |

## 4.4 Customer Profile

### Viewing Customer Profile

1. Click on a customer in the list
2. Or search and select the customer

### Profile Sections

| Tab | Contents |
|-----|----------|
| **Overview** | Summary, KYC status, quick stats |
| **Personal** | Full personal details |
| **Addresses** | All registered addresses |
| **Documents** | Uploaded documents |
| **Accounts** | Linked deposit accounts |
| **Loans** | Loan history |
| **Next of Kin** | Emergency contacts |
| **Guarantors** | Loan guarantors |

### Editing Customer Information

1. Open the customer profile
2. Click **✏️ Edit**
3. Modify the required fields
4. Click **💾 Update Customer**

## 4.5 KYC Verification

### What is KYC?
Know Your Customer (KYC) verification confirms the customer's identity and documents.

### Verification Steps

1. **Open Customer Profile**
2. **Review Documents**
   - Ensure Ghana Card is uploaded
   - Verify photo matches customer
   - Check document expiry dates
3. **Verify Information**
   - Confirm name matches ID
   - Verify phone number is active
   - Check address is accurate
4. **Mark as Verified**
   - Click **✅ Verify KYC**
   - Confirm the action

### KYC Status Indicators

| Status | Icon | Meaning |
|--------|------|---------|
| Verified | ✅ | Customer passed KYC |
| Pending | ⚠️ | KYC not yet completed |
| Rejected | ❌ | KYC failed verification |

> ⚠️ **Note:** Loans cannot be disbursed to customers who are not KYC verified.

---

# 5. Deposit Accounts

## 5.1 Overview

The Deposit module manages:
- Savings accounts
- Current accounts
- Fixed deposits
- Account transactions
- Interest calculations
- Collateral liens

## 5.2 Deposit Products

### Viewing Products
1. Navigate to **Deposits** → **Deposit Products**
2. View list of available products

### Product Types

| Type | Description |
|------|-------------|
| Savings | Regular savings with interest |
| Current | Transactional account |
| Fixed | Fixed-term deposit |
| Mandatory Savings | Required for loan qualification |

### Creating a New Product (Admin Only)

1. Click **➕ New Product**
2. Enter product details:
   - **Product Code:** Unique identifier
   - **Product Name:** Display name
   - **Product Type:** Savings/Current/Fixed
   - **Interest Rate:** Annual rate (%)
   - **Minimum Balance:** Required minimum
   - **Opening Balance:** Initial deposit required
3. Configure GL mappings
4. Click **Save**

## 5.3 Opening a Deposit Account

### Step-by-Step Process

1. **Navigate to Deposit Accounts**
   - Click **Deposits** → **Deposit Accounts**
   - Click **➕ Open New Account**

2. **Select Customer**
   - Search for an existing customer
   - Or register new customer first

3. **Select Product**
   - Choose the deposit product type
   - Review product terms

4. **Enter Account Details**
   - **Initial Deposit:** Amount to open with
   - **Signatory Name:** Account holder name

5. **Confirm and Create**
   - Review all details
   - Click **Open Account**
   - Account number is generated automatically

### Account Number Format
- Format: `SAV-XXXX-XXXXXXXX`
- SAV = Savings, CUR = Current, FIX = Fixed

## 5.4 Account Transactions

### Viewing Transactions
1. Navigate to **Deposits** → **Transactions**
2. Filter by:
   - Date range
   - Transaction type
   - Branch
   - Teller (for managers)

### Transaction Types

| Type | Description |
|------|-------------|
| Cash Deposit | Cash received over counter |
| Cash Withdrawal | Cash paid out |
| MoMo Deposit | Mobile money received |
| MoMo Withdrawal | Mobile money sent |
| Transfer | Account-to-account transfer |
| Interest Credit | Interest applied |
| Fee Debit | Account fees charged |

## 5.5 Processing Deposits

### Cash Deposit

1. **Navigate to Teller** → **Deposit/Withdraw**
2. **Search Account**
   - Enter account number or customer name
   - Select the account
3. **Enter Deposit Details**
   - **Amount:** Deposit amount
   - **Narration:** Description of transaction
4. **Confirm Transaction**
   - Review details
   - Click **Process Deposit**
5. **Print Receipt**
   - Receipt generated automatically

### MoMo Deposit

1. Same process as cash deposit
2. Select **MoMo** as payment channel
3. Enter reference number from mobile money

## 5.6 Processing Withdrawals

### Cash Withdrawal

1. **Navigate to Teller** → **Deposit/Withdraw**
2. **Search Account**
3. **Select Withdrawal**
4. **Enter Details**
   - **Amount:** Must not exceed available balance
   - **Narration:** Description
5. **Verify Customer**
   - Confirm customer identity
   - Check signature/ID
6. **Process Withdrawal**
   - Click **Process Withdrawal**
   - Pay cash to customer
7. **Print Receipt**

### Withdrawal Limits

| Limit Type | Default | Description |
|------------|---------|-------------|
| Daily Limit | GH₵ 10,000 | Per-day withdrawal cap |
| Single Transaction | GH₵ 5,000 | Maximum per withdrawal |
| Minimum Balance | Varies | Cannot go below this |

## 5.7 Collateral & Liens

### What is a Lien?
A lien is a hold placed on funds in a deposit account, typically as collateral for a loan.

### Placing a Lien

1. **Navigate to Deposits** → **Collateral & Liens**
2. **Click Place Lien**
3. **Select Account**
4. **Enter Lien Details**
   - **Amount:** Amount to hold
   - **Purpose:** Loan collateral, court order, etc.
   - **Reference:** Loan number or case reference
   - **Expiry Date:** When lien expires (optional)
5. **Confirm**
   - Click **Place Lien**

### Releasing a Lien

1. **Navigate to Liens**
2. **Find the Lien**
3. **Click Release**
4. **Enter Reason**
5. **Confirm Release**

### Lien Effects
- Held amount cannot be withdrawn
- Available balance = Total Balance - Lien Amount
- Customer can still deposit

---

# 6. Loan Management

## 6.1 Overview

The Loan module provides complete loan lifecycle management:
- Loan product configuration
- Application processing
- Credit assessment
- Approval workflow
- Disbursement
- Repayment tracking
- Collection management

## 6.2 Loan Products

### Viewing Loan Products
1. Navigate to **Loans** → **Loan Products**
2. View available products

### Product Configuration

| Field | Description |
|-------|-------------|
| Product Code | Unique identifier (e.g., GL001) |
| Product Name | Display name (e.g., "Group Loan") |
| Interest Rate | Annual interest rate (%) |
| Processing Fee | % of loan amount |
| Default Term | Standard loan duration |
| Minimum Amount | Smallest loan allowed |
| Maximum Amount | Largest loan allowed |
| Repayment Frequency | Weekly, Bi-weekly, Monthly |
| Interest Method | Flat, Declining Balance, or Hybrid |

### Interest Calculation Methods

| Method | Description |
|--------|-------------|
| **Flat** | Interest calculated on original principal |
| **Declining Balance** | Interest on remaining principal |
| **Declining Balance (Excel)** | Excel PMT formula style |
| **Hybrid** | Declining first X periods, then flat |

### Loan Sectors (MCAG Requirement)

| Code | Sector |
|------|--------|
| AGR | Agriculture |
| TRA | Trade |
| SER | Services |
| MAN | Manufacturing |
| CON | Construction |
| TRN | Transport |
| EDU | Education |
| HEA | Healthcare |
| OTH | Other |

## 6.3 Loan Application

### Step-by-Step Application Process

1. **Navigate to Loans** → **Loan Applications**

2. **Select Customer**
   - Search for customer (type minimum 3 characters)
   - Click customer from results
   - Customer info displays with KYC status

3. **Select Deposit Account**
   - Choose customer's active deposit account
   - This is where disbursement will go
   - Account must have minimum required balance

4. **Select Loan Product**
   - Choose appropriate product
   - Terms and rates auto-populate

5. **Enter Loan Details**
   - **Principal Amount:** Loan amount requested
   - **Term:** Number of periods (weeks/months)
   - **Sector:** Business sector (required for MCAG)
   - **Purpose:** What the loan is for

6. **Review Schedule Preview**
   - System shows projected repayment schedule
   - Review installment amounts and dates

7. **Submit Application**
   - Click **Submit Application**
   - Application goes to pending approval queue

### Application Status Flow

```
Applied → Pending Approval → Approved → Disbursed → Active → Closed
                          ↓
                       Rejected
```

## 6.4 Loan Approval

### Approval Queue
1. Navigate to **Loans** → **Loan Approvals**
2. View pending applications

### Reviewing an Application

1. **Click on Application**
2. **Review Customer Details**
   - Credit history
   - Existing loans
   - KYC status
3. **Review Loan Terms**
   - Amount vs. income ratio
   - Collateral coverage
   - Guarantor information
4. **Make Decision**
   - **✅ Approve:** Proceed to disbursement
   - **❌ Reject:** Enter rejection reason

### Approval Criteria

| Criterion | Requirement |
|-----------|-------------|
| KYC Status | Must be verified |
| Existing Loans | Check for overlapping loans |
| Income Ratio | Monthly payment < 40% of income |
| Credit History | No active defaults |
| Collateral | Sufficient coverage for amount |

## 6.5 Loan Disbursement

### Prerequisites
- Loan must be in "Approved" status
- Customer must be KYC verified
- All required documents uploaded
- Loan agreement signed

### Disbursement Process

1. **Navigate to Loans** → **Disbursements**
2. **Select Approved Loan**
3. **Review Disbursement Details**
   - Principal amount
   - Fees to deduct
   - Net amount to customer
4. **Set First Repayment Date**
   - Usually 7 days (weekly) or 30 days (monthly) from disbursement
5. **Confirm Disbursement**
   - Click **Disburse Loan**
   - Funds transfer to deposit account
   - Schedule is generated

### Disbursement Accounting

| Entry | Debit | Credit |
|-------|-------|--------|
| Principal | Loan Receivable | Customer Deposit |
| Processing Fee | Customer Deposit | Fee Income |

## 6.6 Loan Fees

### Fee Types

| Fee | When Charged | Calculation |
|-----|--------------|-------------|
| Processing Fee | At disbursement | % of principal |
| Insurance Fee | At disbursement | % of principal |
| Late Fee | On overdue | Fixed or % of arrears |
| Prepayment Fee | On early payoff | % of outstanding |

### Collecting Fees

1. **Navigate to Loans** → **Fee Collection**
2. **Search Loan**
3. **View Outstanding Fees**
4. **Select Fees to Collect**
5. **Process Payment**
   - From deposit account or cash

## 6.7 Loan Repayment

### Making a Repayment

1. **Navigate to Loans** → **Repayments**
   - Or **Teller** → **Loan Repayments**

2. **Search for Loan**
   - Enter loan number
   - Or search by customer name/phone

3. **View Loan Details**
   - Outstanding balance
   - Next due date
   - Arrears (if any)

4. **Enter Payment Amount**
   - System suggests scheduled amount
   - Can pay more (advance) or less (partial)

5. **Select Payment Source**
   - **Cash:** Customer pays cash
   - **Deposit Account:** Deduct from savings
   - **MoMo:** Mobile money payment

6. **Process Repayment**
   - Click **Post Repayment**
   - Receipt generated

### Payment Allocation Order

Payments are applied in this order:
1. Penalties/Late fees
2. Insurance
3. Processing fees
4. Interest
5. Principal

### Overpayment Handling
- Excess funds applied to future installments
- Or refunded to deposit account (configurable)

## 6.8 Loan Statements

### Viewing Statements

1. Navigate to **Loans** → **Loan Statements**
2. Search for loan
3. View:
   - All transactions
   - Schedule vs. actual payments
   - Outstanding breakdown

### Statement Contents

| Section | Information |
|---------|-------------|
| Header | Loan number, customer, product |
| Summary | Principal, interest, fees, paid, outstanding |
| Schedule | Each installment with status |
| Transactions | All payments made |

### Exporting Statements
- Click **Export PDF** for printable statement
- Click **Export Excel** for spreadsheet

## 6.9 Loan Reschedule/Restructure

### When to Restructure
- Customer facing temporary hardship
- Need to extend term
- Need to reduce installment amount

### Restructure Process

1. Navigate to **Loans** → **Loan Reschedule**
2. Search and select loan
3. Choose restructure type:
   - **Term Extension:** More periods, lower payments
   - **Payment Holiday:** Defer payments temporarily
   - **Rate Reduction:** Lower interest rate
4. Enter new terms
5. Submit for approval
6. Generate new schedule upon approval

> ⚠️ **MCAG Note:** Restructured loans must be reported separately in quarterly returns.

## 6.10 Auto-Debit

### What is Auto-Debit?
Automatic deduction of loan payments from customer's deposit account on due dates.

### Setting Up Auto-Debit
- Enabled by default for loans linked to deposit accounts
- Runs daily at 6:00 AM
- Deducts amount due from available balance

### Checking Auto-Debit Status

1. Navigate to **Loans** → **Auto-Debit Status**
2. View:
   - Successful debits
   - Failed debits (insufficient funds)
   - Upcoming debits

## 6.11 Loan Agreements

### Agreement Templates

1. Navigate to **Loans** → **Agreement Templates**
2. View/edit agreement templates
3. Templates include:
   - Terms and conditions
   - Repayment obligations
   - Default consequences
   - Customer rights

### Generating Agreements

1. Open loan details
2. Click **Generate Agreement**
3. Select template
4. Preview agreement
5. Print for customer signature
6. Upload signed copy

---

# 7. Teller Operations

## 7.1 Overview

The Teller module centralizes all cash-handling operations:
- Opening/closing teller sessions
- Processing deposits and withdrawals
- Collecting loan repayments
- Collecting fees
- Vault transfers

## 7.2 Teller Sessions

### Opening a Session

1. **Navigate to Teller** → **Teller Session**
2. **Select Till**
   - Choose your assigned payment channel
   - Each teller may have multiple tills
3. **Enter Opening Balance**
   - Count your starting cash
   - Enter the amount
   - Add any notes (e.g., "Float received from vault")
4. **Open Session**
   - Click **Open Session**
   - Session number is generated

> ⚠️ **Important:** You must open a session before processing any cash transactions.

### During the Session

The session panel shows:
- Session number
- Channel name
- Date and time opened
- Opening balance
- Total deposits
- Total withdrawals
- Total vault received
- Total vault sent
- Expected balance

### Closing a Session

1. **Click Close Session**
2. **Count Your Cash**
   - Physical count of all denominations
3. **Enter Actual Balance**
4. **Compare with Expected**
   - System calculates difference (shortage/overage)
5. **Enter Closing Notes**
   - Explain any variance
6. **Close Session**

### Session Balancing

| Scenario | Action Required |
|----------|-----------------|
| Balanced | Session closes normally |
| Shortage | Investigate, record reason, may require manager approval |
| Overage | Investigate, record reason, excess posted to suspense |

## 7.3 Cash Transactions

### Processing Deposits

1. Ensure session is open
2. Navigate to **Teller** → **Deposit/Withdraw**
3. Search and select account
4. Select **Deposit**
5. Enter amount and narration
6. Process and print receipt

### Processing Withdrawals

1. Ensure session is open
2. Navigate to **Teller** → **Deposit/Withdraw**
3. Search and select account
4. Select **Withdrawal**
5. Enter amount
6. Verify customer identity
7. Process and pay customer
8. Print receipt

### Collecting Loan Repayments

1. Navigate to **Teller** → **Loan Repayments**
2. Search for loan
3. Enter payment amount
4. Select payment method (Cash/From Deposit)
5. Process payment
6. Print receipt

### Collecting Fees

#### Loan Fees
1. Navigate to **Teller** → **Loan Fee Collection**
2. Search for loan
3. Select fees to collect
4. Process payment

#### Deposit Fees
1. Navigate to **Teller** → **Deposit Fee Collection**
2. Search for account
3. View outstanding fees
4. Collect from cash or deduct from account

## 7.4 Vault Transfers

### What are Vault Transfers?
Movement of cash between teller till and branch vault.

### Requesting Cash from Vault

1. Navigate to **Treasury** → **Vault Transfers**
2. Click **Request from Vault**
3. Enter amount needed
4. Add reason
5. Submit request
6. Await approval (if required)

### Sending Cash to Vault

1. Navigate to **Treasury** → **Vault Transfers**
2. Click **Send to Vault**
3. Enter amount
4. Add reason
5. Process transfer

---

# 8. Treasury Management

## 8.1 Overview

Treasury manages:
- Payment channels (cash, MoMo, bank)
- Till assignments
- Session monitoring
- Vault management
- Cash movement approval

## 8.2 Payment Channels

### Viewing Channels
1. Navigate to **Treasury** → **Payment Channels**
2. View all configured channels

### Channel Types

| Type | Description | GL Mapping |
|------|-------------|------------|
| Cash | Physical cash till | Cash on Hand |
| Mobile Money | MoMo float | MoMo Float |
| Bank | Bank account | Bank Account |
| Vault | Branch vault | Vault Cash |

### Creating a Channel (Admin)

1. Click **New Channel**
2. Enter:
   - Channel Code
   - Channel Name
   - Channel Type
   - GL Account mapping
3. Save

## 8.3 Till Assignment

### Assigning Tellers to Tills

1. Navigate to **Treasury** → **Till Assignment**
2. Select payment channel
3. Click **Assign Teller**
4. Select user
5. Set:
   - Primary till (yes/no)
   - Daily limit
   - Active status
6. Save assignment

### Managing Assignments
- View all teller-till relationships
- Modify limits
- Deactivate assignments

## 8.4 Session History

### Viewing Session History

1. Navigate to **Treasury** → **Session History**
2. Filter by:
   - Date range
   - Teller
   - Channel
   - Status (Open/Closed)

### Session Details
- Opening and closing balances
- All transactions
- Variances
- Notes

## 8.5 Treasury Dashboard

### Metrics Displayed

| Metric | Description |
|--------|-------------|
| Active Sessions | Currently open teller sessions |
| Total Cash in Tills | Sum across all tills |
| Vault Balance | Current vault holdings |
| Today's Deposits | Total deposits received |
| Today's Withdrawals | Total withdrawals paid |
| Pending Approvals | Transfers awaiting approval |

---

# 9. Cash Agents & Field Operations

## 9.1 Overview

The Agent module manages field operations:
- Agent registration and profiles
- Float management
- Cash collections
- Cash lodgements
- USSD collections
- Reconciliation

## 9.2 Agent Management

### Registering an Agent

1. Navigate to **Cash Agents** → **Agent Management**
2. Click **➕ New Agent**
3. Enter agent details:
   - **Agent Code:** Unique identifier
   - **Full Name:** Agent's name
   - **Phone:** Contact number
   - **Email:** Optional
   - **ID Type & Number:** Identification
   - **Branch:** Assigned branch
4. Set operational limits:
   - **Float Limit:** Maximum float balance
   - **Daily Collection Limit:** Max collections per day
   - **Transaction Limit:** Max per transaction
5. Save

### Agent Status

| Status | Description |
|--------|-------------|
| Active | Can perform collections |
| Inactive | Temporarily disabled |
| Suspended | Pending investigation |
| Terminated | No longer active |

## 9.3 Agent Float

### What is Float?
Cash advanced to agents for field operations.

### Issuing Float

1. Navigate to **Cash Agents** → **Agent Float**
2. Select agent
3. Click **Issue Float**
4. Enter amount
5. Process (deducts from vault/till)

### Float Balance
- Opening float + Collections - Lodgements = Current float

## 9.4 Cash Collections

### Recording Field Collections

1. Navigate to **Cash Agents** → **Cash Collections**
2. Click **Record Collection**
3. Select agent
4. Enter collection details:
   - Customer (search)
   - Loan account
   - Amount collected
   - Collection date
5. Save

### Bulk Collection Upload
- Import collections from USSD system
- Upload CSV file with collection data

## 9.5 Cash Lodgements

### What are Lodgements?
Cash deposited by agents at the branch.

### Recording a Lodgement

1. Navigate to **Cash Agents** → **Cash Lodgements**
2. Click **New Lodgement**
3. Select agent
4. Enter:
   - Amount lodged
   - Lodgement date
   - Reference (deposit slip number)
5. Submit for approval

### Approving Lodgements

1. View pending lodgements
2. Select lodgement
3. Verify amount received
4. Approve or reject

## 9.6 USSD Collections

### What is USSD?
Unstructured Supplementary Service Data - allows customers to make payments via basic phones.

### Viewing USSD Sessions

1. Navigate to **Cash Agents** → **USSD Collections**
2. View sessions with status:
   - Initiated
   - Processing
   - Completed
   - Failed

### Processing USSD Payments
- Automatic posting upon MoMo confirmation
- Manual reconciliation for mismatches

## 9.7 Agent Reconciliation

### Daily Reconciliation

1. Navigate to **Cash Agents** → **Reconciliation**
2. Select agent and date
3. View:
   - Opening float
   - Collections made
   - Lodgements done
   - Closing float
   - Expected vs. actual
4. Investigate variances
5. Mark as reconciled

---

# 10. Expense Management

## 10.1 Overview

The Expense module tracks operational costs:
- Expense recording
- Approval workflow
- Budget tracking
- Vendor management
- Accrued payables

## 10.2 Recording Expenses

### Creating an Expense

1. Navigate to **Expenses** → **New Expense**
2. Enter expense details:
   - **Category:** Select expense category
   - **Vendor:** Select or create vendor
   - **Amount:** Expense amount
   - **Date:** Transaction date
   - **Description:** What was purchased
   - **Invoice Number:** Vendor invoice
3. Attach supporting documents (receipts, invoices)
4. Submit for approval

### Expense Categories

| Category | GL Account | Description |
|----------|------------|-------------|
| Rent | 6100 | Office rent |
| Utilities | 6200 | Electricity, water |
| Salaries | 6300 | Staff compensation |
| Transport | 6400 | Travel expenses |
| Supplies | 6500 | Office supplies |

## 10.3 Expense Approval

### Approval Workflow

1. **Submitted:** Expense recorded
2. **Pending Approval:** Awaiting manager
3. **Approved:** Ready for payment
4. **Rejected:** Returned with reason
5. **Paid:** Payment processed

### Approving Expenses (Managers)

1. Navigate to **Expenses** → **Pending Approval**
2. Review expense details
3. Click **Approve** or **Reject**
4. Add comments if needed

## 10.4 Vendors

### Adding a Vendor

1. Navigate to **Expenses** → **Vendors**
2. Click **Add Vendor**
3. Enter:
   - Vendor name
   - Contact person
   - Phone/email
   - Address
   - Bank details (for payments)
4. Save

## 10.5 Budget Tracking

### Viewing Budget Status

1. Navigate to **Expenses** → **Budget Status**
2. View by category:
   - Budget amount
   - Actual spent
   - Variance
   - % utilized

---

# 11. Risk & Recovery

## 11.1 Overview

Risk management includes:
- Portfolio at Risk (PAR) analysis
- Delinquency monitoring
- Recovery case management
- Collateral enforcement
- Write-off processing
- Loan loss provisioning

## 11.2 PAR Dashboard

### Understanding PAR

Portfolio at Risk (PAR) measures the portion of the loan portfolio with payments overdue.

### PAR Calculation

```
PAR = (Outstanding Balance of Loans > X Days Overdue) / (Total Outstanding Portfolio) × 100%
```

### PAR Buckets

| Bucket | Days Overdue | Provisioning |
|--------|--------------|--------------|
| Current | 0 | 0% |
| PAR 1-30 | 1-30 | 5% |
| PAR 31-60 | 31-60 | 20% |
| PAR 61-90 | 61-90 | 50% |
| PAR 91-180 | 91-180 | 75% |
| PAR > 180 | 181+ | 100% |

### Dashboard Metrics

- Total portfolio outstanding
- PAR by bucket (amount and %)
- Number of loans by bucket
- Trend charts

## 11.3 Overdue Loans

### Viewing Overdue Loans

1. Navigate to **Risk** → **Overdue Loans**
2. Filter by:
   - Days overdue
   - Branch
   - Loan officer
   - Amount range
3. View details:
   - Customer
   - Loan amount
   - Days overdue
   - Arrears amount

### Actions on Overdue Loans

| Action | Description |
|--------|-------------|
| 📱 Send SMS | Send payment reminder |
| 💰 Record Payment | Post a repayment |
| 📋 Create Recovery Case | Assign for follow-up |
| 🔒 Enforce Collateral | Initiate collateral seizure |
| 📝 Request Write-Off | Submit for write-off |

### Sending SMS Reminders

1. Select loan(s)
2. Click **Send SMS**
3. System sends templated reminder
4. SMS logged for audit

### Bulk SMS
- Select multiple loans
- Click **Bulk SMS**
- Customize message (optional)
- Send to all selected

## 11.4 Recovery Cases

### Creating a Recovery Case

1. Navigate to **Risk** → **Recovery Cases**
2. Click **New Case**
3. Select loan
4. Assign recovery officer
5. Set priority (Low/Medium/High/Critical)
6. Add notes
7. Save

### Case Status

| Status | Description |
|--------|-------------|
| Open | Active recovery effort |
| In Progress | Being worked on |
| Promise to Pay | Customer committed to date |
| Escalated | Sent to legal/external |
| Resolved | Payment received |
| Closed | No longer pursued |

### Case Activities

- Log phone calls
- Record visit notes
- Upload documents
- Schedule follow-ups

## 11.5 Collateral Enforcement

### When to Enforce Collateral
- Customer defaults beyond recovery attempts
- Collateral value exceeds outstanding debt
- Legal requirements met

### Enforcement Process

1. Navigate to **Risk** → **Collateral Enforcement**
2. Select loan
3. View collateral details
4. Document enforcement action
5. Record seizure/sale
6. Apply proceeds to loan

## 11.6 Write-Offs

### What is a Write-Off?
Removing uncollectible loans from the active portfolio.

### Write-Off Request

1. Navigate to **Risk** → **Write-Off Request**
2. Select loan
3. Enter justification:
   - Recovery efforts exhausted
   - Customer untraceable
   - Legal determination
4. Attach supporting documents
5. Submit for approval

### Write-Off Approval

1. Navigate to **Risk** → **Write-Off Approval**
2. Review requests
3. Verify documentation
4. Approve or reject

### Write-Off Register

1. Navigate to **Risk** → **Write-Off Register**
2. View all write-offs
3. Track recovery on written-off loans
4. Export for reporting

## 11.7 Loan Loss Provisions

### Provisioning

1. Navigate to **Risk** → **Provisions**
2. View provision requirements by bucket
3. Calculate required provision
4. Post provision journal
5. Track adequacy ratio

---

# 12. Financial Reporting

## 12.1 Overview

Financial reporting includes:
- General Ledger accounts
- Journal entries
- Trial Balance
- Income Statement
- Balance Sheet
- Cash Flow Statement

## 12.2 Chart of Accounts

### Viewing GL Accounts

1. Navigate to **Finance** → **Chart of Accounts**
2. View hierarchical account structure

### Account Categories

| Category | Range | Description |
|----------|-------|-------------|
| Assets | 1000-1999 | What the MFI owns |
| Liabilities | 2000-2999 | What the MFI owes |
| Equity | 3000-3999 | Owner's capital |
| Income | 4000-4999 | Revenue sources |
| Expenses | 5000-5999 | Operating costs |

### Creating a GL Account (Admin)

1. Click **New Account**
2. Enter:
   - Account Code
   - Account Name
   - Account Type
   - Parent Account (if sub-account)
   - MCAG Classification
3. Save

## 12.3 Journal Entries

### Creating a Journal Entry

1. Navigate to **Finance** → **Journals**
2. Click **New Journal**
3. Enter header:
   - **Journal Date:** Transaction date
   - **Reference:** Document reference
   - **Narration:** Description
4. Add lines:
   - Account
   - Debit OR Credit amount
   - Line narration
5. Verify debits = credits
6. Post journal

### Journal Validation
- Debits must equal credits
- All accounts must be active
- Date must be in open period

## 12.4 Trial Balance

### Generating Trial Balance

1. Navigate to **Finance** → **Trial Balance**
2. Select period
3. Click **Generate**
4. View:
   - All accounts with balances
   - Total debits and credits
   - Verification that trial balances

### Exporting
- Export to Excel
- Export to PDF

## 12.5 Financial Statements

### Income Statement

1. Navigate to **Finance** → **Income Statement**
2. Select period (Month/Quarter/Year)
3. Generate report showing:
   - Interest income
   - Fee income
   - Other income
   - Operating expenses
   - Provisions
   - Net profit/loss

### Balance Sheet

1. Navigate to **Finance** → **Balance Sheet**
2. Select date
3. View:
   - Assets (loans, cash, fixed assets)
   - Liabilities (deposits, payables)
   - Equity

### Cash Flow Statement

1. Navigate to **Finance** → **Cash Flow**
2. Select period
3. View:
   - Operating activities
   - Investing activities
   - Financing activities
   - Net change in cash

---

# 13. Regulatory Compliance

## 13.1 Overview

MCAG-regulated institutions must submit:
- Quarterly returns
- Inspection reports
- Compliance metrics

## 13.2 MCAG Quarterly Reports

### Generating Quarterly Return

1. Navigate to **Reporting** → **MCAG Quarterly**
2. Select quarter (Q1/Q2/Q3/Q4)
3. Select year
4. Click **Generate**
5. Review all sections:
   - Balance sheet items
   - Income statement items
   - Portfolio analysis
   - PAR breakdown
   - Staff information
   - Branch information
6. Export to required format
7. Submit to MCAG portal

### Quarterly Report Sections

| Section | Contents |
|---------|----------|
| Section A | Institution information |
| Section B | Balance sheet |
| Section C | Income statement |
| Section D | Loan portfolio |
| Section E | Savings portfolio |
| Section F | PAR analysis |
| Section G | Staff details |

## 13.3 MCAG Inspection Report

### Generating Inspection Report

1. Navigate to **Reporting** → **MCAG Inspection**
2. Select reporting period
3. Generate report with:
   - All regulatory metrics
   - Compliance status
   - Risk indicators
4. Export for inspection team

## 13.4 Period Closing

### Why Close Periods?
- Prevents backdating transactions
- Locks financial data for reporting
- Ensures data integrity

### Closing a Period

1. Navigate to **Reporting** → **Period Closing**
2. Review checklist:
   - All transactions posted
   - Interest accrued
   - Provisions calculated
   - Reports generated
3. Click **Close Period**
4. Confirm action

### Reopening Periods (Admin Only)
- Only with proper authorization
- Creates audit trail entry
- Use sparingly

## 13.5 Audit Trail

### Viewing Audit Trail

1. Navigate to **Reporting** → **Audit Trail**
2. Filter by:
   - Date range
   - User
   - Module
   - Action type
3. View:
   - Who did what
   - When
   - Before/after values

### Audit Actions Tracked
- User logins/logouts
- Customer changes
- Loan approvals
- Financial transactions
- Configuration changes

---

# 14. Administration

## 14.1 User Management

### Adding a New User

1. Navigate to **Administration** → **User Management**
2. Click **Add User**
3. Enter:
   - **Email:** Login email
   - **First Name:** User's first name
   - **Last Name:** User's last name
   - **Phone:** Contact number
   - **Branch:** Assigned branch
   - **Role:** System role
4. Set initial password
5. Save

### User Status

| Status | Description |
|--------|-------------|
| Active | Can login |
| Inactive | Cannot login |
| Locked | Too many failed attempts |

### Resetting Passwords

1. Find user in list
2. Click **Reset Password**
3. Enter new password
4. User must change on next login

## 14.2 Role Management

### Viewing Roles

1. Navigate to **Administration** → **Role Management**
2. View all system roles
3. See permissions per role

### Role Permissions
- Each role has specific permissions
- Permissions control menu visibility
- Permissions control feature access

## 14.3 Branch Setup

### Adding a Branch

1. Navigate to **Administration** → **Branch Setup**
2. Click **Add Branch**
3. Enter:
   - Branch Code
   - Branch Name
   - Address
   - Contact information
   - Manager (optional)
4. Save

### Branch Hierarchy
- Head Office (main branch)
- Regional branches
- Sub-branches

## 14.4 System Settings

### Accessing Settings

1. Navigate to **Administration** → **System Settings**
2. Configure various settings:

| Setting | Description |
|---------|-------------|
| Interest Calculation | How interest is calculated |
| Fee Settings | Default fee amounts |
| Penalty Settings | Late payment penalties |
| SMS Templates | Message templates |
| Report Headers | Institution details on reports |

## 14.5 Opening Balances

### When to Use
- System implementation
- New fiscal year
- Data migration

### Posting Opening Balances

1. Navigate to **Administration** → **Opening Balances**
2. Select account type:
   - GL Accounts
   - Deposit Accounts
   - Loan Accounts
3. Enter balances
4. Post entries

## 14.6 Job Monitor

### Background Jobs

| Job | Schedule | Purpose |
|-----|----------|---------|
| Auto-Debit | 6:00 AM | Deduct loan payments |
| Penalty Application | 7:00 AM | Apply late fees |
| Interest Accrual | 11:00 PM | Accrue interest |
| Delinquency Update | 11:00 PM | Update PAR buckets |

### Monitoring Jobs

1. Navigate to **Administration** → **Job Monitor**
2. View:
   - Last run time
   - Status (Success/Failed)
   - Records processed
3. Manually trigger jobs if needed

---

# 15. Keyboard Shortcuts

| Shortcut | Action |
|----------|--------|
| **F5** | Refresh dashboard |
| **Ctrl+M** | Toggle sidebar menu |
| **Esc** | Close dialogs / Collapse menu |
| **Ctrl+S** | Save (in forms) |
| **Ctrl+P** | Print (where available) |

---

# 16. Troubleshooting

## 16.1 Common Issues

### Cannot Login

| Problem | Solution |
|---------|----------|
| Wrong password | Check caps lock, try again |
| Account locked | Contact administrator |
| Session expired | Login again |
| Connection error | Check internet connection |

### Transaction Fails

| Problem | Solution |
|---------|----------|
| Insufficient balance | Check account balance |
| Session not open | Open teller session first |
| Period closed | Cannot post to closed period |
| Permission denied | Contact administrator for access |

### Reports Not Loading

| Problem | Solution |
|---------|----------|
| Timeout | Try smaller date range |
| No data | Check filter criteria |
| Error message | Note error, contact support |

## 16.2 Getting Help

### Support Contacts

- **Technical Support:** support@gxlms.com
- **Training:** training@gxlms.com
- **Emergency:** +233 XX XXX XXXX

### Before Contacting Support

1. Note the exact error message
2. Screenshot the issue
3. Note what you were trying to do
4. Note your user role and branch

---

# Appendix A: Glossary

| Term | Definition |
|------|------------|
| **AML** | Anti-Money Laundering |
| **KYC** | Know Your Customer |
| **PAR** | Portfolio at Risk |
| **GL** | General Ledger |
| **MoMo** | Mobile Money |
| **MCAG** | Micro-Credit Association of Ghana |
| **Disbursement** | Loan funds released to customer |
| **Lodgement** | Cash deposited at branch by agent |
| **Float** | Cash advanced to agent for operations |
| **Lien** | Legal hold on deposit funds |
| **Write-off** | Removing uncollectible loan from books |
| **Provision** | Reserve for potential loan losses |

---

# Appendix B: Sample Workflows

## B.1 New Customer Loan Workflow

```
1. Register Customer
   ↓
2. Upload Documents
   ↓
3. Verify KYC
   ↓
4. Open Deposit Account
   ↓
5. Initial Deposit (if required)
   ↓
6. Apply for Loan
   ↓
7. Manager Approves
   ↓
8. Sign Agreement
   ↓
9. Disburse Loan
   ↓
10. Collect Repayments
```

## B.2 Daily Teller Workflow

```
1. Login
   ↓
2. Open Teller Session
   ↓
3. Process Transactions
   - Deposits
   - Withdrawals
   - Repayments
   ↓
4. Vault Transfers (if needed)
   ↓
5. Close Session
   ↓
6. Balance and Reconcile
   ↓
7. Logout
```

## B.3 Month-End Workflow

```
1. Complete All Transactions
   ↓
2. Run Interest Accrual
   ↓
3. Run Provision Calculation
   ↓
4. Generate Trial Balance
   ↓
5. Review and Adjust
   ↓
6. Generate Financial Statements
   ↓
7. Close Period
```

---

**© 2026 GxLMS Core Banking System. All Rights Reserved.**

*This manual is confidential and intended for authorized users only.*
