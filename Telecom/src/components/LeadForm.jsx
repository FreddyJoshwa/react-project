import { useContext, useEffect, useState } from "react";
import { CRMContext } from "../context/CRMContext";

function LeadForm() {
  const { leads, setLeads, editingLead, setEditingLead } = useContext(CRMContext);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    area: "",
    plan: "",
    status: "New",
  });

  useEffect(() => {
    if (editingLead) {
      setFormData({
        name: editingLead.name,
        phone: editingLead.phone,
        area: editingLead.area,
        plan: editingLead.plan,
        status: editingLead.status,
      });
    }
  }, [editingLead]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const resetForm = () => {
    setFormData({
      name: "",
      phone: "",
      area: "",
      plan: "",
      status: "New",
    });
    setEditingLead(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.phone || !formData.area || !formData.plan) {
      alert("Please fill all fields");
      return;
    }

    if (editingLead) {
      const updatedLeads = leads.map((lead) =>
        lead.id === editingLead.id ? { ...lead, ...formData } : lead
      );
      setLeads(updatedLeads);
      resetForm();
      return;
    }

    const newLead = {
      id: Date.now(),
      ...formData,
    };

    setLeads([...leads, newLead]);
    resetForm();
  };

  return (
    <form className="lead-form" onSubmit={handleSubmit}>
      <h2>{editingLead ? "Edit Lead" : "Add New Lead"}</h2>

      <div className="form-grid">
        <input
          type="text"
          name="name"
          placeholder="Customer Name"
          value={formData.name}
          onChange={handleChange}
        />

        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
        />

        <input
          type="text"
          name="area"
          placeholder="Area"
          value={formData.area}
          onChange={handleChange}
        />

        <input
          type="text"
          name="plan"
          placeholder="Interested Plan"
          value={formData.plan}
          onChange={handleChange}
        />

        <select name="status" value={formData.status} onChange={handleChange}>
          <option value="New">New</option>
          <option value="Interested">Interested</option>
          <option value="Follow-up">Follow-up</option>
        </select>
      </div>

      <div className="form-actions">
        <button type="submit" className="add-btn">
          {editingLead ? "Update Lead" : "Add Lead"}
        </button>

        {editingLead && (
          <button type="button" className="cancel-btn" onClick={resetForm}>
            Cancel
          </button>
        )}
      </div>
    </form>
  );
}

export default LeadForm;