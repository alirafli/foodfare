import React from "react";
import { Typography, Box, Grid } from "@mui/material";
import Card from "../../components/CustomCard";

import JUMBOTRON from "../../assets/jumbotron2.png";
import SHARE from "../../assets/share.svg";
import DONATE from "../../assets/donate.svg";

const Features = ({ classes }) => {
  return (
    <Box sx={{ mt: 5 }}>
      <Grid
        container
        alignItems="center"
        justifyContent="center"
        sx={{
          minHeight: "100vh",
        }}
      >
        <Grid
          item
          lg={5}
          sx={{
            pr: 6,
          }}
        >
          <Typography variant="title" mb={2}>
            <Box className={classes.whiteText}>Did you </Box>
            <Box className={classes.boldText}>Know</Box>
            <Box className={classes.question}>?</Box>
          </Typography>

          <Typography variant="h3">
            According to the
            <Box className={classes.boldText}>
              {" "}
              Food Waste Ind ex Report 2021
            </Box>
            , about
            <Box className={classes.boldText}> 17% of global food </Box>
            production may go wasted, with 61% of this waste coming from
            households, 26% from food service and 13% from retail.
          </Typography>
          <Typography variant="h4">
            Courtesy of : <br /> UN Environment Programme's (UNEP)
          </Typography>
        </Grid>
        <Grid
          container
          alignItems="center"
          justifyContent="center"
          item
          lg={7}
          spacing={2}
        >
          <Card
            useBtn
            useImage
            centered
            title="Share Your Food!"
            img={SHARE}
            content="Share your food with others around you to reduce food waste"
            btnContent="Share"
          />
          <Card
            useBtn
            useImage
            centered
            title="Make a Donation!"
            img={DONATE}
            content="Participate on a larger scale by making a donation to help those
                in need"
            btnContent="Donate"
          />
        </Grid>
      </Grid>
      <Box>
        <img className={classes.jumbotron} src={JUMBOTRON} alt="Jumbotron" />
      </Box>
    </Box>
  );
};

export default Features;
