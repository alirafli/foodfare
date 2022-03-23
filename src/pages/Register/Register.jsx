import React from "react";
import { Link } from "react-router-dom";
import { Typography, Stack, Box, Grid } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import { useFormik } from "formik";
import * as yup from "yup";
import FieldInput from "../../components/FieldInput";
import Button from "../../components/CustomButton";
import Jumbotron from "../../assets/registerPage.svg";
import { useStyles } from "./RegisterStyle";

const validationSchema = yup.object({
  name: yup.string("Enter your name").required("Your name is required"),
  email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string("Enter your password")
    .min(8, "Password should be of minimum 8 characters length")
    .required("Password is required"),
  changepassword: yup.string().when("password", {
    is: (val) => (val && val.length > 0 ? true : false),
    then: yup
      .string()
      .oneOf([yup.ref("password")], "Both password need to be the same"),
  }),
});

const Register = () => {
  const classes = useStyles();
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      changepassword: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <Grid container>
      <Grid
        item
        lg={5}
        sm={5}
        xs={12}
        sx={{
          bgcolor: "primary.main",
          px: { sm: 5, xs: 5, lg: 10 },
          py: { xs: 5, lg: 10, sm: 5 },
          height: { xs: "100vh" },
        }}
      >
        <Box>
          <Typography variant="h1" sx={{ color: "#fff", mb: 1 }}>
            Register
          </Typography>
          <Stack>
            <Box>
              <form onSubmit={formik.handleSubmit}>
                <FieldInput
                  id="name"
                  placeHolder="Name"
                  fullWidth
                  human
                  onChange={formik.handleChange}
                  error={formik.touched.name && Boolean(formik.errors.name)}
                  helperText={formik.touched.name && formik.errors.name}
                />
                <FieldInput
                  id="email"
                  placeHolder="Email"
                  fullWidth
                  onChange={formik.handleChange}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  helperText={formik.touched.email && formik.errors.email}
                />
                <FieldInput
                  id="password"
                  placeHolder="Password"
                  fullWidth
                  password
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.password && Boolean(formik.errors.password)
                  }
                  helperText={formik.touched.password && formik.errors.password}
                />
                <FieldInput
                  id="changepassword"
                  placeHolder="Confirm Password"
                  fullWidth
                  password
                  value={formik.values.changepassword}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.password &&
                    Boolean(formik.errors.changepassword)
                  }
                  helperText={
                    formik.touched.password && formik.errors.changepassword
                  }
                />
                <Button fullWidth type="submit" content="Sign Up" />
              </form>
            </Box>
            <Grid container alignItems="center" justifyContent="center">
              <Grid item lg={3} sm={3} xs={3}>
                <hr className={classes.hrStyle} />
              </Grid>
              <Grid item lg={4} sm={4} xs={4}>
                <Typography
                  variant="h2"
                  sx={{ color: "#fff", m: 1 }}
                  align="center"
                >
                  Or
                </Typography>
              </Grid>
              <Grid item lg={3} sm={3} xs={3}>
                <hr className={classes.hrStyle} />
              </Grid>
            </Grid>
            <Link to="/login" style={{ textDecoration: "none" }}>
              <Button content="Log In" secondary variant="outlined" fullWidth />
            </Link>
            <Button
              content="Login with Google"
              secondary
              variant="outlined"
              endIcon={<GoogleIcon />}
            />
          </Stack>
        </Box>
      </Grid>
      <Grid
        item
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

export default Register;
