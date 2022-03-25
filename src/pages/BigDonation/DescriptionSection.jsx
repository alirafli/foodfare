import { Stack, Typography, Grid } from '@mui/material';
import { Box, width } from '@mui/system';
import React from 'react';
import heartGroup from '../../assets/bigDonation/heart-group.svg';

const DescriptionSection = ({classes}) => {
  return (
    <Grid container spacing={3} alignItems="center" justifyContent="center">
      <Grid
        item
        sm={12}
        sx={{ display: 'flex', justifyContent: 'center' }}
        p={3}
      >
        <Typography
          sx={{
            borderBottom: '1px solid',
            borderColor: 'primary.dark',
            width: { xs: '100%', sm: '50%' },
          }}
          variant="h1"
          textAlign="center"
          color="text.primary"
        >
          Big Donation Program
        </Typography>
      </Grid>
      <Grid
        item
        xs={12}
        md={4}
        sx={{
          display: 'flex',
          justifyContent: { sm: 'center', md: 'flex-start' },
        }}
        p={3}
      >
        <img className={classes.image} src={heartGroup} alt="" srcset="" />
      </Grid>
      <Grid
        item
        xs={12}
        md={8}
        sx={{ display: 'flex', justifyContent: 'center' }}
        p={3}
      >
        <Typography variant="h5" color="text.primary">
          Big donation is a program from foodfare where users can donate food in
          large quantities. Users can also get points from the donation. This
          points will be collected and users can get a medals based on their
          points.
        </Typography>
      </Grid>
    </Grid>
  );
};

export default DescriptionSection;
