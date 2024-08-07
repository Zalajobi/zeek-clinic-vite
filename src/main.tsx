import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import { Provider } from 'react-redux';

import { ThemeProvider } from "@material-tailwind/react";
import QueryClientProviderWrapper from "../src/lib/QueryClient";
import store from "../src/redux/store";
import {createBrowserRouter, RouterProvider} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
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
