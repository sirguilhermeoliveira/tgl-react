export const formatNumberCartTotal = (number: number) => {
  return number.toFixed(2).replace('.', ',');
};

export const formatNumberCart = (number: number) => {
  return number.toString();
};

export const formatNumber = (number: number) => {
  if (number < 10) return '0' + number;
  return number;
};
