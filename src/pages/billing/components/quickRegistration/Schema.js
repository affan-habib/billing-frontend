import * as Yup from "yup";
let date = new Date();
let components = [date.getHours(), date.getMinutes().toString()];
const getSchema = (model = {}) => {
  const {
    id = components.join("") + Math.random().toString(36).slice(-2),
    name = "",
    age = 21,
    contactNumber = "",
    gender = "MALE",
    email = "",
    address = "",
    clientType = "Corporate",
  } = model;

  return {
    id,
    name,
    gender,
    contactNumber,
    age,
    email,
    address,
    clientType,
  };
};
const mobileRegEx = /^(?:\+88|0088)?(01[3-9]\d{8})$/;
const validator = Yup.object().shape({
  contactNumber: Yup.string()
    .required("Required")
    .matches(mobileRegEx, "Invalid mobile number"),
});

export { getSchema, validator };
