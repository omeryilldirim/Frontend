import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Form } from "formik";
import { object, string,ref } from "yup";

export const registerScheme = object({
  username: string().required().max(150),
  first_name: string().max(150).nullable(),
  last_name: string().max(150).nullable(),
  email: string().email().required(),
  password: string()
  .required()
  .min(8)
  .max(20)
  .matches(/\d+/, "Password must include a number")
  .matches(/[a-z]/, "Password must include a small letter")
  .matches(/[A-Z]/, "Password must include a big letter")
  .matches(/[!,?{}><%&$#£+-.*]+/, "Password must include a special character"),
  password2: string().oneOf([ref("password"), null], "Passwords must match")
})

const RegisterForm = ({ values, handleChange, errors, touched, handleBlur }) => {
  return (
    <div>
      <Form>
        <Box sx={{ display: "flex", flexDirection: "column", gap:2 }}>
          <TextField
            label="Username"
            name="username"
            id="username"
            type="text"
            variant="outlined"
            // value={values?.username || ""}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.username && Boolean(errors.username)}
            helperText={touched.username && errors.username}
          />
          <TextField
            label="First Name"
            name="first_name"
            id="first_name"
            type="text"
            variant="outlined"
            // value={values?.firstName || ""}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.first_name && Boolean(errors.first_name)}
            helperText={touched.first_name && errors.first_name}
          />
          <TextField
            label="Last Name"
            name="last_name"
            id="last_name"
            type="text"
            variant="outlined"
            // value={values?.lastName || ""}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.last_name && Boolean(errors.last_name)}
            helperText={touched.last_name && errors.last_name}
          />

          <TextField
            label="Email"
            name="email"
            id="email"
            type="email"
            variant="outlined"
            // value={values?.email || ""}
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
            // value={values?.password || ""}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.password && Boolean(errors.password)}
            helperText={touched.password && errors.password}
          />
          <TextField
            label="Confirm Password"
            name="password2"
            id="password2"
            type="password"
            variant="outlined"
            // value={values?.password || ""}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.password2 && Boolean(errors.password2)}
            helperText={touched.password2 && errors.password2}
          />
          <Button variant="contained" type="submit" size="large">
            Submit
          </Button>
        </Box>
      </Form>
    </div>
  );
};

export default RegisterForm;
