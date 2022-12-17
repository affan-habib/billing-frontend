import { SearchOutlined } from "@ant-design/icons";
import { Fab, Grid, InputLabel, Paper, Stack, TextField } from "@mui/material";
import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { callApi, selectApi } from "../../../reducers/apiSlice";

const FindCustomer = ({ setFieldValue, values }) => {
  const { customerSaved } = useSelector(selectApi);
  const inputRef = useRef();
  const dispatch = useDispatch();
  useEffect(() => {
    setFieldValue("customerId", customerSaved?.data?._id);
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
      <Paper sx={{ background: "#f5f9f0", p: 2, pt: 0 }} square>
        <Grid container spacing={2} sx={{ mt: 0 }}>
          <Grid item sm={6} md={2}>
            <Stack spacing={0.5}>
              <InputLabel>FIND</InputLabel>
              <TextField
                autoFocus={true}
                id="id"
                name="id"
                placeholder="ID/MOBILE"
                value={values.customerId}
                fullWidth
                inputRef={inputRef}
              />
            </Stack>
          </Grid>
          <Grid item sm={6} md={0.75} sx={{ alignSelf: "flex-end" }}>
            <Fab
              color="primary"
              aria-label="search"
              size="small"
              onClick={handleSearch}
              sx={{ my: "auto" }}
            >
              <SearchOutlined style={{ fontSize: 20 }} />
            </Fab>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
};

export default FindCustomer;
