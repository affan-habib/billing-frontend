import * as Yup from "yup";
const getSchema = (model = {}) => {
  const {
    invoiceId = "4154",
    customerId = "null",
    name = "John Doe",
    contactNumber = "0166666666",
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
