import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "../../components/CustomButton";
import LOGO from "../../assets/navbarLogo.svg";
const pagesUser = ["Share", "Donate", "Article", "About Us"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

const Navbar = () => {
  // const [user, loading, error] = useAuthState(auth);
  // console.log(user, loading, error)
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{backgroundColor: "#fff"}}>
        <Toolbar>
          <Box sx={{ flexGrow: 1 }}>
            <img src={LOGO} alt="" />
          </Box>
          <Box sx={{ mx: 1 }}>
            <Button content="Sign Up" fullWidth />
          </Box>
          <Box sx={{ mx: 1 }}>
            <Button content="Login" fullWidth />
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
