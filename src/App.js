import { CssBaseline, StyledEngineProvider } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import Routes from "./routes";
import themes from "./themes";
import config from "config";
import { ProgressLoader } from "utils/context/ProgressLoader";

function App() {

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={themes({
        fontFamily: config.fontFamily,
        borderRadius: config.borderRadius,
      })}>
        <ProgressLoader>
          <Routes />
        </ProgressLoader>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default App;
