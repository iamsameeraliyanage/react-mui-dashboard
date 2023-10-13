import * as React from "react";
import MuiListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PeopleIcon from "@mui/icons-material/People";
import BarChartIcon from "@mui/icons-material/BarChart";
import LayersIcon from "@mui/icons-material/Layers";
import AssignmentIcon from "@mui/icons-material/Assignment";

interface ListItemButtonProps {
    children: React.ReactNode;
    icon: React.ReactNode;
}

const ListItemButton = (props: ListItemButtonProps) => (
    <MuiListItemButton
        sx={{
            color: (theme) => theme.palette.common.white,
        }}
    >
        <ListItemIcon
            sx={{
                color: (theme) => theme.palette.common.white,
            }}
        >
            {props.icon}
        </ListItemIcon>

        {props.children}
    </MuiListItemButton>
);

export const mainListItems = (
    <React.Fragment>
        <ListItemButton icon={<DashboardIcon />}>
            <ListItemText primary="Dashboard" />
        </ListItemButton>
        <ListItemButton icon={<ShoppingCartIcon />}>
            <ListItemText primary="Orders" />
        </ListItemButton>
        <ListItemButton icon={<PeopleIcon />}>
            <ListItemText primary="Customers" />
        </ListItemButton>
        <ListItemButton icon={<BarChartIcon />}>
            <ListItemText primary="Reports" />
        </ListItemButton>
        <ListItemButton icon={<LayersIcon />}>
            <ListItemText primary="Integrations" />
        </ListItemButton>
    </React.Fragment>
);

export const secondaryListItems = (
    <React.Fragment>
        <ListItemButton icon={<AssignmentIcon />}>
            <ListItemText primary="Current month" />
        </ListItemButton>
        <ListItemButton icon={<AssignmentIcon />}>
            <ListItemText primary="Last quarter" />
        </ListItemButton>
        <ListItemButton icon={<AssignmentIcon />}>
            <ListItemText primary="Year-end sale" />
        </ListItemButton>
    </React.Fragment>
);
