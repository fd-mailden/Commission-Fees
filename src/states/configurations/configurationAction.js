import { SITUATION } from '../../consts/commissions';
import { CommissionApiService } from '../../api/requests';
import { configurationsState } from './configurationsState';

export const configurationAction = async () => {
  try {
    const configsName = {
      0: SITUATION.cashInNatural,
      1: SITUATION.cashOutNatural,
      2: SITUATION.cashOutJuridical,
    };
    const configs = await Promise.all([
      CommissionApiService.getCashInConfiguration(),
      CommissionApiService.getCashOutNaturalConfiguration(),
      CommissionApiService.getCashOutJuridicalConfiguration(),
    ]);
    configs.map((config, index) =>
      configurationsState.set(configsName[index], config),
    );
  } catch (e) {
    console.log('something went wrong !!!');
  }
};
