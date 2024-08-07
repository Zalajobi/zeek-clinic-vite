import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import { Provider } from "react-redux";

import { ThemeProvider } from "@material-tailwind/react";
import QueryClientProviderWrapper from "../src/lib/QueryClient";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { adminRoute } from "@util/routes";
import store from "@redux/store";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },

  adminRoute,
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <StrictMode>
    <QueryClientProviderWrapper>
      <Provider store={store}>
        <ThemeProvider>
          <RouterProvider router={router} />
        </ThemeProvider>
      </Provider>
    </QueryClientProviderWrapper>
  </StrictMode>,
);
