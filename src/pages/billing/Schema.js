import * as Yup from "yup";
const getSchema = (model = {}) => {
  const {
    orderDetailList = [],
    total = 0,
    discount = 0,
    advance = 0,
    patientId = "6379aa33a1dee234eb1831b7",
  } = model;

  return {
    orderDetailList,
    total,
    discount,
    advance,
    patientId,
  };
};

const validator = Yup.object().shape({
  // date: Yup.string(),
  // orgName: Yup.string(),
});

export { getSchema, validator };
