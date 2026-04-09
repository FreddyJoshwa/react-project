import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo-section">
        <div className="logo-circle">T</div>
        <div>
          <h2>Telecom CRM</h2>
          <p>Customer Management Dashboard</p>
        </div>
      </div>

      <div className="nav-links">
        <NavLink to="/" className={({ isActive }) => isActive ? "nav-link active-link" : "nav-link"}>
          Dashboard
        </NavLink>

        <NavLink to="/leads" className={({ isActive }) => isActive ? "nav-link active-link" : "nav-link"}>
          Leads
        </NavLink>

        <NavLink to="/customers" className={({ isActive }) => isActive ? "nav-link active-link" : "nav-link"}>
          Customers
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;