import { configurationsState } from '../../states/configurations/configurationsState';
import { getCommission } from '../../helpers/getCommission';
import { SITUATION } from '../../consts/commissions';

export class cashOutJuridicalService {
  constructor(userData) {
    this.config = configurationsState.get(SITUATION.cashOutJuridical);
    this.userData = userData;
  }

  getCommission() {
    const commission = getCommission(
      this.userData.operation.amount,
      this.config.percents,
    );
    if (commission < this.config.min.amount) return this.config.min.amount;
    return commission;
  }
}
