import { createBrowserRouter } from "react-router-dom";
import Dashboard from "./view/Dashboard";
import FormEditor from "./view/FormEditor";
import { ThemeProvider } from "@mui/material";
import theme from "./utils/theme";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/form/:formId",
    element: (
      <ThemeProvider theme={theme}>
        <FormEditor />
      </ThemeProvider>
    ),
  },
]);
