const isEqualsJson = (obj1, obj2) => {
  let keys1 = Object.keys(obj1);
  let keys2 = Object.keys(obj2);

  let isTrue =
    keys1.length === keys2.length &&
    Object.keys(obj1).every((key) => obj1[key] == obj2[key]);

  return isTrue;
};

export default isEqualsJson;
