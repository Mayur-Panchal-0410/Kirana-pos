import React, { useState } from "react";
import "./SideNavbar.css";

const Sidebar = ({ sidebarOpen, toggleSidebar, setActiveComponent }) => {
  return (
    <div className={`sidebar ${sidebarOpen ? "open" : "close"}`}>
      <div className="toggle_button">
        <button onClick={toggleSidebar}>
          {sidebarOpen ? <i className="fas fa-times"></i> : <i className="fas fa-bars"></i>}
        </button>
      </div>

      <div className="sidebar_items ">
        {/* Dashboard Link */}
        <div className="sidebar_item" onClick={() => setActiveComponent("Dashboard")}>
          <i className="fas fa-home"></i>
          {sidebarOpen && <p>Dashboard</p>}
        </div>

        {/* Inventory Link */}
        <div className="sidebar_item" onClick={() => setActiveComponent("Inventory")}>
          <i className="fas fa-box"></i>
          {sidebarOpen && <p>Inventory</p>}
        </div>

        {/* Add Inventory Link */}
        <div className="sidebar_item" onClick={() => setActiveComponent("AddInventory")}>
          <i className="fas fa-plus"></i>
          {sidebarOpen && <p>Add Inventory</p>}
        </div>

        {/* Billing Link */}
        <div className="sidebar_item" onClick={() => setActiveComponent("Billing")}>
          <i className="fas fa-file-invoice"></i>
          {sidebarOpen && <p>Billing</p>}
        </div>

        {/* Category Link */}
        <div className="sidebar_item" onClick={() => setActiveComponent("Category")}>
          <i className="fas fa-list"></i>
          {sidebarOpen && <p>Category</p>}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
