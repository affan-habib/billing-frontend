import * as Yup from "yup";
const getSchema = (model = {}) => {
  const {
    invoiceId = "4154",
    customerId = null,
    name = "AFfan",
    contactNumber = "44444444",
    age = 10,
    gender = "MALE",
    itemTotal = 123,
    discountAmount = 123,
    paidAmount = 123,
    dueAmount = 123,
    itemList = [1, 3],
  } = model;

  return {
    invoiceId,
    customerId,
    name,
    contactNumber,
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
