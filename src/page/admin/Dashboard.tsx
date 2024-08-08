import { Fragment } from "react";
import ActivitySummary from "@component/admin/dashboard/ActivitySummary";

const Dashboard = () => {
  return (
    <Fragment>
      <div className="flex flex-col w-full">
        <ActivitySummary />
      </div>
    </Fragment>
  );
};

export default Dashboard;
