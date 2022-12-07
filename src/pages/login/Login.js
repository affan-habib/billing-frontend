import { Formik } from "formik";
import React, { useEffect } from "react";
import { getSchema, validator } from "./Schema";
import { useDispatch, useSelector } from "react-redux";
import { callApi, selectApi } from "../../reducers/apiSlice";
import {
  Button,
  FormHelperText,
  Grid,
  InputLabel,
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
          <Grid container spacing={2}>
            <Grid item xs={2} sm={6}>
              <Stack spacing={0.5}>
                <InputLabel>User Name</InputLabel>
                <TextField
                  autoFocus={true}
                  name="email"
                  placeholder="Enter name"
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
            </Grid>
            <Grid item xs={2} sm={2} md={6}>
              <Stack spacing={0.5}>
                <InputLabel>Password</InputLabel>
                <TextField
                  autoFocus={true}
                  name="password"
                  placeholder="Enter password"
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
            </Grid>
          </Grid>
          <Button variant="contained" className="mt-3" type="submit">
            Login
          </Button>
        </form>
      )}
    </Formik>
  );
}
