import { Fragment } from "react";
import {CustomTypography, IntegerTypography} from "@component/global/Typography";
import { DefaultCard } from "@component/global/Card";
import Doctor from "@asset/svg/Doctor";
import Patient from "@asset/svg/Patient";
import Admin from "@asset/svg/Admin";

const ActivitySummary = () => {
  return (
    <Fragment>
      <div className={`grid grid-cols-1 gap-4 my-4 lg:grid-cols-4 md:gap-8`}>
        <DefaultCard cardClass={`max-w-md w-full py-4 !w-full items-center`}>
          {/*Provider*/}
          <div className={`w-full flex flex-row justify-center items-center px-8 py-4 gap-4 md:gap-8`}>
            <Doctor height={60} width={60} />

            <div className={`flex flex-col ml-1`}>
              <IntegerTypography
                separator=","
                variant="h1"
                weight="extrabold"
                className="font-rajdhani"
                children={3000}
                decimals={0}
              />

              <CustomTypography
                variant={`p`}
                size="lg"
                weight="bold"
                className={`text-[#B2B5C0]`}
              >
                Providers
              </CustomTypography>
            </div>
          </div>
        </DefaultCard>

        {/*Patient*/}
        <DefaultCard cardClass={`max-w-md w-full py-4 !w-full items-center`}>
          <div className={`w-full flex flex-row justify-center items-center px-8 py-4 gap-4 md:gap-8`}>
            <Patient height={60} width={60} />

            <div className={`flex flex-col ml-1`}>
              <IntegerTypography
                separator=","
                variant="h1"
                weight="extrabold"
                className="font-rajdhani"
                children={12000}
                decimals={0}
              />

              <CustomTypography
                variant={`p`}
                size="lg"
                weight="bold"
                className={`text-[#B2B5C0]`}
              >
                Patients
              </CustomTypography>
            </div>
          </div>
        </DefaultCard>

        {/*Admin*/}
        <DefaultCard cardClass={`max-w-md w-full py-4 !w-full items-center`}>
          <div className={`w-full flex flex-row justify-center items-center px-8 py-4 gap-4 md:gap-8`}>
            <Admin height={60} width={60} />

            <div className={`flex flex-col ml-1`}>
              <IntegerTypography
                separator=","
                variant="h1"
                weight="extrabold"
                className="font-rajdhani"
                children={1372}
                decimals={0}
              />

              <CustomTypography
                variant={`p`}
                size="lg"
                weight="bold"
                className={`text-[#B2B5C0]`}
              >
                Admins
              </CustomTypography>
            </div>
          </div>
        </DefaultCard>
      </div>
    </Fragment>
  );
};

export default ActivitySummary;
