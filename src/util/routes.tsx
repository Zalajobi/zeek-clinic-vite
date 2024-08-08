import AdminLogin from "@page/auth/AdminLogin";

export const adminRoute = {
  path: "/admin",
  children: [
    {
      path: "/admin/login",
      element: <AdminLogin />,
    },
  ],
};
