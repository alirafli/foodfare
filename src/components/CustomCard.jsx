import React from "react";
import {
  Typography,
  Card,
  CardActions,
  CardContent,
  CardMedia,
} from "@mui/material";
import Button from "./CustomButton";
import { Link } from "react-router-dom";

const CustomCard = ({
  title,
  useImage,
  centered,
  content,
  date,
  useBtn,
  bold,
  img = "defaut image",
  btnContent = "click me",
  linkTo = "/",
}) => {
  return (
    <Card
      sx={{ maxWidth: 275, boxShadow: 3, mx: 3, my: 3, borderRadius: 5 }}
      align={centered ? "center" : "left"}
    >
      <CardContent>
        <Typography variant="h2">{title}</Typography>
        {useImage && (
          <CardMedia
            component="img"
            image={img}
            width="75%"
            alt={img}
            sx={{ borderRadius: 5, mb: 2 }}
          />
        )}
        <Typography variant="h3">{date}</Typography>
        <Typography variant="h3" fontWeight={bold ? "bold" : "normal"}>
          {content}
        </Typography>
      </CardContent>
      <CardActions>
        {useBtn && (
          <Link to={linkTo} style={{ width: "100%", textDecoration: "none" }}>
            <Button ternary content={btnContent} />
          </Link>
        )}
      </CardActions>
    </Card>
  );
};

export default CustomCard;
