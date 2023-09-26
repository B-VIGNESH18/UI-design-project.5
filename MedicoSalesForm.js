import "./MedicoSalesForm.css";

const MedicoSalesForm = () => {
  return (
    <div className="frame1">
      <div className="frame-child" />
      <div className="sidebar">
        <div className="frame-parent">
          <div className="dashboard-parent">
            <div className="dashboard">Dashboard</div>
            <img className="element-3-icon" alt="" src="/element3.svg" />
          </div>
          <div className="lab-test-parent">
            <div className="lab-test">Lab Test</div>
            <img className="element-3-icon" alt="" src="/clipboardtick.svg" />
          </div>
          <div className="appointment-parent">
            <div className="appointment">Appointment</div>
            <img className="element-3-icon" alt="" src="/calendartick.svg" />
          </div>
          <div className="medicine-order-parent">
            <div className="appointment">Medicine Order</div>
            <img className="element-3-icon" alt="" src="/bagtick2.svg" />
          </div>
          <div className="message-parent">
            <div className="dashboard">Message</div>
            <img className="element-3-icon" alt="" src="/sms.svg" />
          </div>
          <div className="payment-parent">
            <div className="appointment">Payment</div>
            <img className="element-3-icon" alt="" src="/emptywallet.svg" />
          </div>
          <div className="settings-parent">
            <div className="appointment">Settings</div>
            <img className="element-3-icon" alt="" src="/setting2.svg" />
          </div>
        </div>
        <div className="help-parent">
          <div className="appointment">Help</div>
          <img className="element-3-icon" alt="" src="/question.svg" />
        </div>
      </div>
      <div className="medico-sales">Medico Sales</div>
    </div>
  );
};

export default MedicoSalesForm;
