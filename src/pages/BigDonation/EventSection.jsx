import { Stack, Typography, Grid } from '@mui/material';
import { Box, width } from '@mui/system';
import React from 'react';
import heartGroup from '../../assets/bigDonation/heart-group.svg';
import orphanage from '../../assets/bigDonation/orphanage.png';

const EventSection = ({ classes }) => {
  return (
    <Grid container spacing={3} alignItems="center" justifyContent="center">
      <Grid
        item
        sm={12}
        sx={{ display: 'flex', justifyContent: 'center' }}
        p={3}
        pb={0}
      >
        <Typography
          sx={{
            fontWeight: 'bold',
          }}
          variant="h4"
          textAlign="center"
          color="text.primary"
        >
          Our Orphanage
        </Typography>
      </Grid>
      <Grid
        item
        xs={12}
        md={8}
        sx={{
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
        }}
        p={3}
      >
        <Typography
          mb={1}
          sx={{ fontWeight: 500, textDecoration: 'underline' }}
          variant="h5"
          color="text.secondary"
        >
          Our Family Orphanage
        </Typography>
        <Typography variant="h5" color="text.primary">
          Our Family Orphanage is a big orphanage and our partner in this month
          for Big Donation Program. This oprhanage accommodates{' '}
          <Box className={classes.boldText}>45 children</Box>. The orphanage
          located in Maluku St.
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
        <img className={classes.image} src={orphanage} alt="" srcset="" />
      </Grid>
    </Grid>
  );
};

export default EventSection;
