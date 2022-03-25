import React from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";

const CustomButton = ({ content, secondary, variant = "contained", ...otherProps }) => {
  const color = secondary ?  "#fff" : "primary.main";
  return (
    <Button
      variant={variant}
      color={secondary ? "secondary" : "complementary"}
      sx={{
        borderRadius: 50,
        py: 2,
        fontWeight: "bold",
        color: `${color}`,
        textTransform: "none",
        my: 1,
      }}
      {...otherProps}
        fullWidth
    >
      {content}
    </Button>
  );
};

export default CustomButton;
