import { Formik } from "formik";
import React from "react";
import bg from "../../assets/image.png";
import { getSchema, validator } from "./Schema";
import { useDispatch, useSelector } from "react-redux";
import { callApi, selectApi } from "../../reducers/apiSlice";

export default function Login() {
  const dispatch = useDispatch();

  return (
    <div className="container">
      <div>
        <div className="row">
          <div className="col-md-6">
            <div
              className="d-flex justify-content-center align-items-center"
              style={{
                height: "100vh",
              }}
            >
              <div>
                <img src={bg} alt="hospital logo" />
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div
              style={{
                height: "100vh",
              }}
              className="d-flex flex-column justify-content-center"
            >
              <h4>Login Here</h4>
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
                    <input
                      className="form-control mt-3"
                      type="text"
                      onChange={props.handleChange}
                      onBlur={props.handleBlur}
                      value={props.values.username}
                      name="username"
                    />
                    {props.errors.username && (
                      <p className="mt-1 text-danger">
                        {props.errors.username}
                      </p>
                    )}
                    <input
                      className="form-control mt-3"
                      type="text"
                      onChange={props.handleChange}
                      onBlur={props.handleBlur}
                      value={props.values.password}
                      name="password"
                    />
                    {props.errors.password && (
                      <p className="m-1 text-danger">{props.errors.password}</p>
                    )}
                    <button className="btn btn-primary mt-3" type="submit">
                      Login
                    </button>
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
