# 📡 Telecom CRM Dashboard

A modern and responsive **Telecom Customer Relationship Management (CRM) Dashboard** built using **React.js**.

This application helps manage telecom leads and customers through a simple, attractive, and user-friendly dashboard. Users can add, edit, delete, search, and convert leads into customers while maintaining data using browser LocalStorage.

---

## 🚀 Features

### 📊 Dashboard
- View total number of leads
- View total number of customers
- View conversion count
- View recent leads
- Dynamic statistics

### 👥 Lead Management
- Add new leads
- Edit existing leads
- Delete leads
- Search leads
- Track lead status
- Convert leads into customers

### 👤 Customer Management
- Add customers
- Edit customer details
- Delete customers
- Search customers
- View customer plans
- View connection type

### 🔄 Lead Conversion

Leads can be converted into customers directly.

```text
Lead
  ↓
Convert
  ↓
Customer


When a lead is converted:
The lead is removed from the Leads section
A new customer is created
Customer count is updated automatically
Dashboard statistics are updated

💾 LocalStorage
The application uses browser LocalStorage to persist leads and customer data.
This means the data remains available even after refreshing the browser.


🔍 Search
Users can search for:
Leads by name
Customers by name
Search results update dynamically while typing.


🛠️ Technologies Used
React.js
JavaScript
HTML5
CSS3
React Router
Context API
LocalStorage
Vite
Git
GitHub
Vercel

🧠 React Concepts Used
useState
Used for managing:
Form data
Leads
Customers
Search values
Editing states
useEffect
Used for:
Saving data to LocalStorage
Loading stored data
useContext
Used to share CRM data between different components.

Context API
The CRM application uses Context API for global state management.
CRMProvider
│
├── Leads
├── Customers
├── Editing Lead
└── Editing Customer

React Router
Used for navigation between:
Dashboard
Leads
Customers


📂 Project Structure
telecom-crm/
│
├── public/
│
├── src/
│   │
│   ├── components/
│   │   ├── CustomerForm.jsx
│   │   ├── CustomerTable.jsx
│   │   ├── LeadCard.jsx
│   │   ├── LeadForm.jsx
│   │   └── Navbar.jsx
│   │
│   ├── context/
│   │   └── CRMContext.jsx
│   │
│   ├── pages/
│   │   ├── Dashboard.jsx
│   │   ├── Leads.jsx
│   │   └── Customers.jsx
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md


🔄 Application Flow
                  ┌──────────────┐
                  │   Dashboard  │
                  └──────┬───────┘
                         │
              ┌──────────┴──────────┐
              │                     │
        ┌─────▼─────┐        ┌──────▼──────┐
        │   Leads   │        │  Customers  │
        └─────┬─────┘        └─────────────┘
              │
       Add / Edit / Delete
              │
              ▼
           Convert
              │
              ▼
        ┌─────────────┐
        │  Customer   │
        └─────────────┘


🧩 Component Architecture
App
│
├── BrowserRouter
│
├── Navbar
│
├── Dashboard
│
├── Leads
│   ├── LeadForm
│   └── LeadCard
│
└── Customers
    ├── CustomerForm
    └── CustomerTable



📋 Data Structure
Lead
{
  id: 1,
  name: "Arjun",
  phone: "9876543210",
  area: "Coimbatore",
  plan: "Fiber 100Mbps",
  status: "Interested"
}


Customer
{
  id: 1,
  name: "Kumar",
  phone: "9000000000",
  area: "Erode",
  plan: "Fiber 200Mbps",
  type: "Broadband"
}


⚙️ Installation
1. Clone the repository
git clone <repository-url>
2. Navigate to the project
cd telecom-crm
3. Install dependencies
npm install
4. Start the development server
npm run dev
The application will start using the Vite development server.


🏗️ Production Build
To create a production build:
npm run build
To preview the production build:
npm run preview


🎨 UI & Design
The application uses a modern SaaS-style interface with:
Gradient-based design
Glassmorphism cards
Responsive layouts
Interactive buttons
Hover effects
Modern status badges
Clean dashboard cards
Responsive customer tables
Mobile-friendly layouts


📱 Responsive Design
The application is designed to work across:
Desktop
Laptop
Tablet
Mobile devices
The customer table also supports horizontal scrolling on smaller screens.


🔐 Project Scope
This is a frontend-only React application.
The project does not currently use an external backend or database. Lead and customer information is stored locally in the browser using LocalStorage.


🚧 Future Enhancements
Possible future improvements include:
User authentication
Employee/agent login
Backend API integration
MySQL or MongoDB database
Role-based access control
Advanced analytics
Charts and reports
Follow-up reminders
Email notifications
Call tracking
PDF report generation
Advanced filtering
Dark/Light mode
Mobile application


👨‍💻 Developer

Freddy Joshwa
B.Sc. Information Technology
Technologies & Skills
React.js
JavaScript
HTML
CSS
React Router
Context API
CRUD Operations
LocalStorage
Responsive Web Design
Git & GitHub