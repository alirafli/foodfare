import React from "react";
import { Stack, Typography, Grid } from "@mui/material";
import { Box, width } from "@mui/system";
import formSurvey from "../../../assets/bigDonation/form-survey.svg";
import deliverFood from "../../../assets/bigDonation/deliver-food.svg";
import foodTaken from "../../../assets/bigDonation/food-taken.svg";
import Step from "./Step";
import CustomButton from "../../../components/CustomButton";
import { Link } from "react-router-dom";

const HowSection = ({ classes }) => {
  return (
    <Grid container spacing={3} alignItems="center" justifyContent="center">
      <Grid
        item
        sm={12}
        sx={{ display: "flex", justifyContent: "center" }}
        p={3}
      >
        <Typography
          sx={{
            fontWeight: "bold",
          }}
          variant="h2"
          textAlign="center"
          color="text.primary"
        >
          How to Donate?
        </Typography>
      </Grid>
      <Step
        image={formSurvey}
        title="Fill the form"
        description="First, you must fill the formation requested in the form"
        classes={classes}
      />
      <Step
        image={deliverFood}
        title="Take the food"
        description="Second, we will take your food from the location you reequest."
        classes={classes}
      />
      <Step
        image={foodTaken}
        title="Deliver Food"
        description="Third, we will deliver your food to the orphanage "
        classes={classes}
      />
      {/* Change the button */}
      <Grid item xs={8}>
        <Link to="/donation/form" style={{ textDecoration: "none" }}>
          <CustomButton content="Donate Now" fullWidth />
        </Link>
      </Grid>
    </Grid>
  );
};

export default HowSection;
