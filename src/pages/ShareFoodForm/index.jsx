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

const validationSchema = yup.object({
  address: yup.string('Enter your address').required('address is required'),
  phone: yup
    .string('Enter your phone number')
    .required('phone number is required'),
  amount: yup
    .number('Enter your description')
    .min(1, "donation minimum is 1")
    .required('description is required'),
  description: yup
    .string('Enter your description')
    .required('description is required'),
});

const ShareFoodForm = () => {
  const [user, loading, error] = useAuthState(auth);
  
  const formik = useFormik({
    initialValues: {
      address: '',
      phone: '',
      amount: 0,
      description: '',
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      const {address, phone, amount, description} = values;
      const response = await createBigDonation(description, address, phone, "test", 'name', '1243123')
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
        <Grid item sm={6}>
          <Grid
            container
            spacing={2}
            justifyContent={{ xs: 'center', sm: 'flex-start' }}
          >
            <Grid item sm={3}>
              <TextField
                id="name"
                label="Name"
                variant="outlined"
                onChange={formik.handleChange}
                fullWidth
              />
            </Grid>
            <Grid item sm={6}>
              <TextField
                id="address"
                label="Address"
                variant="outlined"
                onChange={formik.handleChange}
                value={formik.values.address}
                error={formik.touched.address && Boolean(formik.errors.address)}
                helperText={formik.touched.address && formik.errors.address}
                fullWidth
              />
            </Grid>
            <Grid item sm={4}>
              <TextField
                id="phone"
                label="Phone Number"
                variant="outlined"
                onChange={formik.handleChange}
                value={formik.values.phone}
                error={formik.touched.phone && Boolean(formik.errors.phone)}
                helperText={formik.touched.phone && formik.errors.phone}
                fullWidth
              />
            </Grid>
            <Grid item sm={3}>
              <TextField
                id="amount"
                label="Amount(kg)"
                variant="outlined"
                type="number"
                inputProps={{
                  inputMode: 'numeric',
                }}
                onChange={formik.handleChange}
                value={formik.values.amount}
                error={formik.touched.amount && Boolean(formik.errors.amount)}
                helperText={formik.touched.amount && formik.errors.amount}
                fullWidth
              />
            </Grid>
            <Grid item sm={12}>
              <TextField
                id="description"
                multiline
                minRows={4}
                label="Description"
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
          </Grid>
        </Grid>
        <Grid
          item
          sx={{
            display: 'flex',
            justifyContent: { xs: 'center', sm: 'flex-end' },
          }}
          xs={12}
          sm={6}
        >
          <img style={{ width: '70%' }} src={formSurvey} alt="" />
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" color="primary" fullWidth type="submit">
            Submit
          </Button>
        </Grid>
      </Grid>
    </Stack>
  );
};

export default ShareFoodForm;
