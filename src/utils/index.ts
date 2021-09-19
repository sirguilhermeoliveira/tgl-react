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

export const formatDate = (date: string) => {
  const dd = date[8] + date[9];
  const mm = date[5] + date[6];
  const yy = date[0] + date[1] + date[2] + date[3];
  return `${dd}/${mm}/${yy}`;
};
