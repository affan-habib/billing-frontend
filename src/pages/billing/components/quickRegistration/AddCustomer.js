import React from "react";
import { Formik } from "formik";
import {
  Grid,
  InputLabel,
  Stack,
  TextField,
  Button,
  Tooltip,
} from "@mui/material";
import { getSchema, validator } from "./Schema";
import { useDispatch } from "react-redux";
import { callApi } from "../../../../reducers/apiSlice";
import { SaveOutlined, SendOutlined } from "@ant-design/icons";
import { SaveAsOutlined } from "@mui/icons-material";

const AddCustomer = () => {
  const dispatch = useDispatch();

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
        {({ values, handleChange, handleBlur, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2} sx={{ p: 2, pl: 0 }}>
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
                  <InputLabel>Mobile Number</InputLabel>
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
                  <Tooltip title="Save as new customer">
                    <Button
                      variant="contained"
                      endIcon={<SendOutlined />}
                      color="info"
                      sx={{ borderRadius: 20 }}
                      type="submit"
                    >
                      SAVE CUSTOMER
                    </Button>
                  </Tooltip>
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
