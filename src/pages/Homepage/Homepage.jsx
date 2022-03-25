import React from "react";
import { Box } from "@mui/material";
import Landingpage from "./Landingpage";
import Features from "./Features";
import SearchPage from "./SearchPage";
import { useStyles } from "./Style";

const Homepage = () => {
  const classes = useStyles();

  return (
    <Box
      sx={{
        padding: "20px",
        px: { sm: 12, xs: 6 },
      }}
    >
      <Landingpage classes={classes} />
      <Features classes={classes} />
      <SearchPage classes={classes} />
    </Box>
  );
};

export default Homepage;
