import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "../components/form/FormikControl";
import FormikContainer from "../components/form/FormikContainer";
import { Button } from "@mui/material";

function Home() {
  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email format").required("Required"),
    password: Yup.string().required("Required"),
  });

  const onSubmit = (values) => {
    console.log("Form data", values);
  };

  return (
    <div className="container">
      <FormikContainer/>
    </div>
  );
}

export default Home;
