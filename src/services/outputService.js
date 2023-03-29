class _outputService {
  outputInConsole(commissionData) {
    commissionData.map((item) => console.log(item.toFixed(2)));
  }
}
export const outputService = new _outputService();
