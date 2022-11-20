import { InfoCircleOutlined } from "@ant-design/icons";
import {
  Button,
  Stack,
  TextField,
  Box,
  Dialog,
  Tooltip,
  IconButton,
  Paper,
} from "@mui/material";
import { FieldArray } from "formik";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { callApi, selectApi } from "../../../reducers/apiSlice";
import ServiceList from "../components/service-list/ServiceList";
import Autocomplete, { createFilterOptions } from "@mui/material/Autocomplete";
import { addToCart } from "../../../reducers/cartSlice";
const AddItem = () => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const {
    items = {
      data: [],
    },
  } = useSelector(selectApi);
  const orderDetailList = useSelector((state) => state.cart.orderDetailList);
  useEffect(() => {
    setTimeout(
      () =>
        dispatch(
          callApi({
            operationId: `api/v1/service-master/items`,
            output: "items",
          })
        ),
      1000
    );
  }, [dispatch]);

  let alreadySelectedOptions = orderDetailList.map((el) => el.id);
  let filterSelectedOptions = items.data.filter(
    (el) => alreadySelectedOptions.indexOf(el.id) == -1
  );
  const filterOptions = createFilterOptions({
    stringify: ({ masterServiceName, id }) => `${masterServiceName} ${id}`,
  });
  console.log({ filterSelectedOptions }, { alreadySelectedOptions });
  return (
    <Box>
      <Stack direction="row">
        <Autocomplete
          size="medium"
          disablePortal
          noOptionsText="No Match Found"
          filterOptions={filterOptions}
          id="id"
          sx={{ width: 300 }}
          options={filterSelectedOptions}
          autoHighlight
          // blurOnSelect
          clearOnBlur={true}
          // filterSelectedOptions
          // autoSelect
          getOptionLabel={(option) => option.masterServiceName}
          renderInput={(params) => (
            <TextField
              {...params}
              // label="Select an item"
              inputProps={{
                ...params.inputProps,
              }}
              placeholder="Add Service by Id/Name"
            />
          )}
          renderOption={(props, option) => (
            <Box component="li" {...props}>
              {option.masterServiceName} ({option.id})
            </Box>
          )}
          onChange={(e, value) => value?.id && dispatch(addToCart(value))}
        />
        <Tooltip title="Click to see Service Details" arrow>
          <Button
            sx={{ ml: 2, height: 35, mt: 0.5, width: 200 }}
            variant="outlined"
            color="error"
            size="small"
            type="button"
            onClick={() => setOpen(!open)}
            startIcon={<InfoCircleOutlined style={{ fontSize: "16px" }} />}
          >
            SERVICE LIST
          </Button>
        </Tooltip>
      </Stack>
      <Dialog open={open} onClose={() => setOpen(!open)} fullWidth>
        <ServiceList />
      </Dialog>
    </Box>
  );
};

export default AddItem;
