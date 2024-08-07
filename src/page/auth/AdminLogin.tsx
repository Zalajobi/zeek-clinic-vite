import { Fragment } from "react";
import useAdminLogin from "@hook/auth/useAdminLogin";
import {CustomTypography} from "@component/global/Typography";

const AdminLogin = () => {
  const {
    // values
  } = useAdminLogin();

  return (
    <Fragment>
      <div className="flex items-center justify-center bg-[#F9FAFB] dark:bg-black h-screen">
        <div className="max-w-screen-xl items-center h-full w-full grid grid-cols-1 gap-4 p-20 md:grid-cols-2 md:gap-20">
          <div className="flex flex-col w-full">
            <CustomTypography
              variant={"h4"}
              weight="extrabold"
              className="text-[#111928] dark:text-white mb-4"
            >
              Welcome Back
            </CustomTypography>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default AdminLogin;
