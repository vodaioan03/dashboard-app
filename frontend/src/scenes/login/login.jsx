import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";
import { Link } from "react-router-dom";


const LoginPage = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");

  const handleFormSubmit = (values) => {
    console.log(values);
  };
  return (
    <Box m="20px">
      {/* HEADER */}
      <Box display="flex" alignItems="center" flexDirection="column">
          {/* LOGIN FORM  */}
          <Box m="20px" >
            <Box display="flex" alignItems="center" justifyContent="space-around">
              <Header title="LOGIN FOR ACCESS"/>
            </Box>
            
            <Formik
              onSubmit={handleFormSubmit}
              initialValues={initialValues}
              validationSchema={checkoutSchema}
            >
              {({
                values,
                errors,
                touched,
                handleBlur,
                handleChange,
                handleSubmit,
              }) => (
                <form onSubmit={handleSubmit}>
                  <Box
                    display="grid"
                    gap="30px"
                    gridTemplateColumns="repeat(4, minmax(0, 1fr))"
                    sx={{
                      "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
                    }}
                  >
                    {/* EMAIL */}
                    <TextField
                      fullWidth
                      variant="filled"
                      type="text"
                      label="Email"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.email}
                      name="email"
                      error={!!touched.email && !!errors.email}
                      helperText={touched.email && errors.email}
                      sx={{ gridColumn: "span 4" }}
                    />
                    {/*  PASSWORD */}
                    <TextField
                      fullWidth
                      variant="filled"
                      type="password"
                      label="Password"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.password}
                      name="password"
                      error={!!touched.password && !!errors.password}
                      helperText={touched.password && errors.password}
                      sx={{ gridColumn: "span 4" }}
                    />
                  </Box>
                  <Box display="flex" justifyContent="center" mt="20px">
                    <Button type="submit" color="secondary" variant="contained">
                      LOGIN
                    </Button>
                  </Box>
                  <Box display="flex" justifyContent="center" >
                  <h4>
                   <Link to="/register">You don't have an account? Go to Register</Link>
                  </h4>
                  </Box>
                </form>
              )}
            </Formik>
          </Box>
      </Box>
    </Box>
  );
};


const phoneRegExp =
  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

const checkoutSchema = yup.object().shape({
  firstName: yup.string().required("required"),
  lastName: yup.string().required("required"),
  email: yup.string().email("invalid email").required("required"),
  confirmEmail: yup.string().email("invalid email").required("required"),
  password: yup.string().email("invalid password").required("required"),
  confirmPassword: yup.string().email("invalid password").required("required"),
  contact: yup
    .string()
    .matches(phoneRegExp, "Phone number is not valid")
    .required("required"),
  address1: yup.string().required("required"),
});
const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  confirmEmail: "",
  password: "",
  confirmPassword: "",
  contact: "",
  address1: "",
};

export default LoginPage;
