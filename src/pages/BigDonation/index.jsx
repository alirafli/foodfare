import { Box, Grid, Typography } from '@mui/material';
import React from 'react';
import { useStyles } from './style';
import TitleSection from './TitleSection';

const BigDonation = () => {
  const classes = useStyles();
  return (
    <Box
      sx={{
        padding: '20px',
      }}
    >
      <TitleSection classes={classes}/>
    </Box>
  );
};

export default BigDonation;
