import { Fragment } from "react";
import useAdminLogin from "@hook/auth/useAdminLogin";

const AdminLogin = () => {
  const {
    // values
  } = useAdminLogin();

  return (
    <Fragment>
      <div className="flex items-center justify-center bg-[#F9FAFB] dark:bg-black h-screen">
        <div className="max-w-screen-xl items-center h-full w-full grid grid-cols-1 gap-4 p-20 md:grid-cols-2 md:gap-20">
          <div className="flex flex-col w-full"></div>
        </div>
      </div>
    </Fragment>
  );
};

export default AdminLogin;
