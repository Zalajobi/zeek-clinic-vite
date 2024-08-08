import {FC} from "react";
import {CustomTypography} from "@component/global/Typography";
// @ts-ignore
import LoginImage from "@asset/svg/SignIn.svg";

const SidebarHeader: FC = () => {
  return (
    <div className="mb-2 p-4">
      <div className="flex items-end gap-3">
        <CustomTypography variant="h2" weight="black" >
          Zeek Clinic
        </CustomTypography>
      </div>
    </div>
  );
};

export default SidebarHeader;
