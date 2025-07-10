import React from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { Outlet } from "react-router";
import { useState } from "react";
const Layout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  return (

    <div className="relative min-h-screen overflow-x-hidden overflow-y-auto">
      <Header toggleSidebar={toggleSidebar}/>
      <Sidebar isOpen={isSidebarOpen}/>

      {/* Main content area */}
      <div  className="pt-16 min-h-screen overflow-x-hidden lg:pl-60">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
