import Cookies from "js-cookie";

class AuthUserHelper {
  getUser() {
    const user = localStorage.getItem("auth_user")
      ? JSON.parse(localStorage.getItem("auth_user"))
      : {};

    return user;
  }

  getUserId() {
    const user =
      localStorage.getItem("auth_user") &&
      JSON.parse(localStorage.getItem("auth_user"));
    return user.id || null;
  }

  getUserName() {
    const user = this.getUser();
    return user.username || null;
  }

  getUserFullName() {
    const user =
      localStorage.getItem("auth_user") &&
      JSON.parse(localStorage.getItem("auth_user"));
    return `${user.firstName} ${user.lastName}` || null;
  }

  getRoles() {
    const roles =
      localStorage.getItem("auth_roles") !== null &&
        localStorage.getItem("auth_roles") &&
        localStorage.getItem("auth_roles") !== ""
        ? JSON.parse(localStorage.getItem("auth_roles"))
        : [];
    return roles;
  }
  getDynamicForm() {
    const formPermission = localStorage.getItem("dynamic-form");
    return formPermission;
  }

  getRolesID() {
    const rolesID = localStorage.getItem("auth_role_id")
      ? JSON.parse(localStorage.getItem("auth_role_id"))
      : [];
    return rolesID || [];
  }

  getRolesId() {
    const roleName = localStorage.getItem("auth_role_id")
      ? JSON.parse(localStorage.getItem("auth_role_id"))
      : [];
    return roleName || [];
  }

  getInstituteTypeId() {
    const instituteTypeId = localStorage.getItem("institute_response")
      ? JSON.parse(localStorage.getItem("institute_response"))
      : [];
    return instituteTypeId.instituteTypeId || [];
  }

  isInstituteHead() {
    return this.getRoles().includes("InstituteHead");
  }

  isDEO() {
    return this.getRoles().includes("DEO");
  }
  isUSEO() {
    return this.getRoles().includes("USEO");
  }

  isLoggedIn() {
    return (
      Cookies.get("access_token") && Cookies.get("access_token").length > 0
    );
  }

  isInstitute() {
    const institute =
      localStorage.getItem("auth_roles") !== null &&
        localStorage.getItem("auth_roles") &&
        localStorage.getItem("auth_roles") !== ""
        ? JSON.parse(localStorage.getItem("institute_response"))
        : null;

    return institute?.instituteId > 0 || institute?.instituteId !== null
      ? true
      : false;
  }

  saveLoginData(authData) {
    // save token
    let token = authData.accessToken || "";
    Cookies.set("access_token", token, {
      expires: 15,
      //sameSite: "None",
      //secure: true,
    });

    // save user
    localStorage.setItem("auth_user", JSON.stringify(authData.user));

    localStorage.setItem(
      "institute_response",
      JSON.stringify(authData.instituteResponse)
    );

    // save user roles
    let roles = [];
    authData.roles.forEach((item) => {
      roles.push(item.roleName);
    });
    localStorage.setItem("auth_roles", JSON.stringify(roles));
    localStorage.setItem("dynamic-form", true);

    var roleId = "";
    //var userId = "";
    var DEO = "";
    var USEO = "";
    var AP = "";

    authData.roles.forEach((item) => {
      if (item.roleName !== "default-roles-banbeis") roleId = item.roleId;
      if (item.roleName === "DEO") DEO = item.roleName;
      if (item.roleName === "AP") AP = item.roleName;
      if (item.roleName === "USEO" || item.roleName === "TEO")
        USEO = item.roleName;
    });
    localStorage.setItem("AP", JSON.stringify(AP));
    localStorage.setItem("DEO", JSON.stringify(DEO));
    localStorage.setItem("USEO", JSON.stringify(USEO));
    localStorage.setItem("auth_role_id", JSON.stringify(roleId));
  }

  removeLoginData() {
    Cookies.set("access_token", "");
    localStorage.setItem("auth_user", "");
    localStorage.setItem("auth_roles", "");
    localStorage.setItem("auth_role_id", "");
    //localStorage.setItem("institute_response", "");
    localStorage.setItem("DEO", "");
    localStorage.setItem("USEO", "");
    localStorage.setItem("AP", "");
    //localStorage.setItem("survey-info", "");
    localStorage.removeItem("survey-info", "");
    localStorage.removeItem("institute_response", "");
    localStorage.removeItem("dynamic-form", false);
  }
}

export const AuthUser = new AuthUserHelper();
