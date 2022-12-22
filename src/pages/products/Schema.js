import * as Yup from "yup";
let date = new Date();
let components = [date.getMonth(), date.getYear().toString().substr(-1)];
const getSchema = (model = {}) => {
  const {
    id = components.join("") + Math.random().toString(36).slice(-2),
    serviceName = "",
    category = "",
    basePrice = 0,
    expiryDate = 0,
    vatPerUnit = 0,
    discountPerUnit = 0,
    stock = 12,
  } = model;

  return {
    id,
    serviceName,
    category,
    basePrice,
    discountPerUnit,
    expiryDate,
    vatPerUnit,
    stock,
  };
};

const validator = Yup.object().shape({
  // firstName: Yup.string().required("First Name is required"),
  // patientAge: Yup.number().required("Age is required"),
  // patientContactNo: Yup.number().required("Mobile Number is required"),
  // gender: Yup.string().required("Gender is required"),
  //middleName: Yup.string().required('Middle Name is required'),
  //lastName: Yup.string().required('Last Name is required'),
  //patientAge: Yup.string().required('Age is required'),
  // customerId : Yup.string(),
  //   active : Yup.string(),
  //   userIp : Yup.string(),
  //   userId : Yup.string(),
  //   orgImage : Yup.string(),
  //   city : Yup.string(),
  //   patientContactNo : Yup.string(),
  //   country : Yup.string(),
  //   currency : Yup.string(),
  //   email : Yup.string(),
  //   fax : Yup.string(),
  //   orgAdd : Yup.string(),
  //   phone : Yup.string(),
  //   signatory : Yup.string(),
  //   state : Yup.string(),
  //   tin : Yup.string(),
  //   url : Yup.string(),
  //   vatRegNo : Yup.string(),
  //   orgName : Yup.string(),
  //   orgDsep : Yup.string(),
  //   centralZId : Yup.string(),
  //   musakno : Yup.string(),
  //   branch : Yup.string(),
  //   central : Yup.string(),
  //   curr : Yup.string(),
  //   madd : Yup.string(),
  //   file : Yup.string(),
  //   zutime : Yup.string(),
  //   xcountry : Yup.string(),
  //   xresource : Yup.string(),
  //   dformat : Yup.string(),
  //   zemail : Yup.string(),
});

export { getSchema, validator };
