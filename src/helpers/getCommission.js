export const getCommission = (cash, commissionPercentage) => {
  if (cash < 0 || commissionPercentage < 0) return 0;
  const number = (cash / 100) * commissionPercentage;
  return Math.round(number * 100) / 100;
};
