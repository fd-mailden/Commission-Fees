class _calculateCommissionService {
  getCommission(cash, commissionPercentage) {
    const commissionFee = (cash / 100) * commissionPercentage;
    const centsPerEuro = 100;
    return Math.ceil(commissionFee * centsPerEuro) / centsPerEuro;
  }
}

export const calculateCommissionService = new _calculateCommissionService();
