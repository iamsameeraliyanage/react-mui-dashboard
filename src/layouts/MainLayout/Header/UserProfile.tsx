import {
    Avatar,
    Box,
    Button,
    Card,
    CardContent,
    Divider,
    Popover,
    Stack,
    Typography,
} from "@mui/material";
import React from "react";
import SignOut from "@mui/icons-material/ExitToApp";

interface UserProfileProps {
    userName: string;
    userImage: string;
    userEmail: string;
}

function UserProfile({ userName, userImage, userEmail }: UserProfileProps) {
    const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
        null
    );

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? "simple-popover" : undefined;
    return (
        <Box ml={3}>
            <Button aria-describedby={id} variant="text" onClick={handleClick}>
                <Typography variant="h5" sx={{ mr: 2 }}>
                    {userName}
                </Typography>
                <Avatar alt={userName} src={userImage} />
            </Button>
            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                }}
            >
                <Card>
                    <CardContent>
                        <Stack alignItems="center" sx={{ minWidth: 300 }}>
                            <Stack alignItems="center" pt={3}>
                                <Avatar alt={userName} src={userImage} />
                                <Typography variant="h3" sx={{ mt: 2 }}>
                                    {userName}
                                </Typography>
                                <Typography variant="h3" color="secondary">
                                    {userEmail}
                                </Typography>
                            </Stack>
                            <Stack width={1} my={2}>
                                <Divider />
                            </Stack>
                            <Stack width={1}>
                                <Button
                                    fullWidth
                                    variant="text"
                                    size="large"
                                    startIcon={<SignOut />}
                                >
                                    Logout
                                </Button>
                            </Stack>
                        </Stack>
                    </CardContent>
                </Card>
            </Popover>
        </Box>
    );
}

export default UserProfile;
