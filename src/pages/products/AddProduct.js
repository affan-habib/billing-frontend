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
        sx={{ position: "absolute", right: 15, top: 15, color: "#216b8b" }}
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
              operationId: "api/v1/service-master/items",
              output: "itemSaved",
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
                  color="#216b8b"
                >
                  Add New Product
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
                  <InputLabel>Product/service name</InputLabel>
                  <TextField
                    autoFocus={true}
                    id="serviceName"
                    name="serviceName"
                    placeholder="Enter name"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.serviceName}
                    fullWidth
                    autoComplete="first-name"
                  />
                  {touched.serviceName && errors.serviceName && (
                    <FormHelperText
                      error
                      id="standard-weight-helper-text-password-login"
                    >
                      {errors.serviceName}
                    </FormHelperText>
                  )}
                </Stack>
              </Grid>
              <Grid item xs={4} md={4}>
                <Stack spacing={0.5}>
                  <InputLabel>BASE PRICE</InputLabel>
                  <TextField
                    id="basePrice"
                    name="basePrice"
                    placeholder="Enter Age"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.basePrice}
                    fullWidth
                    type="number"
                    autoComplete="age"
                  />
                  {touched.basePrice && errors.basePrice && (
                    <FormHelperText
                      error
                      id="standard-weight-helper-text-password-login"
                    >
                      {errors.basePrice}
                    </FormHelperText>
                  )}
                </Stack>
              </Grid>

              <Grid item xs={4} md={4}>
                <Stack spacing={0.5}>
                  <InputLabel>Discount</InputLabel>
                  <TextField
                    id="discountAmount"
                    name="discountAmount"
                    placeholder="Enter Age"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.discountAmount}
                    fullWidth
                    type="number"
                    autoComplete="age"
                  />
                  {touched.discountAmount && errors.discountAmount && (
                    <FormHelperText
                      error
                      id="standard-weight-helper-text-password-login"
                    >
                      {errors.discountAmount}
                    </FormHelperText>
                  )}
                </Stack>
              </Grid>
              <Grid item xs={4} md={4}>
                <Stack spacing={0.5}>
                  <InputLabel>Expiry Date</InputLabel>
                  <TextField
                    id="expiryDate"
                    name="expiryDate"
                    placeholder="Enter Age"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.expiryDate}
                    fullWidth
                    type="number"
                    autoComplete="age"
                  />
                  {touched.expiryDate && errors.expiryDate && (
                    <FormHelperText
                      error
                      id="standard-weight-helper-text-password-login"
                    >
                      {errors.expiryDate}
                    </FormHelperText>
                  )}
                </Stack>
              </Grid>
              <Grid item xs={4} md={4}>
                <Stack spacing={0.5}>
                  <InputLabel>Vat Per Unit</InputLabel>
                  <TextField
                    id="vatPerUnit"
                    name="vatPerUnit"
                    placeholder="Enter Age"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.vatPerUnit}
                    fullWidth
                    type="number"
                    autoComplete="age"
                  />
                  {touched.vatPerUnit && errors.vatPerUnit && (
                    <FormHelperText
                      error
                      id="standard-weight-helper-text-password-login"
                    >
                      {errors.vatPerUnit}
                    </FormHelperText>
                  )}
                </Stack>
              </Grid>
              <Grid item xs={12}>
                <Button
                  variant="contained"
                  color="info"
                  sx={{ bgcolor: "#216b8b" }}
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
