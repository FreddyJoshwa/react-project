import { useContext, useEffect, useState } from "react";
import { CRMContext } from "../context/CRMContext";

function CustomerForm() {
  const {
    customers,
    setCustomers,
    editingCustomer,
    setEditingCustomer,
  } = useContext(CRMContext);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    area: "",
    plan: "",
    type: "Mobile",
  });

  useEffect(() => {
    if (editingCustomer) {
      setFormData({
        name: editingCustomer.name,
        phone: editingCustomer.phone,
        area: editingCustomer.area,
        plan: editingCustomer.plan,
        type: editingCustomer.type,
      });
    }
  }, [editingCustomer]);

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
      type: "Mobile",
    });
    setEditingCustomer(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.phone || !formData.area || !formData.plan) {
      alert("Please fill all fields");
      return;
    }

    if (editingCustomer) {
      const updatedCustomers = customers.map((customer) =>
        customer.id === editingCustomer.id
          ? { ...customer, ...formData }
          : customer
      );

      setCustomers(updatedCustomers);
      resetForm();
      return;
    }

    const newCustomer = {
      id: Date.now(),
      ...formData,
    };

    setCustomers([...customers, newCustomer]);
    resetForm();
  };

  return (
    <form className="lead-form" onSubmit={handleSubmit}>
      <h2>{editingCustomer ? "Edit Customer" : "Add Customer"}</h2>

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
          placeholder="Active Plan"
          value={formData.plan}
          onChange={handleChange}
        />

        <select name="type" value={formData.type} onChange={handleChange}>
          <option value="Mobile">Mobile</option>
          <option value="Broadband">Broadband</option>
        </select>
      </div>

      <div className="form-actions">
        <button type="submit" className="add-btn">
          {editingCustomer ? "Update Customer" : "Add Customer"}
        </button>

        {editingCustomer && (
          <button type="button" className="cancel-btn" onClick={resetForm}>
            Cancel
          </button>
        )}
      </div>
    </form>
  );
}

export default CustomerForm;