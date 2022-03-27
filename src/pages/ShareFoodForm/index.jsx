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
  address: yup.string('Enter your address').required('address is required'),
  phone: yup
    .string('Enter your phone number')
    .required('phone number is required'),
  amount: yup
    .number('Enter your description')
    .min(1, 'donation minimum is 1')
    .required('description is required'),
  description: yup
    .string('Enter your description')
    .required('description is required'),
});

const ShareFoodForm = () => {
  const [user, loading, error] = useAuthState(auth);

  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      address: '',
      phone: '',
      amount: 0,
      description: '',
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      const { address, phone, amount, description } = values;
      const response = await createBigDonation(
        description,
        address,
        phone,
        'test',
        'name',
        '1243123'
      );
      console.log(response);
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
                sx={{ borderRadius: 20 }}
                id="name"
                label="Title"
                variant="outlined"
                onChange={formik.handleChange}
                fullWidth
              />
            </Grid>
            <Grid item sm={6}>
              <TextField
                id="location"
                label="Location"
                variant="outlined"
                onChange={formik.handleChange}
                value={formik.values.address}
                error={formik.touched.address && Boolean(formik.errors.address)}
                helperText={formik.touched.address && formik.errors.address}
                fullWidth
              />
            </Grid>
            <Grid item sm={6}>
              <TextField
                id="bought"
                label="Bought Date"
                variant="outlined"
                onChange={formik.handleChange}
                value={formik.values.address}
                error={formik.touched.address && Boolean(formik.errors.address)}
                helperText={formik.touched.address && formik.errors.address}
                fullWidth
              />
            </Grid>
            <Grid item sm={6}>
              <TextField
                id="expired"
                label="Expired Date"
                variant="outlined"
                onChange={formik.handleChange}
                value={formik.values.phone}
                error={formik.touched.phone && Boolean(formik.errors.phone)}
                helperText={formik.touched.phone && formik.errors.phone}
                fullWidth
              />
            </Grid>
            <Grid item sm={6}>
              <TextField
                id="condition"
                label="Condition"
                variant="outlined"
                onChange={formik.handleChange}
                value={formik.values.amount}
                error={formik.touched.amount && Boolean(formik.errors.amount)}
                helperText={formik.touched.amount && formik.errors.amount}
                fullWidth
              />
            </Grid>
            <Grid item sm={6}>
              <TextField
                id="pickup"
                label="Pick Up Time"
                variant="outlined"
                onChange={formik.handleChange}
                value={formik.values.description}
                error={
                  formik.touched.description &&
                  Boolean(formik.errors.description)
                }
                helperText={
                  formik.touched.description && formik.errors.description
                }
                fullWidth
              />
            </Grid>
            <Grid item sm={6}>
              <TextField
                id="condition"
                multiline
                label="Caption"
                minRows={4}
                variant="outlined"
                onChange={formik.handleChange}
                value={formik.values.amount}
                error={formik.touched.amount && Boolean(formik.errors.amount)}
                helperText={formik.touched.amount && formik.errors.amount}
                fullWidth
              />
            </Grid>
            <Grid item sm={6}>
              <TextField
                id="condition"
                multiline
                label="Caption"
                minRows={4}
                variant="outlined"
                onChange={formik.handleChange}
                value={formik.values.amount}
                error={formik.touched.amount && Boolean(formik.errors.amount)}
                helperText={formik.touched.amount && formik.errors.amount}
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
