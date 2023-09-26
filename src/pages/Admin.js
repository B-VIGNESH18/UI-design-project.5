import MedicoSalesForm from "../components/MedicoSalesForm";
import SearchContainer from "../components/SearchContainer";
import SalesContainer from "../components/SalesContainer";
import InvoiceContainer from "../components/InvoiceContainer";
import "./Admin.css";

const Admin = () => {
  return (
    <div className="admin">
      <MedicoSalesForm />
      <div className="frame">
        <SearchContainer />
        <SalesContainer />
        <InvoiceContainer />
      </div>
    </div>
  );
};

export default Admin;
