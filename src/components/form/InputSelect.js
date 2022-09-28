import React from "react";
import { Form } from "@themesberg/react-bootstrap";
import { useField } from "formik/dist/index";

const InputSelect = ({
  label,
  data,
  value,
  text,
  isDisabled = false,
  onChange,
  ...props
}) => {
  const [field, meta] = useField(props);

  return (
    <>
      <Form.Group>
        {label !== undefined && <Form.Label>{label}</Form.Label>}
        <Form.Select
          {...field}
          className={`form-control ${
            meta.touched && meta.error ? "is-invalid" : ""
          }`}
          disabled={isDisabled}
        >
          {/* <option defaultValue key="">Select {label}</option> need to discuss with team ... MnR */}
          {data !== undefined &&
            data.length > 0 &&
            data.map((item, key) => (
              <option value={item[value]} key={key}>
                {item[text]}
              </option>
            ))}
        </Form.Select>
        <div className="invalid-feedback">{meta.error}</div>
      </Form.Group>
    </>
  );
};

export default InputSelect;
