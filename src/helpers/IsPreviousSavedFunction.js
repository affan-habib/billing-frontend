const IsPreviousSavedFunction = (metaData, outOfMeta = false) => {
  return outOfMeta == false
    ? metaData?.data?.meta?.isPreviousSaved
      ? true
      : false
    : metaData?.meta?.subMeta?.isPreviousSaved
    ? true
    : false;
};

export default IsPreviousSavedFunction;
