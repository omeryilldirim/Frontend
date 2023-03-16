import { Stack, Typography } from "@mui/material"
import TextField from "@mui/material/TextField"

const TextFieldComp = () => {
  return (
    <div>
      <Typography variant="h4" color="secondary.light" align="center" m={4}>
        TEXT FIELD
      </Typography>
      <TextField
        id="email"
        label="email"
        type="email"
        variant="outlined"
        placeholder="Enter Your Email"
        fullWidth
        margin="normal"
        required
      />
      <TextField
        id="password"
        label="password"
        type="password"
        variant="filled"
        placeholder="Enter Your password"
        fullWidth
        margin="normal"
        required
      />
      <TextField id="standard-basic" label="Standard" variant="standard" />
    </div>
  )
}

export default TextFieldComp
