import { Formik } from "formik";
import React from "react";
import bg from "../../assets/image.png";
import { getSchema, validator } from "./Schema";
import { useDispatch, useSelector } from "react-redux";
import { callApi } from "../../reducers/apiSlice";
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
  return (
    <Formik
      initialValues={getSchema({})}
      validationSchema={validator}
      onSubmit={(values, actions) => {
        dispatch(
          callApi({
            operationId: "auth/login",
            parameters: {
              method: "POST",
              body: JSON.stringify(getSchema(values)),
            },
            output: "details",
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
                  name="username"
                  placeholder="Enter name"
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  value={props.values.username}
                  fullWidth
                  autoComplete="first-name"
                />
                {props.touched.username && props.errors.username && (
                  <FormHelperText
                    error
                    username="standard-weight-helper-text-password-login"
                  >
                    {props.errors.username}
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
