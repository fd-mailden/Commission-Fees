export const getCommission = (money, interest) => {
  if (money < 0 || interest < 0) return 0;
  const number = (money / 100) * interest;
  return Math.round(number * 100) / 100;
};
