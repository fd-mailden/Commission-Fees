import { configurationsState } from '../../states/configurations/configurationsState';
import { getCommission } from '../../helpers/getCommission';
import { SITUATION } from '../../consts/commissions';

export class cashInNaturalService {
  constructor(userData) {
    this.config = configurationsState.get(SITUATION.cashInNatural);
    this.userData = userData;
  }

  getCommission() {
    const commission = getCommission(
      this.userData.operation.amount,
      this.config.percents,
    );
    if (commission > this.config.max.amount) return this.config.max.amount;
    return commission;
  }
}
