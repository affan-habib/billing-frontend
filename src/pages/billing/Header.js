import { Grid, InputLabel, Paper, Stack, TextField } from "@mui/material";

import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { callApi, selectApi } from "../../reducers/apiSlice";
import AddCustomer from "./components/quickRegistration/AddCustomer";

const Header = ({ setFieldValue, values }) => {
  const { customerSaved } = useSelector(selectApi);
  const inputRef = useRef();
  const dispatch = useDispatch();
  useEffect(() => {
    setFieldValue("patientId", customerSaved?._id);
  }, [customerSaved]);
  const handleSearch = () => {
    dispatch(
      callApi({
        operationId: `/${inputRef.current.value}`,
        output: "searchedCustomer",
      })
    );
  };
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
                inputRef={inputRef}
              />
            </Stack>
          </Grid>
          <button onClick={() => handleSearch()}>Search</button>
          <Grid item md={9}>
            <AddCustomer />
          </Grid>
        </Grid>
      </Paper>
    </>
  );
};

export default Header;
