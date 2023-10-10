import { CssBaseline, StyledEngineProvider } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import Routes from "./routes";
import themes from "./themes";

function App() {

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={themes({})}>
        <Routes />
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default App;
