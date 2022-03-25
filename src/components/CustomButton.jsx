import React from "react";
import Button from "@mui/material/Button";

const CustomButton = ({
  content,
  secondary,
  variant = "contained",
  ternary,
  ...otherProps
}) => {
  const color = secondary ? "#fff" : "primary.main";
  return (
    <>
      {ternary ? (
        <Button
          variant={variant}
          sx={{
            borderRadius: 50,
            py: 1,
            fontWeight: "bold",
            color: "#fff",
            textTransform: "none",
            my: 1,
            mx: "auto",
            px: 5,
            boxShadow: 10,
          }}
          {...otherProps}
        >
          {content}
        </Button>
      ) : (
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
        >
          {content}
        </Button>
      )}
    </>
  );
};

export default CustomButton;
