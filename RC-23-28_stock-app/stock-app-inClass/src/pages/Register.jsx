import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import LockIcon from "@mui/icons-material/Lock";
import image from "../assets/result.svg";
import Grid from "@mui/material/Grid";
import { Link, useNavigate } from "react-router-dom";
import { Box } from "@mui/material";
import { useSelector } from "react-redux";
import { Form, Formik } from "formik";
import TextField from "@mui/material/TextField";
import { object, string,ref } from "yup";
import LoadingButton from "@mui/lab/LoadingButton"
import useAuthCall  from "../hooks/useAuthCall";
import Login from "./Login";

const Register = () => {
  const navigate = useNavigate();
  const { currentUser, error, loading } = useSelector((state) => state?.auth);
  const {register,login} = useAuthCall()

  const registerScheme = object({
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

  return (
    <Container maxWidth="lg">
      <Grid
        container
        justifyContent="center"
        direction="row-reverse"
        rowSpacing={{ sm: 3 }}
        sx={{
          height: "100vh",
          p: 2,
        }}
      >
        <Grid item xs={12}>
          <Typography variant="h3" color="primary" align="center">
            STOCK APP
          </Typography>
        </Grid>

        <Grid item xs={12} sm={10} md={6}>
          <Avatar
            sx={{
              backgroundColor: "secondary.light",
              m: "auto",
              width: 40,
              height: 40,
            }}
          >
            <LockIcon size="30" />
          </Avatar>
          <Typography
            variant="h4"
            align="center"
            mb={2}
            color="secondary.light"
          >
            Register
          </Typography>

          <Formik
            initialValues={{username:"", first_name:"", last_name:"", email: "", password: "", password2:"" }}
            validationSchema={registerScheme}
            onSubmit={(values, actions) => {
              register(values);
              actions.resetForm();
              actions.setSubmitting(false);
            }}
          >
            {({ values, errors, handleChange, handleBlur, touched }) => (
              <Form>
                <Box sx={{ display: "flex", flexDirection: "column" }}>
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
                  <LoadingButton variant="contained" type="submit" loading={loading}>Submit</LoadingButton>
                </Box>
              </Form>
            )}
          </Formik>

          <Box sx={{ textAlign: "center", mt: 2 }}>
            <Link to="/">Do you have an account?</Link>
          </Box>
        </Grid>

        <Grid item xs={0} sm={7} md={6}>
          <Container>
            <img src={image} alt="" />
          </Container>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Register;
