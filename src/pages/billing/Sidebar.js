import Box from "@mui/material/Box";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useRef, useState } from "react";
import { setField } from "../../reducers/cartSlice";
import {
  InputAdornment,
  InputLabel,
  TextField,
  Switch,
  FormControl,
  MenuItem,
  Select,
} from "@mui/material";

export default function Sidebar() {
  const dispatch = useDispatch();
  const { itemList, paid } = useSelector((state) => state.cart);
  const [discountVal, setDiscountVal] = useState(0);
  const [givenAmount, setGivenAmount] = useState(0);
  const givenAmountRef = useRef();
  const payableAmountRef = useRef();
  let itemTotal = itemList.reduce(
    (a, b) => a + b.basePrice * b.quantityOrdered,
    0
  );

  useEffect(() => {
    dispatch(
      setField({
        field: "itemTotal",
        value: itemTotal,
      })
    );
  }, [itemTotal]);
  useEffect(() => {
    if (givenAmountRef.current.value < payableAmountRef.current.value) {
      dispatch(
        setField({
          field: "paidAmount",
          value: givenAmount,
        })
      );
      dispatch(setField({ field: "paid", value: false }));
    }
    if (
      givenAmountRef.current.value >= payableAmountRef.current.value &&
      !!itemList.length
    ) {
      dispatch(
        setField({
          field: "paidAmount",
          value: payableAmountRef.current.value,
        })
      );
      dispatch(setField({ field: "paid", value: true }));
    }
  }, [givenAmount]);
  useEffect(() => {
    if (paid) {
      setGivenAmount(payableAmountRef.current.value);
    }
  }, [paid]);
  return (
    <Box sx={{ Width: "100%" }}>
      {/* label ="Is Paid? " */}
      <Switch
        checked={paid}
        onChange={() => dispatch(setField({ field: "paid", value: !paid }))}
      />
      <TextField
        label="ITEM TOTAL"
        fullWidth
        type="number"
        value={itemTotal}
        InputProps={{
          readOnly: true,
        }}
        sx={{ mb: 1 }}
      />
      <FormControl variant="filled" fullWidth>
        <InputLabel shrink>Discount Type</InputLabel>
        <Select
          fullWidth
          name="discountType"
          variant="filled"
          onChange={(e) => {
            setField({
              field: "discountType",
              value: e.target.value,
            });
          }}
          sx={{ mb: 1 }}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value="item">Item Wise</MenuItem>
          <MenuItem value="flat">Flat</MenuItem>
          <MenuItem value="percentage">Percentage</MenuItem>
        </Select>
      </FormControl>
      <TextField
        label="Discount"
        fullWidth
        InputProps={{
          startAdornment: <InputAdornment position="start">৳</InputAdornment>,
          readOnly: !itemTotal,
        }}
        sx={{ mb: 1 }}
        type="number"
        // disabled={!itemTotal}
        value={discountVal}
        onChange={(e) => setDiscountVal(e.target.value)}
        onBlur={(e) =>
          dispatch(
            setField({
              field: "discountAmount",
              value: parseInt(e.target.value),
            })
          )
        }
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            givenAmountRef.current.focus();
            e.preventDefault();
          }
        }}
      />

      <TextField
        label="PAYABLE AMOUNT"
        fullWidth
        InputProps={{
          startAdornment: <InputAdornment position="start">৳</InputAdornment>,
        }}
        sx={{ mb: 1 }}
        type="number"
        value={itemTotal - discountVal}
        inputRef={payableAmountRef}
      />

      <TextField
        label="GIVEN AMOUNT"
        fullWidth
        InputProps={{
          startAdornment: <InputAdornment position="start">৳</InputAdornment>,
        }}
        sx={{ mb: 1 }}
        color="error"
        type="number"
        value={givenAmount}
        onChange={(e) => setGivenAmount(e.target.value)}
        inputRef={givenAmountRef}
      />

      <TextField
        label="RETURN AMOUNT"
        fullWidth
        InputProps={{
          startAdornment: <InputAdornment position="start">৳</InputAdornment>,
        }}
        sx={{ mb: 1 }}
        type="number"
        value={itemTotal - discountVal - givenAmount}
      />
    </Box>
  );
}
