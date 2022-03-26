import React from "react";
import { Typography, Box, Grid } from "@mui/material";
import Dummy from "../../assets/dummyFood.png";
import { useStyles } from "./Style";
import Card from "../../components/CustomCard";
import { data } from "../../DummyData/Data";

const EducationPage = () => {
  const classes = useStyles();
  const DummyData = data;

  return (
    <Box className={classes.container}>
      <Typography variant="title">
        Discover more about <br />
        <Box className={classes.boldText}> food waste</Box>
      </Typography>
      <Grid container sx={{ width: "70%", mx: "auto" }} justifyContent="center">
        {DummyData.map((data, i) => (
          <Grid item lg={4}>
            <Card
              key={i}
              date={data.date}
              useImage
              img={Dummy}
              bold
              content={data.content}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default EducationPage;
