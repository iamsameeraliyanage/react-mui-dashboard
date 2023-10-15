import {
    CssBaseline,
    StyledEngineProvider,
    ThemeProvider,
} from "@mui/material";
import React from "react";
import theme from "./theme";
import Dashboard from "./pages/dashboard/Dashboard";
import styles from "./App.module.scss";

function App() {
    return (
        <StyledEngineProvider injectFirst>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <div className={styles.app}>
                    <Dashboard />
                </div>
            </ThemeProvider>
        </StyledEngineProvider>
    );
}

export default App;
