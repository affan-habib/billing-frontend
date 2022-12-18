import React from "react";
import Cookies from "js-cookie";

const useAuth = () => {
  const context = Cookies.get("accessToken");
  return context;
};

export default useAuth;
