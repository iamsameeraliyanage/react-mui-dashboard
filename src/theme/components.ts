import { Components } from "@mui/material";
import { Theme } from "@mui/material/styles";

export const components: Components<Theme> = {
    MuiButtonBase: {
        defaultProps: {
            disableRipple: true,
        },
    },
    MuiButton: {
        styleOverrides: {
            root: {
                textTransform: "capitalize",
            },
        },
    },
};
