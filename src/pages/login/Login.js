import { Formik } from "formik";
import React, { useEffect } from "react";
import { getSchema, validator } from "./Schema";
import { useDispatch, useSelector } from "react-redux";
import { callApi, clearState, selectApi } from "../../reducers/apiSlice";

import {
  Box,
  Button,
  FormHelperText,
  InputLabel,
  Paper,
  Stack,
  TextField,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

export default function Login() {
  const dispatch = useDispatch();
  const auth = useAuth();
  const { loading, authData = { token: null } } = useSelector(selectApi);
  const navigate = useNavigate();
  useEffect(() => {
    if (auth) {
      navigate("/");
    }
    if (!auth && authData.token) {
      authData.token && localStorage.setItem("token", authData.token);
      navigate("/");
    }
  }, [authData.token, auth]);
  return (
    <Formik
      initialValues={getSchema({})}
      validationSchema={validator}
      onSubmit={(values, actions) => {
        dispatch(
          callApi({
            operationId: "signin",
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
              width={400}
              p={4}
              component={Paper}
              variant="outlined"
            >
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
              <Stack direction="row" spacing={2}>
                <Button variant="contained" type="submit">
                  LOGIN
                </Button>
                <Button
                  variant="outlined"
                  onClick={() => navigate("/register")}
                >
                  REGISTER
                </Button>
              </Stack>
            </Stack>
          </Stack>
        </form>
      )}
    </Formik>
  );
}
