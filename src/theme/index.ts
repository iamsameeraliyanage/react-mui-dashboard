import { ThemeOptions, createTheme } from "@mui/material";
import { components } from "./components";
import { palette } from "./palette";
import { typographyOpt } from "./typography";

const theme: ThemeOptions = createTheme({
    palette: palette,
    typography: typographyOpt,
    components: components,
});

export default theme;
