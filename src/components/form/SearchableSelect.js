import React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { useField } from "formik/dist/index";

const SearchableSelect = ({ data, text, value, label, onChange, ...props }) => {
  const [field, meta] = useField(props);
  console.log("value", field);

  return (
    <>
      <Autocomplete
        id="multiple-limit-tags"
        options={data}
        sx={{ width: 300 }}
        getOptionLabel={(option) => option.name}
        defaultValue={[data[0].value]}
        renderInput={(params) => <TextField {...params} label={label} />}
        className={`form-control ${
          meta.touched && meta.error ? "is-invalid" : ""
        }`}
      />
      <div className="invalid-feedback">{meta.error}</div>
    </>
  );
};

export default SearchableSelect;
