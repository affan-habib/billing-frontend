import { Form } from "@themesberg/react-bootstrap";
import { useField } from "formik/dist/index";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { callApi, selectApi } from "../../reducers/apiSlice";

const InputSelectApi = ({
  label,
  operationId,
  storeName,
  value,
  text,
  onChange,
  ...props
}) => {
  const dispatch = useDispatch();

  const [field, meta] = useField(props);

  const { [storeName]: items = { data: {} } } = useSelector(selectApi);

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

  if (onChange !== undefined) {
    return (
      <>
        <Form.Group>
          {label !== undefined && <Form.Label>{label}</Form.Label>}
          <Form.Select
            {...field}
            onChange={onChange}
            className={`form-control ${
              meta.touched && meta.error ? "is-invalid" : ""
            }`}
          >
            <option value="" key="">
              Select {label}
            </option>
            {items.data !== undefined &&
              items.data.length > 0 &&
              items.data.map((item, key) => (
                <option value={item[value]} key={key}>
                  {item[text]}
                </option>
              ))}
          </Form.Select>
          <div className="invalid-feedback">{meta.error}</div>
        </Form.Group>
      </>
    );
  }

  return (
    <>
      <Form.Group>
        {label !== undefined && <Form.Label>{label}</Form.Label>}
        <Form.Select
          {...field}
          className={`form-control ${
            meta.touched && meta.error ? "is-invalid" : ""
          }`}
        >
          <option value="" key="">
            Select {label}
          </option>
          {items.data !== undefined &&
            items.data.length > 0 &&
            items.data.map((item, key) => (
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

export default InputSelectApi;
