import { useContext } from "react";
import { CRMContext } from "../context/CRMContext";

function LeadCard({ lead }) {
  const {
    leads,
    setLeads,
    customers,
    setCustomers,
    setEditingLead,
  } = useContext(CRMContext);

  const deleteLead = (id) => {
    const filteredLeads = leads.filter((item) => item.id !== id);
    setLeads(filteredLeads);
  };

  const convertToCustomer = (lead) => {
    const newCustomer = {
      id: Date.now(),
      name: lead.name,
      phone: lead.phone,
      area: lead.area,
      plan: lead.plan,
      type: lead.plan.toLowerCase().includes("fiber") ? "Broadband" : "Mobile",
    };

    setCustomers([...customers, newCustomer]);
    setLeads(leads.filter((item) => item.id !== lead.id));
  };

  const editLead = () => {
    setEditingLead(lead);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="lead-card">
      <div className="lead-top">
        <h3>{lead.name}</h3>
        <span className={`status-badge ${lead.status.toLowerCase().replace(" ", "-")}`}>
          {lead.status}
        </span>
      </div>

      <p><strong>Phone:</strong> {lead.phone}</p>
      <p><strong>Area:</strong> {lead.area}</p>
      <p><strong>Plan:</strong> {lead.plan}</p>

      <div className="lead-actions">
        <button className="edit-btn" onClick={editLead}>
          Edit
        </button>

        <button className="convert-btn" onClick={() => convertToCustomer(lead)}>
          Convert
        </button>

        <button className="delete-btn" onClick={() => deleteLead(lead.id)}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default LeadCard;