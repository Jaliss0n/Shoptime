import { ThemeProvider } from "@emotion/react";
import theme from "./theme";
import Navigation from "./routes";
import Register from "./pags/authentication/register/register";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Navigation/>
    </ThemeProvider>
  );
}
