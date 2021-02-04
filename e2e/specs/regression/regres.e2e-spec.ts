
import { StepLogger } from '../../components/logs/stepLogger';
import { SuiteNames } from '../../components/suite-names';
import { HomePageHelper } from '../../pages/home/home-page.helper';
import { OnboardingPageHelper } from '../../pages/onboarding/onboarding-page.helper';
import { WaitHelper } from '../../components/wait-helper';


describe(SuiteNames.regression, () => {
    let stepLogger: StepLogger;

    beforeAll(async () => {
        stepLogger = new StepLogger();
    });

    afterAll(async () => {
        stepLogger = new StepLogger();
    });
    it('regression testing for search smartly', async () => {
        await browser.url(`/`);
        await HomePageHelper.clickOnRent(stepLogger);
        await OnboardingPageHelper.verifyOnBoardingPage(stepLogger);
        await WaitHelper.sleeep();
        await OnboardingPageHelper.moveSlider(stepLogger);
        await OnboardingPageHelper.getPrice(stepLogger);
        await OnboardingPageHelper.enterText();
        await OnboardingPageHelper.clickOnBikeIcon();
        await OnboardingPageHelper.nextButton();
        await WaitHelper.sleeep();
        // await OnboardingPageHelper.clickOnBikeIcon();
    })
})

