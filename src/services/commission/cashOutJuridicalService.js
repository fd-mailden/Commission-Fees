import { configurationsState } from '../../states/configurations/configurationsState';
import { SITUATION } from '../../consts/commissions';
import { calculateCommissionService } from '../calculateCommissionService';

export class cashOutJuridicalService {
  constructor(userData) {
    this.config = configurationsState.get(SITUATION.cashOutJuridical);
    this.userData = userData;
  }

  getCommission() {
    const { getCommission } = calculateCommissionService;
    const commission = getCommission(
      this.userData.operation.amount,
      this.config.percents,
    );
    if (commission < this.config.min.amount) return this.config.min.amount;
    return commission;
  }
}
