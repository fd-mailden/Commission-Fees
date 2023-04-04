class _outputService {
  outputInConsole(commissionData) {
    commissionData.forEach((commission) => {
      commission.error
        ? console.log(commission.error)
        : console.log(commission.commission.toFixed(2));
    });
  }
}

export const outputService = new _outputService();
