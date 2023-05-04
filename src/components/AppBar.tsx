import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
// import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import { BiExclude } from "react-icons/bi";
// import AdbIcon from '@mui/icons-material/Adb';

const pages = ["Products", "Pricing", "Blog"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

function ResponsiveAppBar() {
  return (
    <AppBar position="fixed" elevation={0}>
      <Container maxWidth="xl">
        <Toolbar disableGutters variant="dense">
          <BiExclude size={25} color={"yellow"} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            ml={2}
            sx={{
              display: { md: "flex" },
              fontWeight: 500,
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Dataverse
          </Typography>
          <Box sx={{ flexGrow: 1, display: "flex", justifyContent: "end" }}>
            <IconButton sx={{ p: 0 }}>
              <Avatar alt="User" src="https://bit.ly/dan-abramov" />
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
