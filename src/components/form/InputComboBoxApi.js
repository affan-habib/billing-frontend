import React, { useEffect } from "react";
import { Form } from "@themesberg/react-bootstrap";
import { fieldToTextField } from "formik-mui";
import { Autocomplete, TextField } from "@mui/material";
import { callApi, selectApi } from "../../reducers/apiSlice";
import { useDispatch, useSelector } from "react-redux";
import { useField } from "formik/dist/index";

const InputComboBoxApi = ({
  required = false,
  label,
  operationId,
  storeName,
  value = "id",
  text = "label",
  readOnly,
  result = "id",
  isMultiple = false,
  defaultValue,
  editMode = false,
  onChange,
  ...props
}) => {
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const [source, setSource] = React.useState([]);

  const { [storeName]: items = { data: [] } } = useSelector(selectApi);

  useEffect(() => {
    if (operationId) {
      dispatch(
        callApi({
          operationId: operationId,
          output: storeName,
          storeName: storeName || "select",
        })
      );
    }
  }, [dispatch, operationId]);

  useEffect(() => {
    if (items.data !== undefined) {
      let sourceData = items.data.map((item) => {
        return {
          id: item[value],
          label: item[text],
        };
      });
      setSource(sourceData);
    }
  }, [items?.data?.length ?? ""]);

  const {
    form: { setFieldValue },
  } = props;

  const { error, helperText, ...field } = fieldToTextField(props);
  const { name } = field;
  // console.log("name", field);

  const getSelectedValues = () => {
    let filteredValues = source.filter((item) => {
      return Array.isArray(defaultValue)
        ? defaultValue.includes(item[result])
        : defaultValue == item[result];
    });
    if (isMultiple) {
      filteredValues = filteredValues.length ? filteredValues : [];
    } else {
      filteredValues = filteredValues.length ? filteredValues[0] : {};
    }
    return filteredValues;
  };

  const handleOnChange = (value) => {
    if (isMultiple) {
      if (value.length) {
        setFieldValue(
          name,
          value.map((item) => item[result])
        );
      }
    } else {
      if (value) {
        setFieldValue(name, value[result]);
      }
    }
    if (onChange !== undefined) {
      onChange(value);
    }
  };

  return (
    <>
      <Form.Group>
        {label !== undefined && (
          <Form.Label style={{ marginBottom: "13px" }}>
            {label}
            {required && (
              <abbr style={{ color: "red" }} className="req">
                *
              </abbr>
            )}
          </Form.Label>
        )}
        {source.length > 0 && defaultValue !== undefined ? (
          <>
            {editMode && defaultValue !== undefined ? (
              <Autocomplete
                id={name}
                options={source}
                // options={[...value, ...source]}
                {...props}
                size="small"
                getOptionLabel={(option) => option.label || "None"}
                isOptionEqualToValue={(option, current) =>
                  option.id == current.id
                }
                onChange={(_, value) => handleOnChange(value)}
                value={getSelectedValues()}
                renderInput={(params) => (
                  <TextField
                    {...field}
                    {...params}
                    InputProps={{ ...params.InputProps, readOnly }}
                    helperText={helperText}
                    error={error}
                  />
                )}
                multiple={isMultiple}
                open={open}
                onOpen={() => !readOnly && setOpen(true)}
                onClose={() => setOpen(false)}
                disableClearable={readOnly}
                renderOption={(props, option) => {
                  return (
                    <li {...props} key={option.id}>
                      {option.label}
                    </li>
                  );
                }}
              />
            ) : (
              <Autocomplete
                id={name}
                options={source}
                // options={[...value, ...source]}
                {...props}
                size="small"
                getOptionLabel={(option) => option.label || "Else If"}
                isOptionEqualToValue={(option, current) =>
                  option.id == current.id
                }
                onChange={(_, value) => handleOnChange(value)}
                defaultValue={isMultiple ? [] : {}}
                renderInput={(params) => (
                  <TextField
                    {...field}
                    {...params}
                    InputProps={{ ...params.InputProps, readOnly }}
                  />
                )}
                multiple={isMultiple}
                open={open}
                onOpen={() => !readOnly && setOpen(true)}
                onClose={() => setOpen(false)}
                disableClearable={readOnly}
                renderOption={(props, option) => {
                  return (
                    <li {...props} key={option.id}>
                      {option.label}
                    </li>
                  );
                }}
              />
            )}
          </>
        ) : (
          <Autocomplete
            id={name}
            options={[]}
            {...props}
            size="small"
            getOptionLabel={(option) => option.label || "ELSE"}
            isOptionEqualToValue={(option, current) => option.id == current.id}
            onChange={(_, value) => {
              handleOnChange(value);
            }}
            value={getSelectedValues()}
            renderInput={(params) => (
              <TextField
                {...field}
                {...params}
                InputProps={{ ...params.InputProps, readOnly }}
              />
            )}
            multiple={isMultiple}
            open={open}
            onOpen={() => !readOnly && setOpen(true)}
            onClose={() => setOpen(false)}
            disableClearable={readOnly}
            renderOption={(props, option) => {
              return (
                <li {...props} key={option.id}>
                  {option.label}
                </li>
              );
            }}
          />
        )}
      </Form.Group>
    </>
  );
};

export default InputComboBoxApi;
