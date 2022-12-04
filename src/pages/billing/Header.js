import { Grid, InputLabel, Paper, Stack, TextField } from "@mui/material";

import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectApi } from "../../reducers/apiSlice";
import AddCustomer from "./components/quickRegistration/AddCustomer";

const Header = ({ setFieldValue, values }) => {
  const { customerSaved } = useSelector(selectApi);
  useEffect(() => {
    setFieldValue("patientId", customerSaved?._id);
  }, [customerSaved]);
  return (
    <>
      <Paper elevation={1} sx={{ background: "#F5FFFA", pt: 0, mt: 4 }} square>
        <Grid container spacing={2}>
          <Grid item md={2} m={2}>
            <Stack spacing={0.5}>
              <InputLabel>Customer Id</InputLabel>
              <TextField
                autoFocus={true}
                id="id"
                name="id"
                placeholder="ID"
                value={values.patientId}
                fullWidth
              />
            </Stack>
          </Grid>
          <Grid item md={9}>
            <AddCustomer />
          </Grid>
        </Grid>
      </Paper>
    </>
  );
};

export default Header;
