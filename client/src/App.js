
import { ThemeProvider, styled } from "styled-components";
import { lightTheme } from "./utils/Themes";

function App() {
  return (
    <ThemeProvider theme={lightTheme}> hello</ThemeProvider>
  );
}

export default App;
