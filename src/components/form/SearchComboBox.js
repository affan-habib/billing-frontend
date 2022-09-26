import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { fieldToTextField } from "formik-mui";
import uuid from "react-uuid";

export default function SearchComboBox({
  isDisabled = false,
  id = "id",
  text = "label",
  onChange,
  defaultValue,
  ...props
}) {
  const [source, setSource] = React.useState([]);

  const { options } = props;
  // console.log("isDisabled", isDisabled);
  const {
    form: { setFieldValue },
  } = props;
  const { ...field } = fieldToTextField(props);
  const { name } = field;

  React.useEffect(() => {
    if (options !== undefined) {
      let sourceData = options.map((item) => {
        return {
          id: item[id],
          label: item[text],
        };
      });
      setSource(sourceData);
    }
  }, [options?.length ?? ""]);

  const getSelectedValues = () => {
    let filteredValues = source.find((item) => item.id == defaultValue);
    return filteredValues?.label ?? "";
  };

  return (
    <>
      <Autocomplete
        getOptionDisabled={(option) => isDisabled}
        value={getSelectedValues()}
        onChange={(event, newValue) => {
          setFieldValue(name, newValue.id);
        }}
        id="free-solo-searchable-select"
        options={source}
        getOptionLabel={(option) => {
          if (typeof option === "string") {
            return option;
          }
          if (option.inputValue) {
            return option.inputValue;
          }
          return option.label;
        }}
        selectOnFocus
        blurOnSelect
        clearOnBlur
        handleHomeEndKeys
        loading={true}
        renderOption={(props, option) => (
          <li {...props} key={uuid()}>
            {option.label}
          </li>
        )}
        sx={{ maxWidth: 300, minWidth: 150 }}
        freeSolo
        renderInput={(params) => (
          <TextField {...params} className="mt-10" label="অনুসন্ধান করুন" />
        )}
      />
    </>
  );
}
