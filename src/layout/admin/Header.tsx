import { Fragment } from "react";
import { HiUserCircle } from "react-icons/hi";
import { RiLogoutBoxLine } from "react-icons/ri";
import { Navbar } from "@material-tailwind/react";
import { HiCog6Tooth, HiInboxArrowDown, HiLifebuoy } from "react-icons/hi2";
import { TextInput } from "@component/global/Inputs";
import { CustomTypography } from "@component/global/Typography";
import { ProfileMenu } from "@component/global/MenuTabs";

interface HeaderProps {
  name: string;
  role: string;
  // handleSearch: (event: string) => void;
  profilePic?: string;
}

const Header = ({ name, role, profilePic }: HeaderProps) => {
  const profileMenuItems = [
    {
      label: "My Profile",
      icon: HiUserCircle,
      to: "#",
    },

    {
      label: "Edit Profile",
      icon: HiCog6Tooth,
      to: "#",
    },

    {
      label: "Inbox",
      icon: HiInboxArrowDown,
      to: "#",
    },

    {
      label: "Help",
      icon: HiLifebuoy,
      to: "#",
    },

    {
      label: "Sign Out",
      icon: RiLogoutBoxLine,
      to: "#",
    },
  ];

  return (
    <Fragment>
      {/*// @ts-ignore*/}
      <Navbar
        className={`flex justify-between bg-white sticky top-0 z-10 h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4`}
      >
        <div className="relative flex gap-2">
          <TextInput
            type="text"
            placeholder="Search"
            label="Search"
            className="!border !w-[200px] text-gray-900 shadow-lg shadow-gray-900/5 placeholder:text-gray-500 placeholder:opacity-100 focus:!w-[220px]"
            onChange={(e) => console.log(e)}
            name="search"
            error={""}
          />
        </div>

        <div className={`flex items-center justify-between`}>
          <div
            className={`mx-2 min-w-[100px] max-w-[200px] items-center justify-center px-2`}
          >
            <CustomTypography
              variant={"p"}
              className={`!truncate`}
              size="xs"
              weight="medium"
              align="right"
            >
              {name}
            </CustomTypography>

            <CustomTypography
              variant={"h6"}
              className={`!truncate`}
              size="sm"
              align="right"
              weight="semibold"
            >
              {role}
            </CustomTypography>
          </div>

          <ProfileMenu
            profileImg={
              profilePic ??
              "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
            }
            menuItems={profileMenuItems}
          />
        </div>
      </Navbar>
    </Fragment>
  );
};

export default Header;
