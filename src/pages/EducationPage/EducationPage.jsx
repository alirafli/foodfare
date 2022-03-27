import React from "react";
import { Typography, Box, Grid } from "@mui/material";
import Dummy from "../../assets/dummyFood.png";
import { useStyles } from "./Style";
import Card from "../../components/CustomCard";
import { data } from "../../DummyData/Data";
import { Link } from "react-router-dom";

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
          <Grid item lg={4} key={i}>
            <Link
              key={i}
              to={`/education/details/${data.id}`}
              style={{ textDecoration: "none" }}
            >
              <Card
                date={data.date}
                useImage
                img={Dummy}
                bold
                key={i}
                content={data.content}
                id={data.id}
              />
            </Link>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default EducationPage;
