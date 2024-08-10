// import { Outlet } from "react-router-dom";
import Sidebar from "@layout/admin/sidebar";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import { useAdminDashboard } from "@hook/admin/useAdminDashboard";
import Header from "@layout/admin/Header";

const AdminDashboard = () => {
  const [isSidebarOpen, _setIsSidebarOpen] = useState(true);

  const {
    // values
    adminData,
  } = useAdminDashboard();

  return (
    <div className="max-width2 relative overflow-x-hidden">
      <div
        className={`${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 md:block w-[90%] h-full md:w-[30%] lg:w-[25%] xl:w-[20%] 2xl:w-[15%] fixed top-0 left-0 z-10 transition`}
      >
        <Sidebar siteId={adminData?.siteId ?? ""} />
      </div>
      <div className="md:w-[70%] lg:w-[75%] xl:w-[80%] 2xl:w-[85%] ml-auto bg-[#f1f3f7] min-h-screen">
        <Header
          name={`${adminData?.title} ${adminData?.firstName} ${adminData?.lastName}`}
          role={adminData?.role ?? ""}
          profilePic={adminData?.profilePic}
        />

        <div className="p-10 h-full w-full">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
