import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "../../components/CustomButton";
import LOGO from "../../assets/navbarLogo.svg";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../firebase/init";
import { logout } from "../../firebase/auth";
import Menu from "@mui/material/Menu";

const pagesUser = [
  { root: "Share", link: "/share-food" },
  { root: "donate", link: "/donation" },
  { root: "Article", link: "/education" },
  { root: "About Us", link: "/" },
];

const Navbar = () => {
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  const handler = async () => {
    const response = await logout();
    navigate("/login", { replace: true });
  };
  // console.log(user, loading, error);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{ backgroundColor: "#fff" }}>
        <Toolbar>
          <Box sx={{ flexGrow: 1 }}>
            <Link to="/">
              <img src={LOGO} alt="" />
            </Link>
          </Box>
          {user ? (
            <Box
              sx={{
                display: "flex",
                justifyConten: "center",
                alignItems: "center",
              }}
            >
              {pagesUser.map((page) => (
                <Box key={page}>
                  <Link to={page.link} style={{ textDecoration: "none" }}>
                    <Typography variant="h3" color="text.secondary" px={2}>
                      {page.root}
                    </Typography>
                  </Link>
                </Box>
              ))}
              <Button onClick={handler} content="Log Out" />
            </Box>
          ) : (
            <Box sx={{ display: "flex" }}>
              <Link
                style={{ margin: "0 2rem 0 2rem", textDecoration: "none" }}
                to="/register"
              >
                <Button content="Sign Up" fullWidth />
              </Link>
              <Link
                style={{ margin: "0 2rem 0 2rem", textDecoration: "none" }}
                to="/login"
              >
                <Button content="Login" fullWidth />
              </Link>
            </Box>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
