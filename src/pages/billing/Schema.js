import * as Yup from "yup";
let date = new Date();
let components = [date.getMonth(), date.getYear().toString().substr(-1)];
const getSchema = (model = {}) => {
  const {
    invoiceId = components.join("") + Math.random().toString(36).slice(-2),
    customerId = "",
    name = "",
    contactNumber = "",
    address = "",
    age = 45,
    gender = "MALE",
    itemTotal = 0,
    discountAmount = 0,
    paidAmount = 0,
    dueAmount = 0,
    itemList = [],
  } = model;

  return {
    invoiceId,
    customerId,
    name,
    contactNumber,
    address,
    age,
    gender,
    itemTotal,
    discountAmount,
    paidAmount,
    dueAmount,
    itemList,
  };
};

const validator = Yup.object().shape({
  // date: Yup.string(),
  // orgName: Yup.string(),
});

export { getSchema, validator };
