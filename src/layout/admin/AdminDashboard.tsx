// import { Outlet } from "react-router-dom";
import Sidebar from "@layout/admin/sidebar";
import {Outlet} from "react-router-dom";
import {useState} from "react";
import {useAdminDashboard} from "@hook/admin/useAdminDashboard";
import Header from "@layout/admin/Header";

const AdminDashboard = () => {
  const [isSidebarOpen, _setIsSidebarOpen] = useState(true)

  const {
    // values
    adminData,
  } = useAdminDashboard();

  return (
    <div className="max-width2 relative overflow-x-hidden grid grid-cols-[90%_10%] md:grid-cols-[30%_70%] lg:grid-cols-[25%_75%] xl:grid-cols-[20%_80%] 2xl:grid-cols-[15%_85%]">
      <div
        className={`${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 md:block`}
      >
        <Sidebar siteId={adminData?.siteId ?? ""} />
      </div>
      <div className="w-full bg-white min-h-screen">
        <Header
          name={`${adminData?.title} ${adminData?.firstName} ${adminData?.lastName}`}
          role={adminData?.role ?? ""}
          profilePic={adminData?.profilePic}
        />


        <div className="p-10">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
