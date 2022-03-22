import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import Email from '@mui/icons-material/EmailOutlined';
import Lock from '@mui/icons-material/LockOutlined';

const FieldInput = ({ label, placeHolder, password }) => {
  return (
    <TextField
      label={label ? `${label}` : null}
      variant="outlined"
      color="background"
      placeholder={placeHolder}
      type={password ? "password" : "text"}
      sx={{ my: 2, input: { color: 'white' },  }}
      InputProps={{
        style: { borderRadius: "50px" },
        startAdornment: (
          <InputAdornment position="start">
            {password ? <Lock style={{ color: 'white' }}/> : <Email style={{ color: 'white' }} />}
          </InputAdornment>
        ),
      }}
    />
  );
};

export default FieldInput;
