import { useContext, useState } from "react";
import { CRMContext } from "../context/CRMContext";

function CustomerTable() {
  const { customers, setCustomers, setEditingCustomer } = useContext(CRMContext);
  const [search, setSearch] = useState("");

  const deleteCustomer = (id) => {
    const filteredCustomers = customers.filter((customer) => customer.id !== id);
    setCustomers(filteredCustomers);
  };

  const editCustomer = (customer) => {
    setEditingCustomer(customer);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const filteredCustomers = customers.filter((customer) =>
    customer.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="customer-table-wrapper">
      <h2>Customer Records</h2>

      <input
        type="text"
        placeholder="Search customers..."
        className="search-bar"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {filteredCustomers.length > 0 ? (
        <div className="table-container">
          <table className="customer-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Phone</th>
                <th>Area</th>
                <th>Plan</th>
                <th>Connection Type</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {filteredCustomers.map((customer) => (
                <tr key={customer.id}>
                  <td>{customer.name}</td>
                  <td>{customer.phone}</td>
                  <td>{customer.area}</td>
                  <td>{customer.plan}</td>
                  <td>{customer.type}</td>
                  <td>
                    <div className="table-actions">
                      <button
                        className="edit-btn"
                        onClick={() => editCustomer(customer)}
                      >
                        Edit
                      </button>

                      <button
                        className="delete-btn"
                        onClick={() => deleteCustomer(customer.id)}
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="info-box">
          <h2>No Matching Customers</h2>
          <p>Search result la customer kedaikala, illa innum customer add pannala.</p>
        </div>
      )}
    </div>
  );
}

export default CustomerTable;