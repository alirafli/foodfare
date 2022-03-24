import { Stack, Typography, Grid } from '@mui/material';
import { Box, width } from '@mui/system';
import React from 'react';
import heartGroup from '../../assets/bigDonation/heart-group.svg';

const DescriptionSection = () => {
  return (
    <Stack alignItems="center">
      <Typography
        sx={{
          borderBottom: '1px solid',
          borderColor: 'primary.dark',
          width: { xs: '100%', sm: '50%' },
          //   fontSize: {xs: 30, sm: 36}
        }}
        variant="h1"
        textAlign="center"
        color="text.primary"
      >
        Big Donation Program
      </Typography>
      <Grid container spacing={1} direction="row" wrap="nowrap" alignItems="center">
        <Grid item md={3}>
          <img src={heartGroup} alt="" srcset="" />
        </Grid>
        <Grid item md={9}>
          <Typography variant="h5" color="text.primary">
            Big donation is a program from foodfare where users can donate food
            in large quantities. Users can also get points from the donation.
            This points will be collected and users can get a medals based on
            their points.
          </Typography>
        </Grid>
      </Grid>
    </Stack>
  );
};

export default DescriptionSection;
