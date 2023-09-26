import SalesInformationContainer from "./SalesInformationContainer";
import "./SalesContainer.css";

const SalesContainer = () => {
  return (
    <div className="sales-info-search">
      <div className="sales-information">Sales Information</div>
      <div className="frame-group">
        <SalesInformationContainer
          customerNameInput="Enter Costumer Name"
          invoiceIdInput="Customer"
        />
        <SalesInformationContainer
          customerNameInput="Enter Invoice ID"
          invoiceIdInput="Invoice ID"
        />
        <SalesInformationContainer
          customerNameInput="Start Date"
          invoiceIdInput="Start Date"
        />
        <SalesInformationContainer
          customerNameInput="End Date"
          invoiceIdInput="End Date"
        />
      </div>
    </div>
  );
};

export default SalesContainer;
