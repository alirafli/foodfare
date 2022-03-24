import { Box, Grid, Stack, Typography } from '@mui/material';
import React from 'react';
import DescriptionSection from './DescriptionSection';
import { useStyles } from './style';
import TitleSection from './TitleSection';

const BigDonation = () => {
  const classes = useStyles();
  return (
    <Stack
      sx={{
        padding: '20px',
        paddingLeft: 12,
        paddingRight: 12,
      }}
      spacing={10}
    >
      <TitleSection classes={classes}/>
      <DescriptionSection classes={classes} />
    </Stack>
  );
};

export default BigDonation;
