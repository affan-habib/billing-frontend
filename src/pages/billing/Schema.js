import * as Yup from "yup";
const getSchema = (model = {}) => {
  const {
    date = "10-10-10",
    gender = "Male",
    age = 28,
    patientAge = "Male",
    patientContactNo = "01798984444",
    term = 1,
    payer = "Affan Habib",
    billNo = "452154785",
    referredBy = "Dr. Kabir hossain",
    agent = "Popular hospital",
    orderDetailList = [],
    finalPrice = 0,
    finalDiscount = 0,
    advance = 0,
    customerId = 162,
    facilityId = 164,
    patientId = 82,
  } = model;

  return {
    date,
    customerId,
    facilityId,
    gender,
    age,
    patientContactNo,
    term,
    payer,
    billNo,
    referredBy,
    agent,
    orderDetailList,
    finalPrice,
    finalDiscount,
    advance,
    patientId,
  };
};

const validator = Yup.object().shape({
  // date: Yup.string(),
  // orgName: Yup.string(),
});

export { getSchema, validator };
