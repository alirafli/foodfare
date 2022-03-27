import React from "react";
import Card from "../../components/CustomCard";
import Button from "../../components/CustomButton";
import { Typography, Box, Grid } from "@mui/material";

import Dummy from "../../assets/dummyFood.png";
import { Link } from "react-router-dom";

const SearchPage = ({ classes }) => {
  return (
    <Grid
      container
      alignItems="center"
      justifyContent="center"
      sx={{
        minHeight: "90vh",
        flexDirection: {
          lg: "row",
          sm: "column-reverse",
          xs: "column-reverse",
        },
      }}
    >
      <Grid item lg={5}>
        <Card
          date="March, 9 2022"
          useImage
          img={Dummy}
          bold
          content="How to manage food waste effectively"
        />
      </Grid>
      <Grid item lg={7}>
        <Typography variant="title">
          Discover more about
          <Box className={classes.boldText}> food waste</Box>
        </Typography>
        <br />
        <Link to="/education" style={{ textDecoration: "none" }}>
          <Button content="Discovered" size="large" ternary />
        </Link>
      </Grid>
    </Grid>
  );
};

export default SearchPage;
