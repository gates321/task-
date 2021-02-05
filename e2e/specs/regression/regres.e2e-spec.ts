
import { StepLogger } from '../../components/logs/stepLogger';
import { SuiteNames } from '../../components/suite-names';
import { HomePageHelper } from '../../pages/home/home-page.helper';
import { OnboardingPageHelper } from '../../pages/onboarding/onboarding-page.helper';
import { WaitHelper } from '../../components/wait-helper';


describe(SuiteNames.regression, () => {
    let stepLogger: StepLogger;

    beforeAll(async () => {
        stepLogger = new StepLogger();
        await WaitHelper.waitForPageToStable();
    });

    afterAll(async () => {
        stepLogger = new StepLogger();
    });
    it('regression testing for search smartly', async () => {
        await browser.url(`/`);
        await HomePageHelper.clickOnRent(stepLogger);
        await OnboardingPageHelper.verifyOnBoardingPage(stepLogger);
        await WaitHelper.sleeep();
        const sliderCoun = await OnboardingPageHelper.moveSlider(stepLogger);
        const price = await OnboardingPageHelper.getPrice(stepLogger);
        await OnboardingPageHelper.enterText();
        await OnboardingPageHelper.clickOnBikeIcon();
        await OnboardingPageHelper.nextButton();
        await OnboardingPageHelper.checkLevelsAndClickPLus(stepLogger);
        await OnboardingPageHelper.checkLevelAndClickMinus(stepLogger);
        await WaitHelper.sleeep();
        const values = await OnboardingPageHelper.getValues(stepLogger);
        await OnboardingPageHelper.goToCafeBars(stepLogger);
        await OnboardingPageHelper.goToParks(stepLogger);
        await OnboardingPageHelper.goToGym(stepLogger);
        await OnboardingPageHelper.goToShops(stepLogger);
        await OnboardingPageHelper.goToShops(stepLogger);
        await OnboardingPageHelper.clickOnLastDate(stepLogger);
        await OnboardingPageHelper.verifyModalOpenesAndCLickShowResults(stepLogger);
        await OnboardingPageHelper.verifyValuesAreCorrect(stepLogger, sliderCoun, price, values);

        //await WaitHelper.sleeep();
        // await OnboardingPageHelper.clickOnBikeIcon();
    })
})

