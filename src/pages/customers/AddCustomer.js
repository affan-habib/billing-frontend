import React, { useEffect } from "react";
import { Formik, Field } from "formik";
import {
  Grid,
  InputLabel,
  Stack,
  TextField,
  Button,
  IconButton,
} from "@mui/material";
import { getSchema, validator } from "./Schema";
import { useDispatch, useSelector } from "react-redux";
import { callApi, clearState, selectApi } from "../../reducers/apiSlice";
import { CloseCircleFilled } from "@ant-design/icons";

const AddCustomer = ({ setOpen }) => {
  const dispatch = useDispatch();
  const { quick_registration } = useSelector(selectApi);
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
        sx={{ position: "absolute", right: 15, top: 15 }}
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
            <Grid container spacing={2} sx={{ p: 2 }}>
              <CloseButton />
              <Grid item lg={2}>
                <Stack spacing={0.5}>
                  <InputLabel>Id</InputLabel>
                  <TextField
                    id="id"
                    name="id"
                    placeholder="ID"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.id}
                    fullWidth
                  />
                </Stack>
              </Grid>
              <Grid item lg={3}>
                <Stack spacing={0.5}>
                  <InputLabel>Customer name</InputLabel>
                  <TextField
                    autoFocus={true}
                    id="name"
                    name="name"
                    placeholder="CUSTOMER NAME"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.name}
                    fullWidth
                  />
                </Stack>
              </Grid>
              <Grid item lg={1}>
                <Stack spacing={0.5}>
                  <InputLabel>Gender</InputLabel>
                  <TextField
                    id="gender"
                    name="gender"
                    placeholder="GENDER"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.gender}
                    fullWidth
                  />
                </Stack>
              </Grid>
              <Grid item lg={1}>
                <Stack spacing={0.5}>
                  <InputLabel>AGe</InputLabel>
                  <TextField
                    id="age"
                    name="age"
                    placeholder="AGE"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.age}
                    fullWidth
                    type="number"
                  />
                </Stack>
              </Grid>
              <Grid item lg={2}>
                <Stack spacing={0.5}>
                  <InputLabel>Contact Number</InputLabel>
                  <TextField
                    id="contactNumber"
                    name="contactNumber"
                    placeholder="MOBILE NUMBER"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.contactNumber}
                    fullWidth
                  />
                </Stack>
              </Grid>
              <Grid item lg={2}>
                <Stack
                  direction="row"
                  justifyContent="flex-start"
                  alignItems="flex-end"
                  sx={{ height: "100%" }}
                >
                  <Button variant="contained" color="info" type="submit">
                    SAVE
                  </Button>
                </Stack>
              </Grid>
            </Grid>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default AddCustomer;
