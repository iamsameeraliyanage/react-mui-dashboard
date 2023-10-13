import {
    Box,
    Divider,
    IconButton,
    List,
    Toolbar,
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
                {open && (
                    <Typography
                        sx={{
                            mr: "auto",
                        }}
                        variant="h3"
                    >
                        Logo
                    </Typography>
                )}

                <IconButton color="inherit" onClick={setOpen}>
                    <ChevronLeftIcon />
                </IconButton>
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
