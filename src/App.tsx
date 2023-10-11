import {
    Button,
    CssBaseline,
    Stack,
    StyledEngineProvider,
    ThemeProvider,
} from "@mui/material";
import React from "react";
import theme from "./theme";

function App() {
    return (
        <StyledEngineProvider injectFirst>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <div className="app">
                    <Stack spacing={2} direction="row">
                        <Button color="primary" variant="contained">
                            Hello world
                        </Button>
                        <Button color="secondary" variant="contained">
                            Hello world
                        </Button>
                        <Button color="success" variant="contained">
                            Hello world
                        </Button>
                        <Button color="warning" variant="contained">
                            Hello world
                        </Button>
                    </Stack>
                </div>
            </ThemeProvider>
        </StyledEngineProvider>
    );
}

export default App;
