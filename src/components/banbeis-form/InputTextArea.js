import React from 'react';
import {useField} from "formik/dist/index";
import { Form } from '@themesberg/react-bootstrap';

const InputTextArea = ({label, ...props}) => {
  
  const [field, meta] = useField(props);
  
  return (
    <>
      <Form.Group className="mb-3">
        {label !== undefined &&
        <label className="form-label">{label}</label>
        }
        <Form.Control as="textarea" rows="3" {...field} />
      </Form.Group>
      <div className="invalid-feedback">{meta.error}</div>
    </>
  );
  
};

export default InputTextArea;