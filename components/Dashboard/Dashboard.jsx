"use client";
import React from "react";
import CustomerCard from "./CustomerCard";
import "./Dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard">
      <nav className="nav-bar">
        <div className="nav-content">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/97e9e833800a407294b1ff6f4c0fa42b/05dc86d7ff2ec8b0ff4ea387e40ead6564e70c7a?placeholderIfAbsent=true"
            className="nav-icon"
          />
          <div className="nav-label">Customer management</div>
          <div className="nav-accessory" />
        </div>
      </nav>

      <div className="search-section">
        <div className="search-container">
          <div className="search-box">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/97e9e833800a407294b1ff6f4c0fa42b/1d1723bc9d76d23201c9847e2821fdbed93bbd9d?placeholderIfAbsent=true"
              className="search-icon"
            />
            <div className="search-text">Search</div>
          </div>
        </div>
        <div className="divider" />
        <div className="action-button">
          <div className="action-button">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/97e9e833800a407294b1ff6f4c0fa42b/20836fefacc98085de5d0c2dfa03a1a4e1e3bf85?placeholderIfAbsent=true"
              className="action-icon"
            />
          </div>
        </div>
        <div className="divider" />
        <div className="action-button">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/97e9e833800a407294b1ff6f4c0fa42b/525e19742222880676b423703a6a9d7a872461c4?placeholderIfAbsent=true"
            className="action-icon"
          />
        </div>
      </div>

      <main className="main-container">
        <div className="optin-container">
          <div className="optin-label">Show only OTP-IN customer</div>
          <div className="switch">
            <div className="switch-toggle" />
          </div>
        </div>

        <div className="customer-cards">
          <CustomerCard name="John" registrationDate="12/12/2024" />
          <CustomerCard name="John" registrationDate="12/12/2024" />
          <CustomerCard name="John" registrationDate="12/12/2024" />
          <CustomerCard name="John" registrationDate="12/12/2024" />
          <CustomerCard name="John" registrationDate="12/12/2024" />
          <CustomerCard name="John" registrationDate="12/12/2024" />
        </div>
      </main>

      <div className="button-container">
        <button className="button-download">Download Excel</button>
        <button className="button-add">Add Customer</button>
      </div>
    </div>
  );
}

export default Dashboard;
