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
