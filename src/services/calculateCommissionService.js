class _calculateCommissionService {
  getCommission(cash, commissionPercentage) {
    const number = (cash / 100) * commissionPercentage;
    return Math.round(number * 100) / 100;
  }
}

export const calculateCommissionService = new _calculateCommissionService();
