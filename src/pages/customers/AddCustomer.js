import React, { useEffect } from "react";
import { Formik, Field } from "formik";
import {
  FormHelperText,
  Grid,
  InputLabel,
  OutlinedInput,
  Stack,
  Select,
  TextField,
  MenuItem,
  Button,
  Typography,
  IconButton,
} from "@mui/material";
import { getSchema, validator } from "./Schema";
import { useDispatch, useSelector } from "react-redux";
import { callApi, clearState, selectApi } from "../../reducers/apiSlice";
import { CloseCircleFilled } from "@ant-design/icons";

const AddProduct = ({ setOpen }) => {
  const dispatch = useDispatch();
  const {
    gender = {
      data: [],
    },
    quick_registration,
  } = useSelector(selectApi);
  useEffect(() => {
    dispatch(
      callApi({
        operationId: `api/v1/p-code/all?codeType=Gender`,
        output: "gender",
      })
    );
  }, []);
  useEffect(() => {
    if (quick_registration?.status == "success") {
      setOpen(false);
      dispatch(
        clearState({
          output: "quick_registration",
        })
      );
    }
  }, [quick_registration]);
  const CloseButton = () => {
    return (
      <IconButton
        onClick={() => setOpen(false)}
        sx={{ position: "absolute", right: 15, top: 15, color: "#029889" }}
      >
        <CloseCircleFilled style={{ fontSize: "20px" }} />
      </IconButton>
    );
  };
  return (
    <div>
      <Formik
        initialValues={getSchema({})}
        enableReinitialize
        validationSchema={validator}
        onSubmit={(values) => {
          dispatch(
            callApi({
              operationId: "api/customers",
              output: "customerSaved",
              parameters: {
                method: "POST",
                body: JSON.stringify(getSchema(values)),
              },
            })
          );
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          setFieldValue,
          /* and other goodies */
        }) => (
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2} sx={{ maxWidth: 450, p: 2 }}>
              <CloseButton />
              <Grid item xs={12} sm={12}>
                <Typography
                  variant="h4"
                  align="center"
                  sx={{ display: "block" }}
                  color="#029889"
                >
                  Add New Customer
                </Typography>
              </Grid>
              <Grid item xs={2} sm={2}>
                <Stack spacing={0.5}>
                  <InputLabel>Id</InputLabel>
                  <TextField
                    autoFocus={true}
                    id="id"
                    name="id"
                    placeholder="Enter name"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.id}
                    fullWidth
                    autoComplete="first-name"
                  />
                  {touched.id && errors.id && (
                    <FormHelperText
                      error
                      id="standard-weight-helper-text-password-login"
                    >
                      {errors.id}
                    </FormHelperText>
                  )}
                </Stack>
              </Grid>
              <Grid item xs={8} sm={6}>
                <Stack spacing={0.5}>
                  <InputLabel>Customer name</InputLabel>
                  <TextField
                    autoFocus={true}
                    id="name"
                    name="name"
                    placeholder="Enter name"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.name}
                    fullWidth
                    autoComplete="first-name"
                  />
                  {touched.name && errors.name && (
                    <FormHelperText
                      error
                      id="standard-weight-helper-text-password-login"
                    >
                      {errors.name}
                    </FormHelperText>
                  )}
                </Stack>
              </Grid>
              <Grid item xs={8} sm={4}>
                <Stack spacing={0.5}>
                  <InputLabel>Gender</InputLabel>
                  <TextField
                    autoFocus={true}
                    id="gender"
                    name="gender"
                    placeholder="Enter gender"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.gender}
                    fullWidth
                    autoComplete="first-name"
                  />
                  {touched.gender && errors.gender && (
                    <FormHelperText
                      error
                      id="standard-weight-helper-text-password-login"
                    >
                      {errors.gender}
                    </FormHelperText>
                  )}
                </Stack>
              </Grid>
              <Grid item xs={4} md={4}>
                <Stack spacing={0.5}>
                  <InputLabel>AGe</InputLabel>
                  <TextField
                    id="age"
                    name="age"
                    placeholder="Enter Age"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.age}
                    fullWidth
                    type="number"
                    autoComplete="age"
                  />
                  {touched.age && errors.age && (
                    <FormHelperText
                      error
                      id="standard-weight-helper-text-password-login"
                    >
                      {errors.age}
                    </FormHelperText>
                  )}
                </Stack>
              </Grid>
              <Grid item xs={8} sm={6}>
                <Stack spacing={0.5}>
                  <InputLabel>Contact Number</InputLabel>
                  <TextField
                    autoFocus={true}
                    id="contactNumber"
                    name="contactNumber"
                    placeholder="Enter contactNumber"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.contactNumber}
                    fullWidth
                    autoComplete="first-name"
                  />
                  {touched.contactNumber && errors.contactNumber && (
                    <FormHelperText
                      error
                      id="standard-weight-helper-text-password-login"
                    >
                      {errors.contactNumber}
                    </FormHelperText>
                  )}
                </Stack>
              </Grid>
              
              <Grid item xs={12}>
                <Button
                  variant="contained"
                  color="info"
                  sx={{ bgcolor: "#029889" }}
                  fullWidth
                  type="submit"
                >
                  Submit
                </Button>
              </Grid>
            </Grid>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default AddProduct;
