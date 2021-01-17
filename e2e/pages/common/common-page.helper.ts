import { StepLogger } from '../../components/logs/stepLogger';
import { PageHelper } from '../../components/page-helper';
import { CommonPageConstants } from './common-page.constants';
import { CommonPage } from './common.po';
import { ElementHelper } from '../../components/element-helper';
import { WaitHelper } from '../../components/wait-helper';
import { ExpectationHelper } from '../../components/expectation-helper';
export class CommonPageHelper {

    static async closePopUp() {
        if (await PageHelper.isElementDisplayed(await CommonPage.popUp()) === true) {
            await ElementHelper.clickOnElement(await CommonPage.popUpClose());
        }
    }

    static async verifypageTitle(stepLogger: StepLogger) {
        stepLogger.verification(`verify page title`);
        const text = CommonPageConstants.labels.titleFirst;
        await this.closePopUp();;
        await ExpectationHelper.verifyElementExist(await CommonPage.title(text), 'title', stepLogger);
    }

    static async enterText(stepLogger: StepLogger) {
        stepLogger.step(`enter text into input and click show message`);
        const text = CommonPageConstants.labels.titleFirst;
        await ElementHelper.sendKeys(await CommonPage.userMessageInput(), text);
        await WaitHelper.pause(500);
        await ElementHelper.clickOnElement(await CommonPage.showMessageButton());
    }

    static async verifyTextInDisplay(stepLogger: StepLogger) {
        stepLogger.verification(`verify text is displayed in your message section`);
        const textTitle = CommonPageConstants.labels.titleFirst;
        const getTxt = await PageHelper.getText(await CommonPage.displayText());
        await ExpectationHelper.verifyStringValueEqualTo(getTxt, textTitle, stepLogger);
    }

    static async entetValues(stepLogger: StepLogger) {
        stepLogger.step(`enter values into sum one and sum two, click on total and verify Sum`);
        const first = CommonPageConstants.labels.first;
        const second = CommonPageConstants.labels.second;
        await ElementHelper.sendKeys(await CommonPage.sumOne(), first);
        await ElementHelper.sendKeys(await CommonPage.sumTwo(), second);
        await ElementHelper.clickOnElement(await CommonPage.totalButton());

        const sum = Number(first) + Number(second);
        const expectSum = await PageHelper.getText(await CommonPage.totalSum());
        await ExpectationHelper.verifyNumberValueEqual(sum, Number(expectSum), stepLogger);
    }

    static async verifypageTitleSecond(stepLogger: StepLogger) {
        stepLogger.verification(`verify second page title`);
        const text = CommonPageConstants.labels.titleSecond;
        await this.closePopUp();;
        await ExpectationHelper.verifyElementExist(await CommonPage.title(text), 'title', stepLogger);
    }
    static async enterSubString(stepLogger: StepLogger) {
        stepLogger.step(`enter subtring into search input`);
        const text = await PageHelper.getText(await CommonPage.firstTextLiest());
        await ElementHelper.sendKeys(await CommonPage.leftSearch(), text.substring(0, 5));
        return text;
    }

    static async clickOnSelectAll() {
        await ElementHelper.clickOnElement(await CommonPage.selecAllLeft());
        await WaitHelper.pause(1000);
        await ElementHelper.clickOnElement(await CommonPage.moveRight());
    }

    static async verifyTextMoved(stepLogger: StepLogger, text: string) {
        stepLogger.verification(`veorfy if text is moved or not`);
        await ExpectationHelper.verifyElementIsDisplayed(await CommonPage.rightListText(text), 'moved text', stepLogger);
    }
}