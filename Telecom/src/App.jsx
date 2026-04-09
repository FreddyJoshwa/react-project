import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Leads from "./pages/Leads";
import Customers from "./pages/Customers";

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Navbar />

        <div className="page-content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/leads" element={<Leads />} />
            <Route path="/customers" element={<Customers />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;