import { useContext, useState } from "react";
import { CRMContext } from "../context/CRMContext";
import LeadForm from "../components/LeadForm";
import LeadCard from "../components/LeadCard";

function Leads() {
  const { leads } = useContext(CRMContext);
  const [search, setSearch] = useState("");

  const filteredLeads = leads.filter((lead) =>
    lead.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="page-wrapper">
      <div className="page-header">
        <h1>Leads</h1>
        <p>Manage customer inquiries and follow-ups</p>
      </div>

      <input
        type="text"
        placeholder="Search leads..."
        className="search-bar"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <LeadForm />

      <div className="leads-grid">
        {filteredLeads.map((lead) => (
          <LeadCard key={lead.id} lead={lead} />
        ))}
      </div>
    </div>
  );
}

export default Leads;