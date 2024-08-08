import { Fragment } from "react";
import { CustomTypography } from "@component/global/Typography";
import { DefaultCard } from "@component/global/Card";
import Doctor from "@asset/svg/Doctor";

const ActivitySummary = () => {
  return (
    <Fragment>
      <div className={`grid grid-cols-1 gap-4 my-4 lg:grid-cols-4`}>
        <DefaultCard cardClass={`max-w-md w-full py-4 !w-full`}>
          <div className={`w-full flex flex-row justify-between items-center px-8 py-4`}>
            <Doctor height={50} width={50} />

            <div className={`flex flex-col ml-1`}>
              <CustomTypography
                variant={`h2`}
              >
                3000
              </CustomTypography>

              <CustomTypography
                variant={`p`}
                size="xs"
                className={`text-[#C4C4C6]`}
              >
                Doctors
              </CustomTypography>
            </div>
        </div>
        </DefaultCard>
      </div>
    </Fragment>
  );
};

export default ActivitySummary;
