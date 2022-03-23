import { Box, Grid, Typography } from '@mui/material';
import React from 'react';
import donatePhone from '../../assets/bigDonation/donate-phone.svg';
import { useStyles } from './style';

const BigDonation = () => {
  const classes = useStyles();
  return (
    <Box
      sx={{
        padding: '20px',
      }}
    >
      <Grid container spacing={3} alignItems="center" justifyContent="center">
        <Grid item md={7} order={{ xs: 2, md: 1 }}>
          <Typography variant="h1" color="text.primary">
            In this <Box className={classes.boldText}>March</Box>,
          </Typography>
          <Typography variant="h1" color="text.primary">
            Let's donate food to the <Box className={classes.boldText}>orphanage</Box>!
          </Typography>
        </Grid>
        <Grid item md={5} order={{ xs: 1, md: 2 }}>
          <img src={donatePhone} alt="" srcset="" />
        </Grid>
      </Grid>
    </Box>
  );
};

export default BigDonation;
