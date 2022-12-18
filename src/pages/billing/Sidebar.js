import Box from "@mui/material/Box";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useRef, useState } from "react";
import { setField } from "../../reducers/cartSlice";
import { InputAdornment, InputLabel, TextField } from "@mui/material";

export default function Sidebar() {
  const dispatch = useDispatch();
  const { itemList } = useSelector((state) => state.cart);
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
    }
    if (givenAmountRef.current.value > payableAmountRef.current.value) {
      dispatch(
        setField({
          field: "paidAmount",
          value: payableAmountRef.current.value,
        })
      );
    }
  }, [givenAmount]);

  return (
    <Box sx={{ Width: "100%" }}>
      <InputLabel>ITEM TOTAL</InputLabel>
      <TextField
        InputProps={{
          startAdornment: <InputAdornment position="start">৳</InputAdornment>,
        }}
        disabled
        fullWidth
        sx={{ mb: 1, bgcolor: "white", color: "blue" }}
        variant="filled"
        size="small"
        hiddenLabel
        type="number"
        value={itemTotal}
      />

      <InputLabel>Discount</InputLabel>
      <TextField
        fullWidth
        InputProps={{
          startAdornment: <InputAdornment position="start">৳</InputAdornment>,
        }}
        sx={{ mb: 1, bgcolor: "white" }}
        variant="filled"
        size="small"
        hiddenLabel
        type="number"
        disabled={!itemTotal}
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

      <InputLabel>PAYABLE AMOUNT</InputLabel>
      <TextField
        fullWidth
        InputProps={{
          startAdornment: <InputAdornment position="start">৳</InputAdornment>,
        }}
        sx={{ mb: 1, bgcolor: "white" }}
        variant="filled"
        size="small"
        hiddenLabel
        type="number"
        value={itemTotal - discountVal}
        inputRef={payableAmountRef}
      />

      <InputLabel>GIVEN AMOUNT</InputLabel>
      <TextField
        fullWidth
        InputProps={{
          startAdornment: <InputAdornment position="start">৳</InputAdornment>,
        }}
        sx={{ mb: 1, bgcolor: "white" }}
        variant="filled"
        color="error"
        size="small"
        hiddenLabel
        type="number"
        value={givenAmount}
        onChange={(e) => setGivenAmount(e.target.value)}
        inputRef={givenAmountRef}
      />

      <InputLabel>RETURN AMOUNT</InputLabel>
      <TextField
        fullWidth
        InputProps={{
          startAdornment: <InputAdornment position="start">৳</InputAdornment>,
        }}
        sx={{ mb: 1, bgcolor: "white" }}
        variant="filled"
        size="small"
        hiddenLabel
        type="number"
        value={itemTotal - discountVal - givenAmount}
      />
    </Box>
  );
}
