import { useContext } from "react";
import { CRMContext } from "../context/CRMContext";

function Dashboard() {
  const { leads, customers } = useContext(CRMContext);

  const recentLeads = leads.slice(-3).reverse();

  return (
    <div className="page-wrapper">
      <div className="page-header">
        <h1>Dashboard</h1>
        <p>Welcome to the Telecom CRM Dashboard</p>
      </div>

      <div className="stats-grid">
        <div className="stat-card gradient-one">
          <h3>Total Leads</h3>
          <h2>{leads.length}</h2>
          <p>Current inquiries in pipeline</p>
        </div>

        <div className="stat-card gradient-two">
          <h3>Total Customers</h3>
          <h2>{customers.length}</h2>
          <p>Active telecom customers</p>
        </div>

        <div className="stat-card gradient-three">
          <h3>Conversions</h3>
          <h2>{customers.length}</h2>
          <p>Leads successfully converted</p>
        </div>
      </div>

      <div className="info-box">
        <h2>Recent Leads</h2>
        {recentLeads.length > 0 ? (
          <div className="recent-list">
            {recentLeads.map((lead) => (
              <div className="recent-item" key={lead.id}>
                <div>
                  <h4>{lead.name}</h4>
                  <p>{lead.area} • {lead.plan}</p>
                </div>
                <span className={`status-badge ${lead.status.toLowerCase().replace(" ", "-")}`}>
                  {lead.status}
                </span>
              </div>
            ))}
          </div>
        ) : (
          <p>No recent leads available.</p>
        )}
      </div>
    </div>
  );
}

export default Dashboard;