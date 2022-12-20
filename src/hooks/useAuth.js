import React from "react";
import Cookies from "js-cookie";

const useAuth = () => {
  const context = Cookies.get("accessToken") ? true : false;
  return context;
};

export default useAuth;
