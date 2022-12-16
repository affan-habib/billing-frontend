import * as Yup from "yup";
const getSchema = (model = {}) => {
  let date = new Date();
  let components = [date.getHours(), date.getMinutes().toString()];
  const {
    id = Math.random().toString(36).slice(-2) + components.join(""),
    name = "",
    age = 21,
    contactNumber = "",
    gender = "MALE",
  } = model;

  return {
    id,
    name,
    gender,
    age,
    contactNumber,
  };
};

const validator = Yup.object().shape({
  id: Yup.string().required("Required"),
  name: Yup.string().required("Required"),
  gender: Yup.string().required("Required"),
  age: Yup.number().required("Required"),
  contactNumber: Yup.string().required("Required"),
});

export { getSchema, validator };
