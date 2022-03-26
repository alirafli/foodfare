import React from "react";
import { Typography, Box, Grid } from "@mui/material";
import Button from "../../components/CustomButton";

import PHOTO from "../../assets/landingpage.svg";

const Landingpage = ({ classes }) => {
  return (
    <Grid
      container
      alignItems="center"
      justifyContent="center"
      sx={{
        minHeight: "100vh",
        flexDirection: {
          lg: "row",
          sm: "column-reverse",
          xs: "column-reverse",
        },
      }}
    >
      <Grid item lg={6}>
        <Typography variant="title">
          <Box className={classes.boldText}>Share</Box> it, <br /> Don't
          <Box className={classes.boldText}> waste </Box>
          it <br />
        </Typography>
        <Button content="Get Started" size="large" ternary />
      </Grid>
      <Grid>
        <img className={classes.Landingpage} src={PHOTO} alt="Landingpage" />
      </Grid>
    </Grid>
  );
};

export default Landingpage;
