import React from "react";
import "./Dashboard.css";

const CustomerCard = ({ name, registrationDate }) => {
  return (
    <div className="customer-card">
      <div className="customer-content">
        <div className="customer-info">
          <div className="customer-name">{name}</div>
          <div className="registration-info">
            <div className="registration-label">Date of registration:</div>
            <div className="registration-date">{registrationDate}</div>
          </div>
        </div>
        <div className="customer-status">
          <div>OTP-in</div>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/97e9e833800a407294b1ff6f4c0fa42b/a722e17b7b90676f31b984592f16236fa46bcb76?placeholderIfAbsent=true"
            className="status-icon"
          />
        </div>
      </div>
    </div>
  );
};

export default CustomerCard;
