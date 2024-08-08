import { Fragment } from "react";
import {CustomTypography, IntegerTypography} from "@component/global/Typography";
import { DefaultCard } from "@component/global/Card";
import Doctor from "@asset/svg/Doctor";

const ActivitySummary = () => {
  return (
    <Fragment>
      <div className={`grid grid-cols-1 gap-4 my-4 lg:grid-cols-4`}>
        <DefaultCard cardClass={`max-w-md w-full py-4 !w-full items-center`}>
          <div className={`flex flex-row justify-between items-center px-8 py-4 w-3/4`}>
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
