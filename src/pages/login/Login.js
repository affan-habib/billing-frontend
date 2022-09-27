import { Formik } from "formik";
import React from "react";
import bg from "../../assets/image.png";
import { getSchema, validator } from "./Schema";
import { useDispatch, useSelector } from "react-redux";
import { callApi, selectApi } from "../../reducers/apiSlice";
import { Button } from "@mui/material";

export default function Login() {
  const dispatch = useDispatch();
  return (
    <div className="container">
      <div>
        <div className="row">
          <div className="col-md-6 col-6">
            <div
              className="d-flex justify-content-center align-items-center"
              style={{
                height: "100vh",
              }}
            >
              <div>
                <img
                  src={bg}
                  className="img-responsive border-0"
                  alt="hospital logo"
                />
              </div>
            </div>
          </div>
          <div className="col-md-6 col-6">
            <div
              style={{
                height: "100vh",
              }}
              className="d-flex flex-column justify-content-center"
            >
              <h5 className="text-primary text-uppercase">Sign in to your account</h5>
              <Formik
                initialValues={getSchema({})}
                validationSchema={validator}
                onSubmit={(values, actions) => {
                  dispatch(
                    callApi({
                      operationId: "login",
                      parameters: {
                        method: "POST",
                        body: JSON.stringify(getSchema(values)),
                      },
                      output: "details",
                    })
                  );
                }}
              >
                {(props) => (
                  <form onSubmit={props.handleSubmit}>
                    <label className="mt-2">Enter username </label>
                    <input
                      placeholder="Enter username"
                      className="form-control mt-1"
                      type="text"
                      onChange={props.handleChange}
                      onBlur={props.handleBlur}
                      value={props.values.username}
                      name="username"
                    />
                    {props.errors.username && (
                      <small className="mt-1 text-danger d-block">
                        {props.errors.username}
                      </small>
                    )}
                    <label className="mt-3">Enter your password </label>
                    <input
                      placeholder="Enter password"
                      className="form-control mt-1"
                      type="text"
                      onChange={props.handleChange}
                      onBlur={props.handleBlur}
                      value={props.values.password}
                      name="password"
                    />
                    {props.errors.password && (
                      <small className="m-1 text-danger d-block">
                        {props.errors.password}
                      </small>
                    )}
                    <Button variant="contained" className="mt-3" type="submit">
                      Login
                    </Button>
                  </form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
