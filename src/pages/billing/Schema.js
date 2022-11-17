import * as Yup from "yup";
const getSchema = (model = {}) => {
  const {
    date = "10-10-10",
    billFrom = "OPD",
    term = 1,
    payer = "Affan Habib",
    billNo = "452154785",
    referredBy = "Dr. Kabir hossain",
    agent = "Popular hospital",
    orderDetailList = [],
    finalPrice = 0,
    finalDiscount = 0,
    advance = 0,
    customerId = 62,
    facilityId = 76,
    patientId = 82,
    sponsorBy = "string",
  } = model;

  return {
    customerId,
    facilityId,
    billFrom,
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
    sponsorBy,
  };
};

const validator = Yup.object().shape({
  // date: Yup.string(),
  // orgName: Yup.string(),
});

export { getSchema, validator };
