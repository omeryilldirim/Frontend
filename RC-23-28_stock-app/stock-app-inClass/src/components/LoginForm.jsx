import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import LoadingButton from "@mui/lab/LoadingButton";

import { Form } from "formik";
import { useSelector } from "react-redux";
import { object, string } from "yup";

export const loginScheme = object({
  email: string().email().required(),
  password: string()
    .required()
    .min(8)
    .max(20)
    .matches(/\d+/, "Password must include a number")
    .matches(/[a-z]/, "Password must include a small letter")
    .matches(/[A-Z]/, "Password must include a big letter")
    .matches(
      /[!,?{}><%&$#£+-.*]+/,
      "Password must include a special character"
    ),
});

const LoginForm = ({ values, handleChange, errors, touched, handleBlur }) => {
  const { loading } = useSelector((state) => state.auth);
  return (
    <Form>
      <Box sx={{ display: "flex", flexDirection: "column", gap:2 }}>
        <TextField
          label="Email"
          name="email"
          id="email"
          type="email"
          variant="outlined"
          value={values?.email || ""}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.email && Boolean(errors.email)}
          helperText={touched.email && errors.email}
        />
        <TextField
          label="Password"
          name="password"
          id="password"
          type="password"
          variant="outlined"
          value={values?.password || ""}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.password && Boolean(errors.password)}
          helperText={touched.password && errors.password}
        />
        <LoadingButton variant="contained" type="submit" loading={loading} loadingPosition="center">
          Submit
        </LoadingButton>
      </Box>
    </Form>
  );
};

export default LoginForm;
