import { CssBaseline, StyledEngineProvider } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import Routes from "./routes";
import themes from "./themes";
import config from "config";

function App() {

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={themes({
        fontFamily: config.fontFamily,
        borderRadius: config.borderRadius,
      })}>
        <Routes />
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default App;
