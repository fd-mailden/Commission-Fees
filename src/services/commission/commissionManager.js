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

  get() {
    if (this.user.operation.currency !== 'EUR') {
      return { error: 'Only supported currency is EUR' };
    }
    const strategy =
      this.strategies[COMMISSIONS_METHODS[this.user.type][this.user.user_type]];
    return { commission: strategy.getCommission() };
  }
}
