import { AppBar, Badge, IconButton, Toolbar, Typography } from "@mui/material";
import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import NotificationsIcon from "@mui/icons-material/Notifications";
import UserProfile from "./UserProfile";

interface HeaderProps {
    open: boolean;
    setOpen?: React.MouseEventHandler<HTMLButtonElement>;
}

function Header(props: HeaderProps) {
    const { open, setOpen } = props;
    return (
        <AppBar position="relative" color="default">
            <Toolbar
                sx={{
                    pr: "24px",
                }}
            >
                <IconButton
                    edge="start"
                    color="inherit"
                    aria-label="open drawer"
                    onClick={setOpen}
                    sx={{
                        marginRight: "36px",
                        ...(open && { display: "none" }),
                    }}
                >
                    <MenuIcon />
                </IconButton>
                <Typography
                    component="h1"
                    variant="h6"
                    color="inherit"
                    noWrap
                    sx={{ flexGrow: 1 }}
                >
                    Dashboard
                </Typography>
                <IconButton color="inherit">
                    <Badge badgeContent={4} color="secondary">
                        <NotificationsIcon />
                    </Badge>
                </IconButton>
                <UserProfile
                    userName="JohnDoe"
                    userImage={""}
                    userEmail="johndoe@email.com"
                />
            </Toolbar>
        </AppBar>
    );
}

export default Header;
