import { StyledHeader } from "./styles";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import iconChat from "../../assets/icons/chat.svg";
import useUser from "../../hooks/useUser";
const settings = ["Profile", "Account", "Logout"];

const Header = () => {
  const { user, logout } = useUser();

  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleLogout = (e) => {
    if (e.target.innerHTML === "Logout") {
      console.log('log')
      logout();
    }
  };

  return (
    <StyledHeader>
      <AppBar>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <img src={iconChat} />
            <Typography
              variant="h5"
              noWrap
              component="a"
              sx={{
                mr: 2,
                display: { xs: "flex" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 600,
                letterSpacing: ".1rem",
                color: "white",
                textDecoration: "none",
              }}
            >
              ChatNow
            </Typography>
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton
                  onClick={(ev) => setAnchorElUser(ev.currentTarget)}
                  sx={{ p: 0 }}
                >
                  <Avatar alt={user.name?.toUpperCase()} src="J" />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={() => setAnchorElUser(null)}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={() => setAnchorElUser(null)}>
                    <Typography
                      textAlign="center"
                      onClick={(e) => handleLogout(e)}
                    >
                      {setting}
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </StyledHeader>
  );
};

export default Header;
