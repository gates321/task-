import { SuiteNames } from '../../components/suite-names';
import { StepLogger } from '../../components/logs/stepLogger';
import { PageHelper } from '../../components/page-helper';
import { WaitHelper } from '../../components/wait-helper';
import { HomePageHelper } from '../../pages/home/home-page.helper';
import { LoginPageHelper } from '../../pages/login/login-page.helper';
import { PlayerPageHelper } from '../../pages/player/player-page.helper';

describe(SuiteNames.smoke, () => {
    let stepLogger: StepLogger;
    const uniqueName = PageHelper.randomStringNoINT(4);


    beforeAll(async () => {
        stepLogger = new StepLogger();
    });

    afterAll(async () => {
        stepLogger = new StepLogger();
    });

    it('tv mucho login/checking with two minutes for pop up', async () => {
        await browser.url(`/`);
        await WaitHelper.pause();
        await LoginPageHelper.clickOnSocialLogin(stepLogger);
        await HomePageHelper.verifySignUpIsPresent(stepLogger);
        await PlayerPageHelper.verifyFiveMinuteCounter(stepLogger);
        await WaitHelper.pause(125000);
        await PlayerPageHelper.verifySocialLoginPopUp(stepLogger);
        await HomePageHelper.clickOnSignUp(stepLogger);
        await LoginPageHelper.clickOnEmail(stepLogger);
        await LoginPageHelper.enterEmailRegistrationData(stepLogger, uniqueName, uniqueName, uniqueName);
        // one hour
        await PlayerPageHelper.verifyOneHourIsDisplayed(stepLogger);
    })

})