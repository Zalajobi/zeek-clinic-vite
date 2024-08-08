import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "@page/Index";
import Dashboard from "@page/admin/Dashboard";
import AdminLogin from "@page/auth/AdminLogin";
import AdminDashboard from "@layout/admin/AdminDashboard";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>}/>

        {/*Admin Route*/}
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin" element={<AdminDashboard/>}>
          <Route index element={<Dashboard/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
