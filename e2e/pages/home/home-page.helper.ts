import { StepLogger } from '../../components/logs/stepLogger';
import { ElementHelper } from '../../components/element-helper';
import { HomePage } from './home.po';
import { WaitHelper } from '../../components/wait-helper';

export class HomePageHelper {

    static async clickOnRent(stepLogger: StepLogger) {
        stepLogger.step(`click on rent button`);
        await ElementHelper.clickWithJS(await HomePage.rentButton);
    }
}
