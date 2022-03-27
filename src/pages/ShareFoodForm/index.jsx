import React from 'react';
import {
  Button,
  Grid,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { Box } from '@mui/system';
import formSurvey from '../../assets/bigDonation/form-survey.svg';
import * as yup from 'yup';
import { useFormik } from 'formik';
import { createBigDonation } from '../../firebase/api/bigDonation';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase/init';
import { useSnackbar } from 'notistack';
import { useNavigate } from 'react-router-dom';

const validationSchema = yup.object({
  title: yup
  .string('Enter your title')
  .required('title is required'),
  location: yup
    .string('Enter your location')
    .required('location is required'),
  bought: yup
    .string('Enter your bought')
    .required('bought is required'),
  expired: yup
    .string('Enter your expired')
    .required('expired is required'),
  condition: yup
    .string('Enter your condition')
    .required('condition is required'),
  pickup: yup
    .string('Enter your pickup')
    .required('pickup is required'),
  caption: yup
    .string('Enter your caption')
    .required('caption is required'),

});

const ShareFoodForm = () => {
  const [user, loading, error] = useAuthState(auth);

  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      title: '',
      location: '',
      bought: '',
      expired: '',
      condition: '',
      pickup: '',
      caption: '',
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      console.log(values);
    },
  });

  return (
    <Stack spacing={2} p={5}>
      <Typography variant="h1" color="text.primary">
        Let's fill the form!
      </Typography>
      <Grid
        component="form"
        container
        alignItems="center"
        onSubmit={formik.handleSubmit}
      >
        <Grid item sm={12}>
          <Grid
            container
            spacing={2}
            justifyContent={{ xs: 'center', sm: 'flex-start' }}
          >
            <Grid item sm={6}>
              <TextField
                id="title"
                label="Title"
                variant="outlined"
                onChange={formik.handleChange}
                value={formik.values.title}
                error={formik.touched.title && Boolean(formik.errors.title)}
                helperText={formik.touched.title && formik.errors.title}
                fullWidth
              />
            </Grid>
            <Grid item sm={6}>
              <TextField
                id="location"
                label="Location"
                variant="outlined"
                onChange={formik.handleChange}
                value={formik.values.location}
                error={formik.touched.location && Boolean(formik.errors.location)}
                helperText={formik.touched.location && formik.errors.location}
                fullWidth
              />
            </Grid>
            <Grid item sm={6}>
              <TextField
                id="bought"
                label="Bought Date"
                variant="outlined"
                onChange={formik.handleChange}
                value={formik.values.bought}
                error={formik.touched.bought && Boolean(formik.errors.bought)}
                helperText={formik.touched.bought && formik.errors.bought}
                fullWidth
              />
            </Grid>
            <Grid item sm={6}>
              <TextField
                id="expired"
                label="Expired Date"
                variant="outlined"
                onChange={formik.handleChange}
                value={formik.values.expired}
                error={formik.touched.expired && Boolean(formik.errors.expired)}
                helperText={formik.touched.expired && formik.errors.expired}
                fullWidth
              />
            </Grid>
            <Grid item sm={6}>
              <TextField
                id="condition"
                label="Condition"
                variant="outlined"
                onChange={formik.handleChange}
                value={formik.values.condition}
                error={formik.touched.condition && Boolean(formik.errors.condition)}
                helperText={formik.touched.condition && formik.errors.condition}
                fullWidth
              />
            </Grid>
            <Grid item sm={6}>
              <TextField
                id="pickup"
                label="Pick Up Time"
                variant="outlined"
                onChange={formik.handleChange}
                value={formik.values.pickup}
                error={formik.touched.pickup && Boolean(formik.errors.pickup)}
                helperText={formik.touched.pickup && formik.errors.pickup}
                fullWidth
              />
            </Grid>
            <Grid item sm={6}>
              <TextField
                id="caption"
                multiline
                label="Caption"
                minRows={4}
                variant="outlined"
                onChange={formik.handleChange}
                value={formik.values.caption}
                error={formik.touched.caption && Boolean(formik.errors.caption)}
                helperText={formik.touched.caption && formik.errors.caption}
                fullWidth
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid mt={5} item xs={12}>
          <Button variant="contained" color="primary" fullWidth type="submit">
            Submit
          </Button>
        </Grid>
      </Grid>
    </Stack>
  );
};

export default ShareFoodForm;
