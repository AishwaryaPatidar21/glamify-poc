import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Homepage from "../Charts";
import AgGridTable from "../Table/AgGridTable";
// import InboxIcon from '@mui/icons-material/MoveToInbox';
// import MailIcon from '@mui/icons-material/Mail';

const drawerWidth = 250;

export default function ClippedDrawer() {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1,
          background: "#fff",
          color: "#000",
          borderBottom: "1px solid #E9E9E9",
          boxShadow: "none",
        }}
      >
        <Toolbar style={{ justifyContent: "space-between" }}>
          <Typography variant="h6" noWrap component="div">
            Glamify
          </Typography>
          <Typography variant="h6" noWrap component="div">
            Glamify
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: "auto", height: "100%" }}>
          <List sx={{ height: "99%" }}>
            {[
              "Dashboard",
              "Jobs",
              "Consumers",
              "Service Management",
              "Finance Report",
            ].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
        </Box>
      </Drawer>
      <Box component="main" sx={{ width: "100%" }}>
        <Toolbar />
        <Box sx={{ p: 2 }}>
          <Typography variant="h6" noWrap component="div">
            Finance Report
          </Typography>
        </Box>
        <Homepage />
        <AgGridTable/>
      </Box>
    </Box>
  );
}
