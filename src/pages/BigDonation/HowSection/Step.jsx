import { Grid, Stack, Typography } from '@mui/material';
import React from 'react';

const Step = ({ image, title, description, classes }) => {
  return (
    <Grid
      sx={{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
      }}
      md={4}
      item
    >
      <img className={classes.step} src={image} alt="" srcset="" />
      <Typography textAlign="center" variant="h2" color="text.primary">
        {title}
      </Typography>
      <Typography textAlign="center" variant="h6" color="text.primary">
        {description}
      </Typography>
    </Grid>
  );
};

export default Step;
