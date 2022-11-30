import { Paper } from "@mui/material";

import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectApi } from "../../reducers/apiSlice";
import AddCustomer from "./components/quickRegistration/AddCustomer";

const Header = (props) => {
  console.log(props)
  const dispatch = useDispatch();

  const {
    customerSaved = {
      data: [],
    },
  } = useSelector(selectApi);

  //dialog

  const inputRef = useRef(null);

  // useEffect(() => {
  //   !!customerSaved.data &&
  //     props.setFieldValue("patientId", customerSaved.data[0]?._id);
  // }, [customerSaved.data]);
  return (
    <>
      <Paper elevation={1} sx={{ background: "#F5FFFA", pt: 0, mt: 4 }} square>
        <AddCustomer />
      </Paper>
    </>
  );
};

export default Header;
