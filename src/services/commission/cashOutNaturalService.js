import { configurationsState } from '../../states/configurations/configurationsState';
import { userStateService } from '../userStateService';
import { userService } from '../userService';
import { SITUATION } from '../../consts/commissions';
import { calculateCommissionService } from '../calculateCommissionService';

export class cashOutNaturalService {
  constructor(userData) {
    this.config = configurationsState.get(SITUATION.cashOutNatural);
    this.userData = userData;
  }

  getCommission() {
    const { getCommission } = calculateCommissionService;
    const user = userStateService.getUser(this.userData.user_id);
    const operationAmount = this.userData.operation.amount;
    const limit = new userService(
      user,
      this.userData.date,
      this.config.week_limit.amount,
    ).currentLimit();

    const cash = operationAmount - limit;
    const freeCharge = limit - operationAmount;

    userStateService.addUser(
      this.userData.user_id,
      this.userData.date,
      operationAmount > limit ? 0 : freeCharge,
    );
    const commissionData = {
      cash: operationAmount > limit ? cash : freeCharge,
      percent: operationAmount > limit ? this.config.percents : 0,
    };
    return getCommission(commissionData.cash, commissionData.percent);
  }
}
