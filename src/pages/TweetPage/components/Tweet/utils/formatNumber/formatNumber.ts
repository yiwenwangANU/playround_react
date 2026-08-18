const formatNumber = (data: number) => {
  if (data >= 10000) {
    return Intl.NumberFormat("en", {
      notation: "compact",
      maximumFractionDigits: 1,
    }).format(data);
  }
  return Intl.NumberFormat("en-US").format(data);
};

export default formatNumber;
