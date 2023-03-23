import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import LockIcon from "@mui/icons-material/Lock";
import image from "../assets/result.svg";
import { Link } from "react-router-dom";
import { Formik } from "formik";
import { object, string } from "yup";
import useAuthCall  from "../hooks/useAuthCall";
import LoginForm from "../components/LoginForm";

const Login = () => {
  const {login} = useAuthCall()

  const loginScheme = object({
    email: string().email().required(),
    password: string()
      .required()
      .min(8)
      .max(20)
      .matches(/\d+/, "Password must include a number")
      .matches(/[a-z]/, "Password must include a small letter")
      .matches(/[A-Z]/, "Password must include a big letter")
      .matches(/[!,?{}><%&$#£+-.*]+/, "Password must include a special character")
  });

  return (
    <Container maxWidth="lg">
      <Grid
        container
        justifyContent="center"
        direction="row-reverse"
        sx={{
          height: "100vh",
          p: 2,
        }}
      >
        <Grid item xs={12} mb={3}>
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
            mb={4}
            color="secondary.light"
          >
            Login
          </Typography>

          <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={loginScheme}
            onSubmit={(values, actions) => {
              login(values)
              actions.resetForm();
              actions.setSubmitting(false);
            }}
            component={(props) => <LoginForm {...props}/>}
          ></Formik>

          <Box sx={{ textAlign: "center", mt: 2 }}>
            <Link to="/register">Don't you have an account?</Link>
          </Box>
        </Grid>

        <Grid item xs={10} sm={7} md={6}>
          <Container>
            <img src={image} alt="img" />
          </Container>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;
