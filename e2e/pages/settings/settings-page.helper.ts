import { StepLogger } from '../../components/logs/stepLogger';
import { ExpectationHelper } from '../../components/expectation-helper';
import { GlobSelectors } from '../../components/globselectors';
import { SettingsPageConstants } from './settings-page.constants';
import { SettingsPage } from './settings.po';
import { WaitHelper } from '../../components/wait-helper';
import { PageHelper } from '../../components/page-helper';
import { ElementHelper } from '../../components/element-helper';
export class SettingsPageHelper {

    static async verifyMemberShipWrapper(stepLogger: StepLogger) {
        stepLogger.verification(`verify membership is opened in settings wrapper`);
        const wrpr = SettingsPageConstants.attributes.wrappedDivClass;
        const swtich = SettingsPageConstants.attributes.montYearSwithcCLass;

        await WaitHelper.waitToBeDisplayed(await GlobSelectors.divByClassEquals(wrpr));
        await ExpectationHelper.verifyElementIsDisplayed(await GlobSelectors.divByClassEquals(wrpr), 'wrapper', stepLogger);
        await ExpectationHelper.verifyElementIsDisplayed(await GlobSelectors.divByClassEquals(swtich), 'month year swtich', stepLogger);
        const buttonCount = await SettingsPage.monthYearButton();
        await ExpectationHelper.verifyNumberValueEqual(buttonCount.length, 2, stepLogger);
    }

    static async getPriceFromUpgradeWrapper() {
        const price = await PageHelper.getText(await SettingsPage.roundNumber());
        const decPirce = await PageHelper.getText(await SettingsPage.decNumber());
        const decPricelast = PageHelper.replaceQuotes(decPirce);

        return `${price}, ${decPricelast}`;
    }

    static async clickOnUpgrade(stepLogger: StepLogger) {
        stepLogger.step(`click upgrade on setting wrapper`);
        await ElementHelper.clickOnElement(await SettingsPage.upgradeForExpatTV());
        await WaitHelper.pause(1000);
        await ElementHelper.clickOnElement(await SettingsPage.upgradeForExpatTV());
    }

    static async getDurationFromUpgradeWrapper() {
        const dur = await PageHelper.getText(await SettingsPage.duration());
        const duration = PageHelper.removeFirstCharacter(dur);
        return duration;
    }
}