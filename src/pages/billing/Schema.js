import * as Yup from "yup";
const getSchema = (model = {}) => {
  const {
    name = "Affan habib",
    gender = "male",
    contactNumber = "452",
    orderDetailList = [],
    total = 0,
    discount = 0,
    advance = 0,
    customerId = "",
  } = model;

  return {
    orderDetailList,
    total,
    discount,
    advance,
    customerId,
  };
};

const validator = Yup.object().shape({
  // date: Yup.string(),
  // orgName: Yup.string(),
});

export { getSchema, validator };
