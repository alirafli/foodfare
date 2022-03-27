import React from "react";
import {
  Typography,
  Card,
  CardActions,
  CardContent,
  CardMedia,
} from "@mui/material";
import { Box } from "@mui/system";
import Button from "../CustomButton";
import MAPS from "../../assets/maps.png";
import DUMMY from "../../assets/dummyFood.png";
import Shopping from "@mui/icons-material/ShoppingBasketOutlined";
import Clock from "@mui/icons-material/AccessTimeOutlined";

const Modals = ({
  username = "user",
  title = "your title",
  buyAt = "March 5, 2022",
  image,
  expiredAt = "March 3, 2022",
  pickupTime = "6.30",
  Location,
  onClick,
}) => {
  return (
    <Box
      sx={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}
    >
      <Card sx={{ maxWidth: 300, boxShadow: 3, mx: 3, my: 3, borderRadius: 5 }}>
        <CardContent>
          <Typography variant="h1" sx={{ mb: 2 }}>
            your name
          </Typography>
          <CardMedia
            component="img"
            image={DUMMY}
            width="70%"
            alt="image"
            sx={{ borderRadius: 5, mb: 2 }}
          />
          <Typography variant="h2">{title}</Typography>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Shopping sx={{ mr: 1 }} />
            <Typography variant="h4" color="text.primary">
              {buyAt}
            </Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
            <Clock sx={{ mr: 1 }} />
            <Typography variant="h4" color="text.primary">
              {expiredAt}
            </Typography>
          </Box>
          <Box>
            <Typography variant="h2">Pick Up Times</Typography>
            <Typography variant="h4" color="text.primary" sx={{ mb: 2 }}>
              Everyday up to {pickupTime} PM
            </Typography>
            <Typography variant="h2">Pickup Location</Typography>
            <CardMedia
              component="img"
              image={MAPS}
              width="70%"
              alt="image"
              sx={{ borderRadius: 5, mb: 2 }}
            />
          </Box>
        </CardContent>
        <CardActions>
          <Button ternary content="Request" onClick={onClick} />
        </CardActions>
      </Card>
    </Box>
  );
};

export default Modals;
