import * as Yup from "yup";
const getSchema = (model = {}) => {
  const {
    billFrom = "OPD",
    term = 1,
    payer = "Affan Habib",
    referredBy = "Dr. Kabir hossain",
    agent = "Popular hospital",
    orderDetailList = [],
    total = 0,
    discount = 0,
    advance = 0,
    customerId = 62,
    facilityId = 76,
    patientId = 107,
    sponsorBy = "string",
  } = model;

  return {
    customerId,
    facilityId,
    billFrom,
    term,
    payer,
    referredBy,
    agent,
    orderDetailList,
    // total,
    discount,
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
