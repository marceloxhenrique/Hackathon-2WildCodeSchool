import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import SmartToyRoundedIcon from "@mui/icons-material/SmartToyRounded";
import PhonelinkSetupIcon from "@mui/icons-material/PhonelinkSetup";
import RssFeedRoundedIcon from "@mui/icons-material/RssFeedRounded";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import ContactSupportIcon from "@mui/icons-material/ContactSupport";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../contexts/UserContext";

import logo from "../assets/logoSmall.svg";

export default function Navbar() {
  const navigate = useNavigate();
  const { logout } = useUserContext();

  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [anchorElNavMenu, setAnchorElNavMenu] = React.useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleOpenNavMenu = (event) => {
    setAnchorElNavMenu(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNavMenu(null);
  };

  const handleLinkHome = () => {
    navigate("/home");
  };
  const handleLinkEval = () => {
    navigate("/evaluation");
  };
  const handleLinkInfos = () => {
    navigate("/infos-tech");
  };

  const handleLinkLogout = () => {
    logout();
    navigate("/logout");
  };
  const handleLinkUser = () => {
    navigate("/profil");
  };

  const handleLinkFAQ = () => {
    navigate("/faq");
  };
  const handleLinkChat = () => {
    navigate("/chatbot");
  };

  return (
    <AppBar position="sticky" color="primary">
      <Container maxWidth="xxl">
        <Toolbar disableGutters>
          <Box sx={{ display: { xs: "none", lg: "flex" } }}>
            <img src={logo} alt="logo" />
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              sx={{ mt: "45px" }}
              id="NavMenu"
              anchorEl={anchorElNavMenu}
              anchorOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNavMenu)}
              onClose={handleCloseNavMenu}
            >
              <MenuItem onClick={handleLinkHome}>
                <Typography textAlign="center" variant="h6" sx={{ p: 2 }}>
                  Accueil
                </Typography>
              </MenuItem>
              <MenuItem onClick={handleLinkEval}>
                <Typography textAlign="center" variant="h6" sx={{ p: 2 }}>
                  Evaluer un Téléphone
                </Typography>
              </MenuItem>
              <MenuItem onClick={handleLinkChat}>
                <Typography textAlign="center" variant="h6" sx={{ p: 2 }}>
                  ChatBot
                </Typography>
              </MenuItem>
              <MenuItem onClick={handleLinkInfos}>
                <Typography textAlign="center" variant="h6" sx={{ p: 2 }}>
                  Infos Tech
                </Typography>
              </MenuItem>
              <MenuItem onClick={handleLinkFAQ}>
                <Typography textAlign="center" variant="h6" sx={{ p: 2 }}>
                  FAQ
                </Typography>
              </MenuItem>
            </Menu>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-evenly",
              pl: 5,
              flexGrow: 3,
            }}
          >
            <Button
              onClick={handleLinkHome}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              <Box
                sx={{
                  flexGrow: 1,
                  display: {
                    xs: "none",
                    md: "flex",
                    alignItems: "center",
                  },
                  pl: 5,
                }}
              >
                <HomeRoundedIcon />
                <Typography sx={{ ml: 1 }}>Accueil</Typography>
              </Box>
            </Button>

            <Button
              onClick={handleLinkEval}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              <Box
                sx={{
                  flexGrow: 1,
                  display: { xs: "none", md: "flex", alignItems: "center" },
                  pl: 5,
                }}
              >
                <PhonelinkSetupIcon />
                <Typography sx={{ ml: 1 }}>Evaluer un Téléphone</Typography>
              </Box>
            </Button>
            <Button
              onClick={handleLinkChat}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              <Box
                sx={{
                  flexGrow: 1,
                  display: { xs: "none", md: "flex", alignItems: "center" },
                  pl: 5,
                }}
              >
                <SmartToyRoundedIcon />
                <Typography sx={{ ml: 1 }}>ChatBot</Typography>
              </Box>
            </Button>
            <Button
              onClick={handleLinkInfos}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              <Box
                sx={{
                  flexGrow: 1,
                  display: { xs: "none", md: "flex", alignItems: "center" },
                  pl: 5,
                }}
              >
                <RssFeedRoundedIcon />
                <Typography sx={{ ml: 1 }}>Infos Tech</Typography>
              </Box>
            </Button>
            <Button
              onClick={handleLinkFAQ}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              <Box
                sx={{
                  flexGrow: 1,
                  display: { xs: "none", md: "flex", alignItems: "center" },
                  pl: 5,
                }}
              >
                <ContactSupportIcon />
                <Typography sx={{ ml: 1 }}>FAQ</Typography>
              </Box>
            </Button>
          </Box>
          <Box
            sx={{ flexGrow: 1, display: "flex", justifyContent: "flex-end" }}
          >
            <Tooltip title="Espace Utilisateur">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Avatar" />
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
              onClose={handleCloseUserMenu}
            >
              <MenuItem onClick={handleLinkUser}>
                <Typography textAlign="center" variant="h6" sx={{ p: 2 }}>
                  Mon Profil
                </Typography>
              </MenuItem>
              <MenuItem onClick={handleLinkFAQ}>
                <Typography textAlign="center" variant="h6" sx={{ p: 2 }}>
                  FAQ
                </Typography>
              </MenuItem>
              <MenuItem onClick={handleLinkLogout}>
                <Typography textAlign="center" variant="h6" sx={{ p: 2 }}>
                  Logout
                </Typography>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
