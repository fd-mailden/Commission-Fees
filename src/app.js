import { readJsonFile } from './helpers/readerFile';
import { outputService } from './services/outputService';
import { commissionManager } from './services/commission/commissionManager';
import { configurationAction } from './states/configurations/configurationAction';

(async function app() {
  try {
    if (!process.argv[2]) throw new Error('Path to file NOT_FOUND !!!');
    await configurationAction();
    const dataFile = await readJsonFile(process.argv[2]);
    if (dataFile) {
      const commissionList = dataFile.map((user) =>
        new commissionManager(user).getCommission(),
      );
      outputService.outputInConsole(commissionList);
    }
  } catch (e) {
    console.log('Error: ' + e);
  }
})();
