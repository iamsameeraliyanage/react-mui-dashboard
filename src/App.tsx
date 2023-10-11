import {
    CssBaseline,
    StyledEngineProvider,
    ThemeProvider,
} from "@mui/material";
import React from "react";
import theme from "./theme";
import Dashboard from "./pages/dashboard/Dashboard";

function App() {
    return (
        <StyledEngineProvider injectFirst>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <div className="app">
                    <Dashboard />
                </div>
            </ThemeProvider>
        </StyledEngineProvider>
    );
}

export default App;
