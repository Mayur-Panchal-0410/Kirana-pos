// // import React, { useState } from "react";
// // import "./SideNavbar.css";

// // const Sidebar = ({ sidebarOpen, toggleSidebar, setActiveComponent }) => {
// //   return (
// //     <div className={`sidebar ${sidebarOpen ? "open" : "close"}`}>
// //       <div className="toggle_button">
// //         <button onClick={toggleSidebar}>
// //           {sidebarOpen ? <i className="fas fa-times"></i> : <i className="fas fa-bars"></i>}
// //         </button>
// //       </div>

// //       <div className="sidebar_items ">
// //         {/* Dashboard Link */}
// //         <div className="sidebar_item" onClick={() => setActiveComponent("Dashboard")}>
// //           <i className="fas fa-home"></i>
// //           {sidebarOpen && <p>Dashboard</p>}
// //         </div>

// //         {/* Inventory Link */}
// //         <div className="sidebar_item" onClick={() => setActiveComponent("Inventory")}>
// //           <i className="fas fa-box"></i>
// //           {sidebarOpen && <p>Inventory</p>}
// //         </div>

// //         {/* Add Inventory Link */}
// //         <div className="sidebar_item" onClick={() => setActiveComponent("AddInventory")}>
// //           <i className="fas fa-plus"></i>
// //           {sidebarOpen && <p>Add Inventory</p>}
// //         </div>

// //         {/* Billing Link */}
// //         <div className="sidebar_item" onClick={() => setActiveComponent("Billing")}>
// //           <i className="fas fa-file-invoice"></i>
// //           {sidebarOpen && <p>Billing</p>}
// //         </div>

// //         {/* Category Link */}
// //         <div className="sidebar_item" onClick={() => setActiveComponent("Category")}>
// //           <i className="fas fa-list"></i>
// //           {sidebarOpen && <p>Category</p>}
// //         </div>

// //         {/* Calculator Link */}
// //         <div className="sidebar_item" onClick={() => setActiveComponent("Calculator")}>
// //           <i className="fas fa-list"></i>
// //           {sidebarOpen && <p>Calculator</p>}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Sidebar;
// import React from "react";
// import {
//   Dashboard,
//   Store,
//   AddBox,
//   Receipt,
//   Category,
//   Calculate,
//   Menu as MenuIcon,
//   MenuOpen as MenuOpenIcon
// } from '@mui/icons-material';
// import "./SideNavbar.css";

// const Sidebar = ({ sidebarOpen, toggleSidebar, setActiveComponent }) => {
//   return (
//     <div className={`Sidebar ${sidebarOpen ? "Sidebar-open" : "Sidebar-close"}`}>
//       <div className="Sidebar-toggleButton">
//         <button onClick={toggleSidebar}>
//           {sidebarOpen ? <MenuOpenIcon /> : <MenuIcon />}
//         </button>
//       </div>

//       <div className="Sidebar-items">
//         <div className="SidebarItem" onClick={() => setActiveComponent("Dashboard")}>
//           <Dashboard style={{ color: "#fff" }} />
//           {sidebarOpen && <span>Dashboard</span>}
//         </div>

//         <div className="SidebarItem" onClick={() => setActiveComponent("Inventory")}>
//           <Store style={{ color: "#fff" }} />
//           {sidebarOpen && <span>Inventory</span>}
//         </div>

//         <div className="SidebarItem" onClick={() => setActiveComponent("AddInventory")}>
//           <AddBox style={{ color: "#fff" }} />
//           {sidebarOpen && <span>Add Inventory</span>}
//         </div>

//         <div className="SidebarItem" onClick={() => setActiveComponent("Billing")}>
//           <Receipt style={{ color: "#fff" }} />
//           {sidebarOpen && <span>Billing</span>}
//         </div>

//         <div className="SidebarItem" onClick={() => setActiveComponent("Category")}>
//           <Category style={{ color: "#fff" }} />
//           {sidebarOpen && <span>Category</span>}
//         </div>

//         <div className="SidebarItem" onClick={() => setActiveComponent("Calculator")}>
//           <Calculate style={{ color: "#fff" }} />
//           {sidebarOpen && <span>Calculator</span>}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;


// ------------
import React from "react";
import {
  Dashboard,
  Store,
  AddBox,
  Receipt,
  Category,
  Calculate,
  Menu as MenuIcon,
  MenuOpen as MenuOpenIcon
} from '@mui/icons-material';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import ArrowBackIosNewSharpIcon from '@mui/icons-material/ArrowBackIosNewSharp';
import "./SideNavbar.css";

const Sidebar = ({ sidebarOpen, toggleSidebar, setActiveComponent }) => {
  return (
    <div className={`Sidebar ${sidebarOpen ? "Sidebar-open" : "Sidebar-close"}`}>
      {/* Sidebar Heading */}
      <div className="Sidebar-heading ">
        {sidebarOpen && <h2 className="p-2">Parccon Ki Dukkan</h2>}
      </div>

      {/* Toggle Button */}
      <div className="Sidebar-toggleButton">
        <button onClick={toggleSidebar}>
          {sidebarOpen ? <ArrowBackIosNewSharpIcon />:<ArrowForwardIosSharpIcon /> }
        </button>
      </div>

      {/* Sidebar Items */}
      <div className="Sidebar-items">
        <div className="SidebarItem" onClick={() => setActiveComponent("Dashboard")}>
          <Dashboard style={{ color: "#fff" }} />
          {sidebarOpen && <span>Dashboard</span>}
        </div>

        <div className="SidebarItem" onClick={() => setActiveComponent("Inventory")}>
          <Store style={{ color: "#fff" }} />
          {sidebarOpen && <span>Inventory</span>}
        </div>

        <div className="SidebarItem" onClick={() => setActiveComponent("AddInventory")}>
          <AddBox style={{ color: "#fff" }} />
          {sidebarOpen && <span>Add Inventory</span>}
        </div>

        <div className="SidebarItem" onClick={() => setActiveComponent("Billing")}>
          <Receipt style={{ color: "#fff" }} />
          {sidebarOpen && <span>Billing</span>}
        </div>

        <div className="SidebarItem" onClick={() => setActiveComponent("Category")}>
          <Category style={{ color: "#fff" }} />
          {sidebarOpen && <span>Category</span>}
        </div>

        <div className="SidebarItem" onClick={() => setActiveComponent("Calculator")}>
          <Calculate style={{ color: "#fff" }} />
          {sidebarOpen && <span>Calculator</span>}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

