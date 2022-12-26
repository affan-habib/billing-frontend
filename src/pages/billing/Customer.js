import {
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { useRef } from "react";

const Customer = ({ setFieldValue, values, handleBlur, handleChange }) => {
  const nameRef = useRef();
  const contactNumberRef = useRef();
  const ageRef = useRef();
  const genderRef = useRef();
  return (
    <>
      <>
        <Grid container spacing={2}>
          <Grid item sm={6} md={3} flexDirection="column">
            <TextField
              label="FULL NAME"
              required
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
          </Grid>
          <Grid item sm={6} md={3}>
            <TextField
              required
              label="Contact"
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
          </Grid>
          <Grid item sm={6} md={2} lg={1.5}>
            <FormControl variant="filled" fullWidth>
              <InputLabel>Gender</InputLabel>
              <Select
                name="gender"
                variant="filled"
                label="AGE"
                value={values.gender}
                onChange={(e) => {
                  setFieldValue("gender", e.target.value);
                }}
                inputRef={genderRef}
              >
                <MenuItem value="MALE">MALE</MenuItem>
                <MenuItem value="FEMALE">FEMALE</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item sm={6} md={2}>
            <TextField
              label="AGE"
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
          </Grid>
        </Grid>
      </>
    </>
  );
};

export default Customer;
