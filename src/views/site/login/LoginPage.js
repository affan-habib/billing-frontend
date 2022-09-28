import { Formik } from "formik/dist/index";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router";
import { AuthUser } from "../../../helpers/AuthUser";
import { UrlBuilder } from "../../../helpers/UrlBuilder";
import { callApi, selectApi } from "../../../reducers/apiSlice";
import { Login } from "./Login";
import LoginForm from "./LoginForm";

const LoginPage = () => {
  const dispatch = useDispatch();

  const {
    loading,
    authData = {
      data: {},
    },
  } = useSelector(selectApi);

  if (authData.accessToken !== undefined) {
    AuthUser.saveLoginData(authData);
    return <Navigate to='/' />;
  }

  return (
    <main>
      {loading && (
        <div style={{ position: "fixed" }}>
          <div
            className="d-flex align-items-center justify-content-center"
            style={{ position: "relative" }}
          >
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        </div>
      )}

      <Formik
        initialValues={Login}
        enableReinitialize={true}
        validationSchema={Login.validator()}
        onSubmit={(values, { resetForm }) => {
          dispatch(
            callApi({
              operationId: UrlBuilder.authApi("login"),
              output: "authData",
              parameters: {
                method: "POST",
                body: Login.toString(values),
              },
            })
          );

          /**
           * Reset form data.
           */
          // resetForm({});
        }}
      >
        <LoginForm />
      </Formik>
    </main>
  );
};

export default LoginPage;
