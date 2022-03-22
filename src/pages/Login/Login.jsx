import { Typography, Stack, Box, Grid } from "@mui/material";
import React from "react";
import FieldInput from "../../components/FieldInput";
import Button from "../../components/CustomButton";
import Jumbotron from "../../assets/jumbotron.png";
import { useStyles } from "./LoginStyle";

const Login = () => {
  const classes = useStyles();
  return (
    <Grid container>
      <Grid
        lg={5}
        sm={5}
        xs={12}
        sx={{ bgcolor: "primary.main", px: { sm: 5, xs: 5, lg: 10 }, py: 20 }}
      >
        <Box>
          <Typography variant="h1" sx={{ color: "#fff", mb: 1 }}>
            Login
          </Typography>
          <Stack>
            <FieldInput placeHolder={"E-Mail"} />
            <FieldInput placeHolder={"Password"} password />
            <Button content="Login" />
            <Grid container alignItems="center" justifyContent="center">
              <Grid lg={3} sm={3} xs={3}>
                <hr className={classes.hrStyle} />
              </Grid>
              <Grid lg={4} sm={4} xs={4}>
                <Typography
                  variant="h2"
                  sx={{ color: "#fff", m: 1 }}
                  align="center"
                >
                  Or
                </Typography>
              </Grid>
              <Grid lg={3} sm={3} xs={3}>
                <hr className={classes.hrStyle} />
              </Grid>
            </Grid>
            <Button content="Sign Up" secondary variant="outlined" />
            <Button content="Login with Google" secondary variant="outlined" />
          </Stack>
        </Box>
      </Grid>
      <Grid
        lg={7}
        sm={7}
        sx={{
          width: "60%",
          height: "100vh",
          display: { sm: "flex", xs: "none", lg: "flex" },
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img className={classes.jumbotron} src={Jumbotron} alt="Jumbotron" />
      </Grid>
    </Grid>
  );
};

export default Login;
