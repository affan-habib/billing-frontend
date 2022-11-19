import * as Yup from "yup";
const getSchema = (model = {}) => {
  const {
    id = 0,
    name = "Service Name",
    age = 61,
    contactNumber = 0,
    gender = "Male",
   
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
