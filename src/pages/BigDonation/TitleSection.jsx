import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import donatePhone from '../../assets/bigDonation/donate-phone.svg';

const TitleSection = ({ classes }) => {
  return (
    <Grid container spacing={3} alignItems="center" justifyContent="center">
      <Grid item md={7} order={{ xs: 2, md: 1 }} p={3}>
        <Typography variant="h1" color="text.primary">
          In this <Box className={classes.boldText}>March</Box>,
        </Typography>
        <Typography variant="h2" color="text.primary">
          Let's donate food to the{' '}
          <Box className={classes.boldText}>orphanage</Box>!
        </Typography>
      </Grid>
      <Grid
        item
        sx={{ display: 'flex', justifyContent: 'center' }}
        md={5}
        order={{ xs: 1, md: 2 }}
		p={3}
      >
        <img className={classes.image} src={donatePhone} alt="" srcset="" />
      </Grid>
    </Grid>
  );
};

export default TitleSection;
