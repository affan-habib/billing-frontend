import * as Yup from "yup";
const getSchema = (model = {}) => {
  const {
    id = 0,
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
    contactNumber
  };
};

const validator = Yup.object().shape({
  id : Yup.string().required("Required"),
  name : Yup.string().required("Required"),
  gender : Yup.string().required("Required"),
  age : Yup.number().required("Required"),
  contactNumber : Yup.string().required("Required"),
});

export { getSchema, validator };
