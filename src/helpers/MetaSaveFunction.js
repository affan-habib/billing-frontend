const MetaSavedFunction = (metaData, outOfMeta = false) => {
  return outOfMeta === false
    ? !metaData?.data?.meta?.isFinallySubmitted &&
      metaData?.data?.meta?.isPreviousSaved
      ? true
      : false
    : !metaData?.meta?.subMeta?.isFinallySubmitted &&
      metaData?.meta?.subMeta?.isPreviousSaved
    ? true
    : false;
};

export default MetaSavedFunction;
