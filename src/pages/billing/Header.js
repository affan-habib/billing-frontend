import { SearchOutlined } from "@ant-design/icons";
import {
  Button,
  createFilterOptions,
  Grid,
  InputLabel,
  Paper,
  Stack,
  TextField,
} from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";

import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { callApi, selectApi } from "../../reducers/apiSlice";
import AddCustomer from "../customers/AddCustomer";

const Header = ({ handleSubmit, setFieldValue }) => {
  const dispatch = useDispatch();

  const {
    patientInfo = {
      data: [],
    },
  } = useSelector(selectApi);

  //dialog

  const inputRef = useRef(null);
  const addItemRef = useRef(null);
  const handleSearchById = () =>
    dispatch(
      callApi({
        operationId: `patient/search?patientId=${inputRef.current.value}`,
        output: "patientInfo",
      })
    );
  const handleSearchByMobile = () =>
    dispatch(
      callApi({
        operationId: `patient/search?patientContactNo=${inputRef.current.value}`,
        output: "patientInfo",
      })
    );

  useEffect(() => {
    !!patientInfo.data.length &&
      setFieldValue("patientId", patientInfo.data[0]?.patientId);
  }, [patientInfo.data]);
  return (
    <>
 
        <Paper
          elevation={1}
          sx={{ background: "#F5FFFA", pt: 0, mt: 4 }}
          square
        >
          <AddCustomer />
        </Paper>
  
    </>
  );
};

export default Header;
