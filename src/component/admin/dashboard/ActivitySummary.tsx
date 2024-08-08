import { Fragment } from "react";
import { CustomTypography } from "@component/global/Typography";
import { DefaultCard } from "@component/global/Card";
import Doctor from "@asset/svg/Doctor";

const ActivitySummary = () => {
  return (
    <Fragment>
      <div className={`grid grid-cols-1 gap-4 my-4 lg:grid-cols-4`}>
        <DefaultCard cardClass={`max-w-md w-full`}>
          <div className={`w-full flex flex-col justify-start px-8 py-4`}>
            <div className={`w-full flex flex-row justify-start mb24`}>
              <div className={`rounded-full p-4 mr-4`}>
                <Doctor />
              </div>

              <div className={`flex flex-col ml-1`}>
                <CustomTypography variant={`h2`} size="xl">
                  Bold Header
                </CustomTypography>

                <CustomTypography
                  variant={`p`}
                  size="xs"
                  className={`text-[#C4C4C6]`}
                >
                  Light Header
                </CustomTypography>
              </div>
            </div>

            <div className={`flex flex-row mt-2 items-center`}>
              <span className={`mr-1`}>Description Context</span>

              <CustomTypography variant={`p`} size="xs">
                description
              </CustomTypography>
            </div>
          </div>
        </DefaultCard>
      </div>
    </Fragment>
  );
};

export default ActivitySummary;
