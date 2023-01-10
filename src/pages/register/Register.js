import { Formik } from "formik";
import React from "react";
import { getSchema, validator } from "./Schema";
import { useDispatch, useSelector } from "react-redux";
import { callApi, selectApi } from "../../reducers/apiSlice";
import {
  Button,
  FormHelperText,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { signUp } = useSelector(selectApi);
  return (
    <Formik
      initialValues={getSchema({})}
      validationSchema={validator}
      onSubmit={(values, actions) => {
        dispatch(
          callApi({
            operationId: "auth/register",
            parameters: {
              method: "POST",
              body: JSON.stringify(getSchema(values)),
            },
            output: "signUp",
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
            sx={{ position: "fixed", top: 0, left: 0 }}
          >
            <Stack
              spacing={2}
              width={500}
              p={2}
              component={Paper}
              variant="outlined"
            >
              <Typography variant="h4" color="primary">
                Register Here
              </Typography>
              <Stack>
                <TextField
                  label="ENTER NAME"
                  autoFocus={true}
                  name="name"
                  placeholder="eg: Affan Habib"
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  value={props.values.name}
                  fullWidth
                />
                {props.touched.name && props.errors.name && (
                  <FormHelperText error>{props.errors.name}</FormHelperText>
                )}
              </Stack>
              <Stack>
                <TextField
                  label="EMAIL ADDRESS"
                  name="email"
                  placeholder="eg: e-mail@example.com"
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  value={props.values.email}
                  fullWidth
                />
                {props.touched.email && props.errors.email && (
                  <FormHelperText error>{props.errors.email}</FormHelperText>
                )}
              </Stack>
              <Stack>
                <TextField
                  label="PASSWORD"
                  name="password"
                  type="password"
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  value={props.values.password}
                  fullWidth
                  placeholder="ENTER PASSWORD"
                />
                {props.touched.password && props.errors.password && (
                  <FormHelperText error>{props.errors.password}</FormHelperText>
                )}
              </Stack>
              <Stack direction="row" spacing={2}>
                <Button variant="contained" type="submit">
                  REGISTER
                </Button>
                <Button variant="outlined" onClick={() => navigate("/login")}>
                  LOGIN
                </Button>
              </Stack>
            </Stack>
          </Stack>
        </form>
      )}
    </Formik>
  );
}
