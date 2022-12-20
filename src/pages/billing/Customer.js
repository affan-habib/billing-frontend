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
import { useRef } from "react";

const Customer = ({ setFieldValue, values, handleBlur, handleChange }) => {
  const nameRef = useRef();
  const contactNumberRef = useRef();
  const ageRef = useRef();
  const genderRef = useRef();
  return (
    <>
      <Paper sx={{ background: "#f5f9f0", p: 2, pt: 0, mt: 2 }} square>
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
                inputRef={nameRef}
                onKeyPress={(e) => {
                  if (e.key === "Enter" && !!nameRef.current.value.length) {
                    contactNumberRef.current.focus();
                    e.preventDefault();
                  }
                }}
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
                inputRef={contactNumberRef}
                onKeyPress={(e) => {
                  if (
                    e.key === "Enter" &&
                    !!contactNumberRef.current.value.length
                  ) {
                    genderRef.current.focus();
                    e.preventDefault();
                  }
                }}
              />
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
                inputRef={ageRef}
                onKeyPress={(e) => {
                  if (e.key === "Enter") {
                    genderRef.current.focus();
                    e.preventDefault();
                  }
                }}
              
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
                inputRef={genderRef}
              >
                <MenuItem value="MALE">MALE</MenuItem>
                <MenuItem value="FEMALE">FEMALE</MenuItem>
              </FastField>
            </Stack>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
};

export default Customer;
