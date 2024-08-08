import {Fragment} from "react";
import {ToasterConfig} from "@component/global/Toast";
import AppRouter from "@util/AppRouter";

export default function App() {
  return (
    <Fragment>
      <AppRouter/>
      <ToasterConfig/>
    </Fragment>
  );
}
