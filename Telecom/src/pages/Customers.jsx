import CustomerForm from "../components/CustomerForm";
import CustomerTable from "../components/CustomerTable";

function Customers() {
  return (
    <div className="page-wrapper">
      <div className="page-header">
        <h1>Customers</h1>
        <p>Manage active telecom customers and plans</p>
      </div>

      <CustomerForm />
      <CustomerTable />
    </div>
  );
}

export default Customers;