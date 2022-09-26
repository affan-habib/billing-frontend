import React from 'react'
import { Field } from 'formik'
import { FormControl, FormControlLabel, TextField } from '@mui/material'

function ChakraInput (props) {
  const { label, name, ...rest } = props
  return (
    <Field name={name}>
      {({ field, form }) => (
        <FormControl isInvalid={form.errors[name] && form.touched[name]}>
          <FormControlLabel htmlFor={name}>{label}</FormControlLabel>
          <TextField id={name} {...rest} {...field} />
          <p>{form.errors[name]}</p>
        </FormControl>
      )}
    </Field>
  )
}

export default ChakraInput
