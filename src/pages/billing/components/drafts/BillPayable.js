import {
  DeleteOutlined,
  PlusCircleFilled,
  SearchOutlined,
} from "@ant-design/icons";
import {
  Button,
  Card,
  IconButton,
  TextField,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Box,
  OutlinedInput,
} from "@mui/material";
import { FieldArray } from "formik";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { callApi, selectApi } from "../../reducers/apiSlice";
import items from "../../../../data/items";
import { getSchema } from "../../Schema";
// styles

const BillPayable = ({
  values,
  errors,
  touched,
  handleChange,
  handleBlur,
  handleSubmit,
  isSubmitting,
  setFieldValue,
  viewMode,
}) => {
  let totalPrice = values.items.reduce(
    (initial, reducer) =>
      initial +
      (reducer.tariffBaseAmount * reducer.quantity - reducer.discountAmount),
    0
  );
  const dispatch = useDispatch();

  const {
    serviceMaster = {
      data: [],
    },
  } = useSelector(selectApi);
  useEffect(() => {
    dispatch(
      callApi({
        operationId: `api/v1/service-master/all`,
        output: "serviceMaster",
      })
    );
  }, [dispatch]);
  return (
    <Box m={2}>
      <TableContainer>
        <Table sx={{ minWidth: 320 }} stickyHeader aria-label="sticky table">
          <TableHead sx={{ height: 40 }}>
            <TableRow>
              <TableCell
                sx={{ pr: 3, width: 400, borderRight: 1 }}
                align="left"
              >
                Item Name
              </TableCell>
              <TableCell sx={{ borderRight: 1 }} align="center">
                Base Price
              </TableCell>
              <TableCell sx={{ borderRight: 1 }} align="center">
                Quantitiy
              </TableCell>
              {/* <TableCell sx={{ borderRight: 1 }} align="center">
                  Fee
                </TableCell> */}
              <TableCell sx={{ borderRight: 1 }} align="center">
                Discount (amt))
              </TableCell>
              <TableCell sx={{ borderRight: 1 }} align="center">
                Discount (%)
              </TableCell>
              <TableCell sx={{ borderRight: 1 }} align="center">
                Tax
              </TableCell>
              <TableCell sx={{ borderRight: 1 }} align="center">
                Price
              </TableCell>
              <TableCell align="center">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {values.items.map((el, index) => {
              return (
                <TableRow hover>
                  <TableCell
                    component={OutlinedInput}
                    value={values.items[index].masterServiceName}
                  ></TableCell>
                  <TableCell
                    component={OutlinedInput}
                    value={values.items[index].tariffBaseAmount}
                    type="number"
                    inputProps={{ min: 0, style: { textAlign: "center" } }}
                  />
                  <TableCell
                    component={OutlinedInput}
                    value={values.items[index].quantity}
                    type="number"
                    inputProps={{ min: 0, style: { textAlign: "center" } }}
                    onChange={(e) =>
                      setFieldValue(`items.[${index}].quantity`, e.target.value)
                    }
                  />
                  <TableCell
                    component={OutlinedInput}
                    value={values.items[index].discountAmount}
                    type="number"
                    inputProps={{ min: 0, style: { textAlign: "center" } }}
                    onChange={(e) =>
                      setFieldValue(
                        `items.[${index}].discountAmount`,
                        e.target.value
                      )
                    }
                  ></TableCell>
                  <TableCell
                    component={OutlinedInput}
                    value={values.items[index].discountPercentage}
                    type="number"
                    inputProps={{ min: 0, style: { textAlign: "center" } }}
                    onChange={(e) =>
                      setFieldValue(
                        `items.[${index}].discountPercentage`,
                        e.target.value
                      )
                    }
                  ></TableCell>

                  <TableCell
                    component={OutlinedInput}
                    value={values.items[index].tax}
                    type="number"
                    inputProps={{ min: 0, style: { textAlign: "center" } }}
                    onChange={(e) =>
                      setFieldValue(`items.[${index}].tax`, e.target.value)
                    }
                  ></TableCell>
                  <TableCell
                    component={OutlinedInput}
                    value={
                      values.items[index].tariffBaseAmount *
                        values.items[index].quantity -
                      values.items[index].discountAmount
                    }
                    type="number"
                    inputProps={{ min: 0, style: { textAlign: "center" } }}
                  ></TableCell>

                  <TableCell align="center">
                    <Stack
                      direction="row"
                      // paddingX={3}
                      justifyContent="center"
                      alignItems="center"
                    >
                      <IconButton color="error">
                        <DeleteOutlined />
                      </IconButton>
                    </Stack>
                  </TableCell>
                </TableRow>
              );
            })}

            <TableRow sx={{ marginTop: 10 }}>
              <TableCell align="left"></TableCell>
              <TableCell align="left"></TableCell>
              <TableCell align="left"></TableCell>
              <TableCell align="left"></TableCell>
              <TableCell align="left"></TableCell>
              <TableCell sx={{ borderRight: 1, borderColor: "red" }}>
                <b>Total Amount</b>
              </TableCell>
              <TableCell align="center">{totalPrice}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="left"></TableCell>
              <TableCell align="left"></TableCell>
              <TableCell align="left"></TableCell>
              <TableCell align="left"></TableCell>
              <TableCell align="left"></TableCell>
              <TableCell align="left">
                <em>Discount</em>{" "}
              </TableCell>
              <TableCell
                component={OutlinedInput}
                value={values.finalDiscount}
                type="number"
                inputProps={{ min: 0, style: { textAlign: "center" } }}
                onChange={(e) => setFieldValue(`finalDiscount`, e.target.value)}
              ></TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="left"></TableCell>
              <TableCell align="left"></TableCell>
              <TableCell align="left"></TableCell>
              <TableCell align="left"></TableCell>
              <TableCell align="left"></TableCell>
              <TableCell align="left">
                <b>Total Payable </b>
              </TableCell>
              <TableCell align="center">
                {" "}
                {totalPrice - values.finalDiscount}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="left"></TableCell>
              <TableCell align="left"></TableCell>
              <TableCell align="left"></TableCell>
              <TableCell align="left"></TableCell>
              <TableCell align="left"></TableCell>
              <TableCell align="left">
                <b>Advance </b>
              </TableCell>
              <TableCell
                component={OutlinedInput}
                value={values.advance}
                type="number"
                inputProps={{ min: 0, style: { textAlign: "center" } }}
                onChange={(e) => setFieldValue(`advance`, e.target.value)}
              ></TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="left"></TableCell>
              <TableCell align="left"></TableCell>
              <TableCell align="left"></TableCell>
              <TableCell align="left"></TableCell>
              <TableCell align="left"></TableCell>
              <TableCell align="left">
                <b>Due Amount</b>{" "}
              </TableCell>
              <TableCell
                component={OutlinedInput}
                value={totalPrice - values.finalDiscount - values.advance}
                type="number"
                inputProps={{ min: 0, style: { textAlign: "center" } }}
              ></TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default BillPayable;
