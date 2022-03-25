import { Box, Grid, Stack, Typography } from '@mui/material';
import React from 'react';
import DescriptionSection from './DescriptionSection';
import EventSection from './EventSection';
import HowSection from './HowSection/HowSection';
import { useStyles } from './style';
import TitleSection from './TitleSection';

const BigDonation = () => {
  const classes = useStyles();
  return (
    <Box
      sx={{
        padding: '20px',
        px:{sm: 12, xs: 6},
      }}
    >
      <Stack
      spacing={8}
      >
        <Box>
          <TitleSection classes={classes}/>
        </Box>
        <Box>
          <DescriptionSection classes={classes} />
        </Box>
        <Box>
          <EventSection classes={classes} />
        </Box>
        <Box>
          <HowSection classes={classes} />
        </Box>
      </Stack>
    </Box>
  );
};

export default BigDonation;
