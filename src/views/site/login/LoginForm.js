import { Form } from "formik/dist/index";
import InputField from "../../../components/form/InputField";
import bg from "../../../assets/image.png";
const LoginForm = () => {
  return (
    <Form>
      <div className="container">
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
              <h5 className="text-primary text-uppercase">
                Sign in to your account
              </h5>

              <div>
                <div>
                  <div className="mb-2">
                    <InputField
                      className="input-text"
                      label="User Name"
                      name="email"
                      type="text"
                      placeholder="Enter Your Username"
                    />
                  </div>
                  <div className="mb-2 d-flex flex-column align-items-start form-group form-box">
                    <InputField
                      label="Password"
                      className="input-text"
                      name="password"
                      type="password"
                      placeholder="Enter Your Password"
                    />
                  </div>

                  <div className="form-group checkbox clearfix">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="rememberMe"
                      />
                      <label className="form-check-label" htmlFor="rememberMe">
                        Remember me
                      </label>
                    </div>
                    <a href="/">
                      Forgot Password
                    </a>
                  </div>
                  <button className="mt-2 btn btn-primary" type="submit">
                    Login
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Form>
  );
};

export default LoginForm;
