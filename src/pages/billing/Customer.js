import {
  Grid,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  Stack,
  TextField,
} from "@mui/material";
import { FastField } from "formik";

const Customer = ({ setFieldValue, values, handleBlur, handleChange }) => {
  return (
    <>
      <Paper sx={{ background: "#f5f9f0", p: 2, pt: 0 }} square>
        <Grid container spacing={2}>
          <Grid item sm={6} md={3}>
            <Stack spacing={0.5}>
              <InputLabel>Full Name</InputLabel>
              <TextField
                autoFocus={true}
                id="name"
                name="name"
                placeholder="eg : John Doe"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
                fullWidth
              />
            </Stack>
          </Grid>
          <Grid item sm={6} md={3}>
            <Stack spacing={0.5}>
              <InputLabel>Contact</InputLabel>
              <TextField
                id="contactNumber"
                name="contactNumber"
                placeholder="eg: 01798980000"
                onBlur={handleBlur}
                value={values.contactNumber}
                onChange={handleChange}
                fullWidth
              />
            </Stack>
          </Grid>
          <Grid item sm={6} md={1.75}>
            <Stack spacing={0.5}>
              <InputLabel
                sx={{ fontWeight: 500, textTransform: "uppercase" }}
                htmlFor="gender"
              >
                GENDER
              </InputLabel>
              <FastField
                // disabled
                name="gender"
                component={Select}
                value={values.gender}
                onChange={(e) => {
                  setFieldValue("gender", e.target.value);
                }}
              >
                <MenuItem value="MALE">MALE</MenuItem>
                <MenuItem value="FEMALE">FEMALE</MenuItem>
              </FastField>
            </Stack>
          </Grid>
          <Grid item sm={6} md={1.25}>
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
        </Grid>
      </Paper>
    </>
  );
};

export default Customer;
