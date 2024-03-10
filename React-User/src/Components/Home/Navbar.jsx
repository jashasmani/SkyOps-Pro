import * as React from "react";
import PropTypes from "prop-types";

import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import Drawer from "@mui/material/Drawer";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

function AppAppBar({ mode, toggleColorMode }) {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const scrollToSection = (sectionId) => {
    const sectionElement = document.getElementById(sectionId);
    const offset = 128;
    if (sectionElement) {
      const targetScroll = sectionElement.offsetTop - offset;
      sectionElement.scrollIntoView({ behavior: "smooth" });
      window.scrollTo({
        top: targetScroll,
        behavior: "smooth",
      });
      setOpen(false);
    }
  };

  return (
    <div>
      <AppBar
        position="fixed"
        sx={{
          boxShadow: 0,
          bgcolor: "transparent",
          backgroundImage: "none",
          mt: 2,
          width: "100%",
        }}
      >
        <Container maxWidth="100%">
          <Toolbar
            variant="regular"
            sx={(theme) => ({
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexShrink: 0,
              borderRadius: "0.5rem",
              bgcolor: "rgba(255, 255, 255, 0.4)",
              backdropFilter: "blur(24px)",
              maxHeight: 40,
              border: "1px solid",
              borderColor: "divider",
              boxShadow: `0 0 1px rgba(85, 166, 246, 0.1), 1px 1.5px 2px -1px rgba(85, 166, 246, 0.15), 4px 4px 12px -2.5px rgba(85, 166, 246, 0.15)`,
            })}
          >
            <Box
              sx={{
                flexGrow: 1,
                display: "flex",
                alignItems: "center",
                ml: "-18px",

                px: 0,
              }}
            >
              <h3 className="text-white mx-3">SkyOps Pro</h3>
              <Box sx={{ display: { xs: "none", md: "flex" } }}>
                <Link to="/">
                  <MenuItem
                    onClick={() => scrollToSection("featuredpost")}
                    sx={{ py: "6px", px: "12px" }}
                  >
                    <Typography variant="body2" color="text.primary">
                      Home
                    </Typography>
                  </MenuItem>
                </Link>
                <MenuItem
                  //   onClick={() => scrollToSection('testimonials')}
                  onClick={() => scrollToSection("testimonials")}
                  sx={{ py: "6px", px: "12px" }}
                >
                  <Typography variant="body2" color="text.primary">
                    Reviews
                  </Typography>
                </MenuItem>
                <Link
                  to="/finaldata"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <MenuItem
                    onClick={() => {
                      scrollToSection("highlights");
                    }}
                    sx={{ py: "6px", px: "12px" }}
                  >
                    <Typography variant="body2" color="text.primary">
                      Bookings
                    </Typography>
                  </MenuItem>
                </Link>
              </Box>
            </Box>
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                gap: 0.5,
                alignItems: "center",
              }}
            >
              <Button
                style={{ color: "white" }}
                variant="text"
                size="small"
                component="a"
                href="/signup"
                onClick={() =>
                  localStorage.setItem("id", '')
                }
              >
                Log Out
              </Button>
              <Button
                className="text-primary"
                style={{ background: "white" }}
                variant="contained"
                size="small"
                component="a"
                href="/signup"
                
              >
                Sign up
              </Button>
            </Box>
            <Box sx={{ display: { sm: "", md: "none" } }}>
              <Button
                variant="text"
                color="primary"
                aria-label="menu"
                onClick={toggleDrawer(true)}
                sx={{ minWidth: "30px", p: "4px" }}
              >
                <MenuIcon />
              </Button>
              <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
                <Box
                  sx={{
                    minWidth: "60dvw",
                    p: 2,
                    backgroundColor: "background.paper",
                    flexGrow: 1,
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "end",
                      flexGrow: 1,
                    }}
                  >
                    {/* <ToggleColorMode mode={mode} toggleColorMode={toggleColorMode} /> */}
                  </Box>

                  <Link to="/">
                    <MenuItem onClick={() => scrollToSection("testimonials")}>
                      Home
                    </MenuItem>
                  </Link>
                  <Link to="">
                    <MenuItem onClick={() => scrollToSection("highlights")}>
                      Reviews
                    </MenuItem>
                  </Link>
                  <Link to="/booking">
                    <MenuItem onClick={() => scrollToSection("pricing")}>
                      Bookings
                    </MenuItem>
                  </Link>
                  {/* <Link to=''>
                    <MenuItem onClick={() => scrollToSection("faq")}>
                      FAQ
                    </MenuItem>E
                  </Link> */}
                  <Divider />
                  <MenuItem>
                    <Button
                      color="primary"
                      variant="contained"
                      component="a"
                      href="/signup"
                      onClick={() =>
                        localStorage.setItem("id", '')
                      }
                      sx={{ width: "100%" }}
                    >
                      Log Out
                    </Button>
                  </MenuItem>
                  <MenuItem>
                    <Button
                      color="primary"
                      variant="outlined"
                      component="a"
                      href="/signup"
                      sx={{ width: "100%" }}
                    >
                      Sign in
                    </Button>
                  </MenuItem>
                </Box>
              </Drawer>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}

AppAppBar.defaultProps = {
  mode: "light", // Default value for mode
};

AppAppBar.propTypes = {
  mode: PropTypes.oneOf(["dark", "light"]), // Remove isRequired
  toggleColorMode: PropTypes.func.isRequired,
};

export default AppAppBar;
