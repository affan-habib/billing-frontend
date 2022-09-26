import React, { useState } from "react";
import { useField } from "formik/dist/index";
import moment from "moment";

import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const InputDatePicker = ({
  dataValue,
  setField,
  disabled = false,
  ...props
}) => {
  const [field, meta] = useField(props);
  const [data, setData] = useState("");
  const { name } = { ...props };
  const [status, setStatus] = useState(true);

  let setValue = "";
  if (data == "" && status == false) {
    setValue = "";
  } else if (data == "" && dataValue == "" && status == true) {
    setValue = "";
  } else if (dataValue == "" && status == true) {
    setValue = "";
  } else {
    setValue = moment(dataValue).format("DD/MM/yyyy");
  }

  if (setValue == "Invalid date" && status == true) {
    setValue = "";
    setData("");
    setStatus(false);
  }

  return (
    /// Library reference
    /// https://github.com/Hacker0x01/react-datepicker/blob/master/docs/datepicker.md
    <>
      <DatePicker
        disabled={disabled}
        dateFormat="DD/MM/YYYY"
        selected={data}
        dropdownMode="select"
        showMonthDropdown
        showYearDropdown
        adjustDateOnChange
        onChange={(date) => {
          setData(date == null ? "" : date);
          if (date == null) {
            setField(`${name}`, "");
          } else {
            setField(`${name}`, moment(date).format("YYYY-MM-DD"));
          }
          setStatus(false);
        }}
        placeholderText="DD/MM/YYYY"
        value={setValue == "Invalid date" ? "" : setValue}
        isClearable={disabled == true ? false : true}
        className="form-control"
      />

      {meta.error && (
        <div className="no-fill-warning text-danger">{meta.error}</div>
      )}
    </>
  );
};

export default InputDatePicker;
