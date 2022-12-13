import { SearchOutlined } from "@ant-design/icons";
import {
  Button,
  Grid,
  InputLabel,
  Paper,
  Stack,
  TextField,
} from "@mui/material";

import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { callApi, selectApi } from "../../reducers/apiSlice";
import AddCustomer from "./components/quickRegistration/AddCustomer";

const Header = ({ setFieldValue, values }) => {
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
      <Paper elevation={2} sx={{ background: "##f5f9f0", pt: 0 }} square>
        <Grid container spacing={2} alignItems="flex-end" sx={{ mt: 0 }}>
          <Grid item lg={1.5} md={3} m={2}>
            <Stack spacing={0.5}>
              <InputLabel>Customer Id</InputLabel>
              <TextField
                autoFocus={true}
                id="id"
                name="id"
                placeholder="ID"
                value={values.customerId}
                fullWidth
                inputRef={inputRef}
              />
            </Stack>
          </Grid>
          <Button
            sx={{ mb: 2, borderRadius: 20 }}
            startIcon={<SearchOutlined />}
            variant="outlined"
            onClick={handleSearch}
          >
            SEARCH
          </Button>
          <Grid item md={9}>
            <AddCustomer />
          </Grid>
        </Grid>
      </Paper>
    </>
  );
};

export default Header;
