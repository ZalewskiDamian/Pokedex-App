import { ThemeProvider } from "styled-components";
import { theme } from "./theme/theme";
import GlobalStyle from "./theme/GlobalStyles";
import { AppRoutes } from "./routing/AppRoutes";
import { Header } from "./components";

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <AppRoutes />
    </ThemeProvider>
  );
};
