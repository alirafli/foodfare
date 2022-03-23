import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import Email from "@mui/icons-material/EmailOutlined";
import Lock from "@mui/icons-material/LockOutlined";
import Human from "@mui/icons-material/AccountCircleOutlined";

const FieldInput = ({ label, placeHolder, password, human, ...otherProps }) => {
  return (
    <TextField
      label={label ? `${label}` : null}
      variant="outlined"
      color="background"
      placeholder={placeHolder}
      type={password ? "password" : "text"}
      sx={{ my: 1, input: { color: "white" } }}
      InputProps={{
        style: { borderRadius: "50px" },
        startAdornment: (
          <InputAdornment position="start">
            {password ? (
              <Lock style={{ color: "white" }} />
            ) : human ? (
              <Human style={{ color: "white" }} />
            ) : (
              <Email style={{ color: "white" }} />
            )}
          </InputAdornment>
        ),
      }}
      {...otherProps}
    />
  );
};

export default FieldInput;
