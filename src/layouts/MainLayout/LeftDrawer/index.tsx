import {
    Box,
    Divider,
    IconButton,
    List,
    Typography,
    styled,
} from "@mui/material";
import MuiDrawer from "@mui/material/Drawer";
import {
    mainListItems,
    secondaryListItems,
} from "pages/dashboard/DashboardComponents/ListItems";
import React from "react";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

import logoWhite from "assets/logo/logo-white.svg";

interface LeftDrawerProps {
    open: boolean;
    setOpen?: React.MouseEventHandler<HTMLButtonElement>;
}

const drawerWidth: number = 240;

const Drawer = styled(MuiDrawer, {
    shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
    "& .MuiDrawer-paper": {
        position: "relative",
        whiteSpace: "nowrap",
        background: theme.palette.primary.main,
        width: drawerWidth,
        transition: theme.transitions.create("width", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
        boxSizing: "border-box",
        ...(!open && {
            overflowX: "hidden",
            transition: theme.transitions.create("width", {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
            }),
            width: theme.spacing(7),
            [theme.breakpoints.up("sm")]: {
                width: theme.spacing(9),
            },
        }),
    },
}));
function LeftDrawer(props: LeftDrawerProps) {
    const { open, setOpen } = props;
    return (
        <Drawer variant="permanent" open={open}>
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    p: 2,
                    color: (theme) => theme.palette.common.white,
                }}
            >
                <Box
                    sx={
                        open
                            ? {
                                  width: (theme) => theme.spacing(4),
                              }
                            : {
                                  width: (theme) => theme.spacing(4.5),
                              }
                    }
                >
                    <img src={logoWhite} alt="logo" className="img-fluid" />
                </Box>
                {open && (
                    <Box sx={{ mr: "auto", ml: 2 }}>
                        <Typography variant="h3">Logo</Typography>
                    </Box>
                )}

                {open && (
                    <IconButton color="inherit" onClick={setOpen}>
                        <ChevronLeftIcon />
                    </IconButton>
                )}
            </Box>

            <List component="nav">
                {mainListItems}
                <Divider sx={{ my: 1 }} />
                {secondaryListItems}
            </List>
        </Drawer>
    );
}

export default LeftDrawer;
