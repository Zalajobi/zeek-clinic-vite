import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import { Provider } from "react-redux";

import { ThemeProvider } from "@material-tailwind/react";
import QueryClientProviderWrapper from "../src/lib/QueryClient";
import store from "@redux/store";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <StrictMode>
    <QueryClientProviderWrapper>
      <Provider store={store}>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </Provider>
    </QueryClientProviderWrapper>
  </StrictMode>,
);
