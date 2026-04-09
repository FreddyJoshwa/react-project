import { createContext, useEffect, useState } from "react";

export const CRMContext = createContext();

function CRMProvider({ children }) {
  const [leads, setLeads] = useState(() => {
    const savedLeads = localStorage.getItem("crm_leads");
    return savedLeads
      ? JSON.parse(savedLeads)
      : [
          {
            id: 1,
            name: "Arjun",
            phone: "9876543210",
            area: "Coimbatore",
            plan: "Fiber 100Mbps",
            status: "Interested",
          },
          {
            id: 2,
            name: "Ravi",
            phone: "9123456780",
            area: "Tirupur",
            plan: "Postpaid SIM",
            status: "New",
          },
        ];
  });

  const [customers, setCustomers] = useState(() => {
    const savedCustomers = localStorage.getItem("crm_customers");
    return savedCustomers
      ? JSON.parse(savedCustomers)
      : [
          {
            id: 1,
            name: "Kumar",
            phone: "9000000000",
            area: "Erode",
            plan: "Fiber 200Mbps",
            type: "Broadband",
          },
        ];
  });

  const [editingLead, setEditingLead] = useState(null);
  const [editingCustomer, setEditingCustomer] = useState(null);

  useEffect(() => {
    localStorage.setItem("crm_leads", JSON.stringify(leads));
  }, [leads]);

  useEffect(() => {
    localStorage.setItem("crm_customers", JSON.stringify(customers));
  }, [customers]);

  return (
    <CRMContext.Provider
      value={{
        leads,
        setLeads,
        customers,
        setCustomers,
        editingLead,
        setEditingLead,
        editingCustomer,
        setEditingCustomer,
      }}
    >
      {children}
    </CRMContext.Provider>
  );
}

export default CRMProvider;