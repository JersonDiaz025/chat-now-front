import { StyledHeader } from "./styles";
import { useState } from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { iconChat } from "../../assets";
import { useUser } from "../../hooks/index";
import { ControlledSwitches } from "../index";

const SENTING = ["Profile", "Account", "Logout"];

const Header = () => {
  const { user, logout } = useUser();

  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleLogout = (e) => {
    if (e.target.innerHTML === "Logout") {
      logout();
    }
  };

  return (
    <StyledHeader>
      {/*<Container maxWidth="1640">*/}
      {/*<Toolbar disableGutters>*/}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          paddingX: '10px',
          maxWidth: "100%",

          marginLeft: 'auto',
          marginRight: 'auto',
          paddingLeft: '30px',
          paddingRight: '30px',
          width: '1410px',
        }}
      >
        <img src={iconChat} />
        <Typography
          variant="h5"
          noWrap
          component="a"
          sx={{
            mr: 2,
            ml: 2,
            display: { xs: "flex" },
            flexGrow: 1,
            fontFamily: "monospace",
            fontWeight: 600,
            //letterSpacing: ".1rem",
            //color: "#000000",
            textDecoration: "none",
          }}
        >
          ChatNow
        </Typography>
        <ControlledSwitches />
      </Box>
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
          {SENTING.map((setting) => (
            <MenuItem key={setting} onClick={() => setAnchorElUser(null)}>
              <Typography textAlign="center" onClick={(e) => handleLogout(e)}>
                {setting}
              </Typography>
            </MenuItem>
          ))}
        </Menu>
      </Box>
      {/*</Toolbar>*/}
      {/*</Container>*/}
    </StyledHeader>
  );
};

export default Header;
