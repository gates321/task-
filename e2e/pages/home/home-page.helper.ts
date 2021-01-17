import { PageHelper } from '../../components/page-helper';
import { HomePageConstants } from './home-page.constants';
import { StepLogger } from 'e2e/components/logs/stepLogger';
import { ExpectationHelper } from '../../components/expectation-helper';
import { GlobSelectors } from '../../components/globselectors';
import { ElementHelper } from '../../components/element-helper';


export class HomePageHelper {

    static async verifySignUpIsPresent(stepLogger: StepLogger) {
        stepLogger.verification(`verify sign up now is present in top right side`);
        const signUp = HomePageConstants.attributes.signUpNowClass;

        await ExpectationHelper.verifyElementIsDisplayed(await GlobSelectors.buttonByClassName(signUp), 'sign up now ', stepLogger);
    }

    static async clickOnSignUp(stepLogger: StepLogger) {
        stepLogger.step(`click on sign up in top right corner`);

        await ElementHelper.clickOnElement(await GlobSelectors.buttonByClassName(HomePageConstants.attributes.signUpNowClass));
    }

    static async verifyHomePage(stepLogger: StepLogger) {
        stepLogger.verification(`verify home page/url/selector-tab/live channels heading`);
        const liveChannels = HomePageConstants.labels.liveChannels;
        const tv = HomePageConstants.labels.TV;
        const myMedia = HomePageConstants.labels.myMedia;
        const guide = HomePageConstants.labels.guide;
        const search = HomePageConstants.labels.search;
        const urlCureent = await PageHelper.currentUrl();
        await ExpectationHelper.verifyStringValueContain(urlCureent, 'home', stepLogger);
        await ExpectationHelper.verifyElementIsDisplayed(await GlobSelectors.spanByContainsText(liveChannels), liveChannels, stepLogger);

        await ExpectationHelper.verifyElementIsDisplayed(await GlobSelectors.buttonByTextContains(tv), tv, stepLogger);
        await ExpectationHelper.verifyElementIsDisplayed(await GlobSelectors.buttonByTextContains(myMedia), myMedia, stepLogger);
        await ExpectationHelper.verifyElementIsDisplayed(await GlobSelectors.buttonByTextContains(guide), guide, stepLogger);
        await ExpectationHelper.verifyElementIsDisplayed(await GlobSelectors.buttonByTextContains(search), search, stepLogger);
        await this.rightBlock(stepLogger);
    }

    static async rightBlock(stepLogger: StepLogger) {
        stepLogger.verification(`verify right block, notification/settings menu `);
        const notif = HomePageConstants.attributes.notificationDataHook;
        const sett = HomePageConstants.attributes.settingDataHoook;

        await ExpectationHelper.verifyElementIsDisplayed(await GlobSelectors.buttonByDataHook(notif), 'notification', stepLogger);
        await ExpectationHelper.verifyElementIsDisplayed(await GlobSelectors.buttonByDataHook(sett), 'settings', stepLogger);
    }

    static async clickOnUpgrade(stepLogger: StepLogger) {
        stepLogger.step(`click on upgrade button`);
        await ElementHelper.clickOnElement(await GlobSelectors.buttonByClassName(HomePageConstants.attributes.upgradeClass));
    }
}