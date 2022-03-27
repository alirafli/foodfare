import React, { useEffect, useState } from 'react';
import { getSharefoods, getSharefoodsPhotos } from '../../firebase/api/shareFood';
import Grid from '@mui/material/Grid';

const ShareFood = () => {
  const [food, setFood] = useState([]);
  useEffect(async () => {
    const response = await getSharefoods();
    const photo= await getSharefoodsPhotos(response);
    console.log(response);
    setFood(response);
  }, []);

  return (
    <Grid container spacing={2} direction="row" wrap="nowrap">
      {food.map((value, index) => {
        return (
          <Grid sm={4} item key={index}>
            test
          </Grid>
        );
      })}
    </Grid>
  );
};

export default ShareFood;
