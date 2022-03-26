import React from 'react';
import { Button, Grid, Stack, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import formSurvey from '../../assets/bigDonation/form-survey.svg';

const BigDonationForm = () => {
  return (
    <Stack spacing={2} p={5}>
      <Typography variant="h1" color="text.primary">
        Let's fill the form!
      </Typography>
      <Grid component="form" container alignItems="center">
        <Grid sm={6}>
          <Grid container spacing={2} justifyContent={{xs:"center", sm:"flex-start"}}>
            <Grid item sm={3}>
              <TextField
                id="outlined-basic"
                label="Name"
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid item sm={6}>
              <TextField
                id="outlined-basic"
                label="Address"
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid item sm={4}>
              <TextField
                id="outlined-basic"
                label="Phone Number"
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid item sm={3}>
              <TextField
                id="outlined-basic"
                label="Amount(kg)"
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid item sm={12}>
              <TextField
                multiline
                minRows={4}
                id="outlined-basic"
                label="Description"
                variant="outlined"
                fullWidth
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid
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
          <Button variant="contained" color="primary" fullWidth>
            Submit
          </Button>
        </Grid>
      </Grid>
    </Stack>
  );
};

export default BigDonationForm;
