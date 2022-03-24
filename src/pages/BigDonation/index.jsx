import { Box, Grid, Stack, Typography } from '@mui/material';
import React from 'react';
import DescriptionSection from './DescriptionSection';
import { useStyles } from './style';
import TitleSection from './TitleSection';

const BigDonation = () => {
  const classes = useStyles();
  return (
    <Box
      sx={{
        padding: '20px',
        px:12,
      }}
    >
      <Stack
      spacing={4}
      >
        <Box>
          <TitleSection classes={classes}/>
        </Box>
        {/* <TitleSection classes={classes}/> */}
        <Box>
          <DescriptionSection classes={classes} />
        </Box>
      </Stack>
    </Box>
  );
};

export default BigDonation;
