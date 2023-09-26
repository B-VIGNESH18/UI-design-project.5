import "./SalesInformationContainer.css";

const SalesInformationContainer = ({ customerNameInput, invoiceIdInput }) => {
  return (
    <div className="button-parent">
      <div className="button">
        <div className="enter-costumer-name">{customerNameInput}</div>
      </div>
      <div className="customer">{invoiceIdInput}</div>
    </div>
  );
};

export default SalesInformationContainer;
