import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  useTheme,
  Container,
  CssBaseline,
} from "@mui/material";
import { Link } from "react-scroll";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import zealous from "../Images/Zealous.png";

function Navigation() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setDrawerOpen(false); // Close the drawer after clicking on the logo
  };

  const navLinks = [
    { to: "home-section", label: "Home" },
    { to: "about-section", label: "About" },
    { to: "services-section", label: "Services" },
    { to: "training-section", label: "Technology" },
    { to: "campus-section", label: "Campus" },
    { to: "clients-section", label: "Clients" },
    { to: "contacts-section", label: "Contact" },
  ];

  const renderNavLinks = () => (
    <>
      {navLinks.map((link, index) => (
        <Link
          key={index}
          to={link.to}
          duration={1000}
          className="nav-link"
          style={{ cursor: "pointer", color: "#0c83c8" }}
          spy={true}
          smooth={true}
          onClick={() => setDrawerOpen(false)} // Close drawer when a link is clicked
        >
          {link.label} &nbsp;
        </Link>
      ))}
    </>
  );

  return (
    <>
      <CssBaseline /> {/* Ensures a baseline CSS normalization */}
      <AppBar
        position="fixed"
        className="custom-navbar"
        sx={{ backgroundColor: "#ffffff", zIndex: theme.zIndex.drawer + 1 }}
      >
        <Container maxWidth="lg">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <img
                src={zealous}
                onClick={scrollToTop}
                style={{ cursor: "pointer", maxHeight: 50 }}
                alt="Zealous Logo"
              />
            </Typography>

            {isMobile ? (
              <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={handleDrawerToggle}
                sx={{ color: "#0c83c8" }}
              >
                {drawerOpen ? <CloseIcon /> : <MenuIcon />}
              </IconButton>
            ) : (
              <div>{renderNavLinks()}</div>
            )}
          </Toolbar>
        </Container>
      </AppBar>
      {/* Drawer for mobile */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        sx={{
          "& .MuiDrawer-paper": { backgroundColor: "#0c83c8", width: 250 },
        }}
      >
        <div
          style={{
            width: 250,
            paddingTop: "64px", // Adjusted for the height of the AppBar
          }}
        >
          <List>
            {navLinks.map((link, index) => (
              <Link
                key={index}
                to={link.to}
                duration={2000}
                className="nav-link"
                style={{ cursor: "pointer", color: "#ffffff" }}
                spy={true}
                smooth={true}
                onClick={() => setDrawerOpen(false)} // Close drawer when a link is clicked
              >
                <ListItem button sx={{ color: "#ffffff", cursor: "pointer" }}>
                  <ListItemText primary={link.label} />
                </ListItem>
              </Link>
            ))}
          </List>
        </div>
      </Drawer>
      {/* Spacer to prevent content overlap */}
      <Toolbar /> {/* Ensures content below AppBar */}
    </>
  );
}

export default Navigation;
