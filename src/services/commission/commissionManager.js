import { COMMISSIONS_METHODS } from '../../consts/commissions';

import { cashInNaturalService } from './cashInNaturalService';
import { cashOutNaturalService } from './cashOutNaturalService';
import { cashOutJuridicalService } from './cashOutJuridicalService';

export class commissionManager {
  constructor(user) {
    this.user = user;

    this.strategies = {
      cashInNatural: new cashInNaturalService(user),
      cashInJuridical: new cashInNaturalService(user),
      cashOutNatural: new cashOutNaturalService(user),
      cashOutJuridical: new cashOutJuridicalService(user),
    };
  }

  getCommission() {
    const strategy =
      this.strategies[COMMISSIONS_METHODS[this.user.type][this.user.user_type]];
    return strategy.getCommission();
  }
}
