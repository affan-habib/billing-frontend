import { Formik } from "formik";
import React, { useEffect } from "react";
import { getSchema, validator } from "./Schema";
import { useDispatch, useSelector } from "react-redux";
import { callApi, selectApi } from "../../reducers/apiSlice";
import {
  Box,
  Button,
  FormHelperText,
  InputLabel,
  Paper,
  Stack,
  TextField,
} from "@mui/material";

export default function Login() {
  const dispatch = useDispatch();
  const { loading, authData = { token: null } } = useSelector(selectApi);
  useEffect(() => {
    authData.token && localStorage.setItem("token", authData.token);
    authData._id && localStorage.setItem("id", authData._id);
    authData.name && localStorage.setItem("name", authData.name);
    authData.email && localStorage.setItem("name", authData.email);
  }, [authData]);
  return (
    <Formik
      initialValues={getSchema({})}
      validationSchema={validator}
      onSubmit={(values, actions) => {
        dispatch(
          callApi({
            operationId: "api/users/login",
            parameters: {
              method: "POST",
              body: JSON.stringify(getSchema(values)),
            },
            output: "authData",
          })
        );
      }}
    >
      {(props) => (
        <form onSubmit={props.handleSubmit}>
          <Stack
            height="100vh"
            width="100vw"
            justifyContent="center"
            alignItems="center"
          >
            <Stack
              spacing={2}
              width={600}
              p={2}
              pb={6}
              sx={{ bgcolor: "white", elevation: 4 }}
              component={Paper}
              variant="outlined"
            >
              <Box sx={{ alignSelf: "center" }} elevation={4}>
                <img
                  className="imgStyle"
                  src="https://img.icons8.com/officel/512/expensive.png"
                />
              </Box>
              <Stack>
                <InputLabel sx={{ mb: 0.5 }}>EMAIL ADDRESS</InputLabel>
                <TextField
                  autoFocus={true}
                  name="email"
                  placeholder="EMAIL ADDRESS"
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  value={props.values.email}
                  fullWidth
                  autoComplete="first-name"
                />
                {props.touched.email && props.errors.email && (
                  <FormHelperText
                    error
                    email="standard-weight-helper-text-password-login"
                  >
                    {props.errors.email}
                  </FormHelperText>
                )}
              </Stack>
              <Stack>
                <InputLabel sx={{ mb: 0.5 }}>PASSWORD</InputLabel>
                <TextField
                  autoFocus={true}
                  name="password"
                  type="password"
                  placeholder="ENTER PASSWORD"
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  value={props.values.password}
                  fullWidth
                />
                {props.touched.password && props.errors.password && (
                  <FormHelperText
                    error
                    password="standard-weight-helper-text-password-login"
                  >
                    {props.errors.password}
                  </FormHelperText>
                )}
              </Stack>
              <Button variant="contained" type="submit">
                Login
              </Button>
            </Stack>
          </Stack>
        </form>
      )}
    </Formik>
  );
}
