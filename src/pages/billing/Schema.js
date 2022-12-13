import * as Yup from "yup";
const getSchema = (model = {}) => {
  const {
    orderDetailList = [],
    total = 0,
    discount = 0,
    advance = 0,
    customerId = "639826cc554afd0007dd0ba5",
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
