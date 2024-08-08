import {MdDashboard, MdLocalActivity, MdReport} from "react-icons/md";
import {FaUserFriends, FaUserMd} from "react-icons/fa";
import {FaCalendarDay, FaHospitalUser, FaUserInjured, FaUserPlus} from "react-icons/fa6";
import {RiCommunityFill, RiShieldUserFill} from "react-icons/ri";
import {BsFillPieChartFill} from "react-icons/bs";
import {TbFaceMask, TbMessageCircle2Filled} from "react-icons/tb";
import {SidebarItemProps} from "@type/index.types";

export const AdminSideBarItems = (siteId: string) => {
  const adminData = JSON.parse(localStorage.getItem('adminData') as string);

  // if (localStorage.getItem('role') === 'HUMAN_RESOURCES')
    return [
      {
        item: 'Dashboard',
        Icon: <MdDashboard size={25} />,
        route: '#',
      },

      {
        item: 'Admin',
        Icon: <FaUserFriends size={25} />,
        route: `#`,
      },

      {
        item: 'Patients',
        Icon: <FaUserInjured size={25} />,
        route: `/admin/patients/${siteId}`,
      },

      {
        item: 'Care Provider',
        Icon: <FaUserMd size={25} />,
        route: `/admin/providers/${siteId}`,
      },

      {
        item: 'Activity',
        Icon: <MdLocalActivity size={25} />,
        route: '#',
      },

      {
        item: 'Reports',
        Icon: <MdReport size={25} />,
      },

      {
        item: 'Roles',
        Icon: <RiShieldUserFill size={25} />,
        route: `/admin/roles/${adminData?.siteId as string}`,
      },

      {
        item: 'Departments',
        Icon: <FaHospitalUser size={25} />,
        route: `/admin/departments/${adminData?.siteId as string}`,
      },

      {
        item: 'Units',
        Icon: <RiCommunityFill size={25} />,
        route: `/admin/units/${adminData?.siteId as string}`,
      },

      {
        item: 'Service Area',
        Icon: <BsFillPieChartFill size={25} />,
        route: `/admin/service-area/${adminData?.siteId as string}`,
      },

      {
        item: 'Inbox',
        Icon: <TbMessageCircle2Filled size={25} />,
        route: '#',
      },

      {
        item: 'Appointment',
        Icon: <FaCalendarDay size={25} />,
        // route: '/patient',
      },

      {
        item: 'History',
        Icon: <TbFaceMask size={25} />,
        route: '#',
      },

      {
        item: 'Profile',
        Icon: <FaUserPlus size={25} />,
        route: '#',
      },
  ] as SidebarItemProps[];

  // return [] as SidebarItemProps[];
};