
import { StepLogger } from '../../components/logs/stepLogger';
import { WaitHelper } from '../../components/wait-helper';
import { LoginPageHelper } from '../../pages/login/login-page.helper';
import { HomePageHelper } from '../../pages/home/home-page.helper';
import { PlayerPageHelper } from '../../pages/player/player-page.helper';
import { PageHelper } from '../../components/page-helper';
import { SettingsPageHelper } from '../../pages/settings/settings-page.helper';
import { SuiteNames } from '../../components/suite-names';
import { BillingPageHelper } from '../../pages/billing/billing-page.helper';

describe(SuiteNames.regression, () => {
    let stepLogger: StepLogger;
    const uniqueName = PageHelper.randomStringNoINT(4);


    beforeAll(async () => {
        stepLogger = new StepLogger();
    });

    afterAll(async () => {
        stepLogger = new StepLogger();
    });
        it('tv mucho login/checking without two min wait', async () => {
            await browser.url(`/`);
            await WaitHelper.pause();
            // await browser.setWindowSize(600, 800);
            // await WaitHelper.pause(1000);
            // await browser.saveScreenshot(`././shots/${480360}.png`);

            await LoginPageHelper.clickOnSocialLogin(stepLogger);
            await HomePageHelper.verifySignUpIsPresent(stepLogger);
            await PlayerPageHelper.verifyFiveMinuteCounter(stepLogger);

            await HomePageHelper.clickOnSignUp(stepLogger);
            await LoginPageHelper.clickOnEmail(stepLogger);
            await LoginPageHelper.enterEmailRegistrationData(stepLogger, uniqueName, uniqueName, uniqueName);

            await PageHelper.refreshPage();
            await PlayerPageHelper.verifyOneHourIsDisplayed(stepLogger);
            await PlayerPageHelper.clickOnBackButton(stepLogger);
            await HomePageHelper.verifyHomePage(stepLogger);
            await HomePageHelper.clickOnUpgrade(stepLogger);
            await SettingsPageHelper.verifyMemberShipWrapper(stepLogger);
            await SettingsPageHelper.getPriceFromUpgradeWrapper();
            const duration = await SettingsPageHelper.getDurationFromUpgradeWrapper();
            await SettingsPageHelper.clickOnUpgrade(stepLogger);

            await BillingPageHelper.verifyDurationText(stepLogger, duration);
            await BillingPageHelper.fillBillingAddress(stepLogger);

            await BillingPageHelper.verifyCheckoutPage(stepLogger);
            await BillingPageHelper.fillCardCredentials(stepLogger);
            // verify payment success
            await WaitHelper.pause();

        })
    })

