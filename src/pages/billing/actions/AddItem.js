import { InfoCircleOutlined } from "@ant-design/icons";
import { TocOutlined } from "@mui/icons-material";
import {
  Box,
  Button,
  Dialog,
  InputLabel,
  Stack,
  TextField,
  Tooltip,
} from "@mui/material";
import Autocomplete, { createFilterOptions } from "@mui/material/Autocomplete";

import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { callApi, selectApi } from "../../../reducers/apiSlice";
import { addToCart } from "../../../reducers/cartSlice";
// import { addToCart } from "store/reducers/cartSlice";
import ServiceList from "../components/ServiceList";

const AddItem = () => {
  const dispatch = useDispatch();
  const addItemRef = useRef();
  const [open, setOpen] = useState(false);
  const [state, setState] = useState(true);

  const {
    items = {
      data: [],
    },
  } = useSelector(selectApi);
  const orderDetailList = useSelector((state) => state.cart.orderDetailList);
  useEffect(() => {
    dispatch(
      callApi({
        operationId: "api/products",
        output: "items",
      })
    );
  }, [dispatch]);

  let alreadySelectedOptions = orderDetailList.map((el) => el.id);
  let filterSelectedOptions = items.data.filter(
    (el) => alreadySelectedOptions.indexOf(el.id) == -1
  );
  const filterOptions = createFilterOptions({
    stringify: ({ serviceName, id }) => `${serviceName} ${id}`,
  });
  // console.log({ filterSelectedOptions }, { alreadySelectedOptions });
  const focusAgain = () => {
    setTimeout(() => addItemRef.current.focus(), 100);
  };
  return (
    <Box maxWidth="100%">
      <Stack direction="row" alignItems="flex-end">
        <Stack>
          <InputLabel sx={{ mb: 0.5, pt: 2 }}>SEARCH ITEM</InputLabel>
          <Autocomplete
            autoFocus
            key={state}
            size="medium"
            disablePortal
            noOptionsText="No Match Found"
            filterOptions={filterOptions}
            clearOnEscape
            id="id"
            sx={{ width: 300 }}
            options={filterSelectedOptions}
            autoHighlight
            getOptionLabel={(option) => option.serviceName}
            renderInput={(params) => (
              <TextField
                {...params}
                inputProps={{
                  ...params.inputProps,
                }}
                placeholder="Add Service by Id/Name"
                inputRef={addItemRef}
              />
            )}
            renderOption={(props, option) => (
              <Box component="li" {...props}>
                {option.serviceName} ({option.id})
              </Box>
            )}
            onChange={(e, value) => {
              dispatch(
                addToCart({
                  id: value.id,
                  basePrice: value.basePrice,
                  serviceName: value.serviceName,
                  ...{
                    expiryDate: 0,
                    vatPerUnit: 0,
                    discountPerUnit: 0,
                    quantityOrdered: 1,
                    quantityReturned: 0,
                    discountTotal: 0,
                    discountReturned: 0,
                    vatTotal: 0,
                    vatReturned: 0,
                    subtotalOrdered: 0,
                    subtotalReturned: 0,
                    rowTotal: 0,
                    returnedBy: "string",
                    returnDate: "2022-11-13T11:35:33.765Z",
                  },
                })
              );
              setState(!state);
              focusAgain();
            }}
          />
        </Stack>
        <Tooltip title="SEE ALL SERVICES" arrow>
          <Button
            sx={{ ml: 2, height: 35, mt: 0.5, width: 100 }}
            variant="contained"
            color="primary"
            size="small"
            type="button"
            onClick={() => setOpen(!open)}
            startIcon={<TocOutlined style={{ fontSize: "20px" }} />}
          >
            LIST
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
