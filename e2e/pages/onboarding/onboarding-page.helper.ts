import { StepLogger } from '../../components/logs/stepLogger';
import { PageHelper } from '../../components/page-helper';
import { ExpectationHelper } from '../../components/expectation-helper';
import { ElementHelper } from '../../components/element-helper';
import { OnboardingPage } from './onboarding.po';
import { OnboardingPageConstants } from './onboarding-page.constants';
import { GlobSelectors } from '../../components/globselectors';
export class OnboardingPageHelper {

    static async verifyOnBoardingPage(stepLogger: StepLogger) {
        stepLogger.verification(`veirfy on boarding page is opened`);
        const url = await PageHelper.currentUrl();
        await ExpectationHelper.verifyStringValueContain(url, 'onboarding', stepLogger);

    }

    static async moveSlider(stepLogger: StepLogger) {
        stepLogger.step(`move slider right and return bedroom number`)
        const bedroom = OnboardingPageConstants.label.bedroom;
        await ElementHelper.moveRight(await OnboardingPage.sliderRight(bedroom));
        const count = await PageHelper.getText(await OnboardingPage.bedRoomCount(bedroom));
        const countLast = PageHelper.lastCharacter(count);
        return countLast;
    }

    static async getPrice(stepLogger: StepLogger) {
        stepLogger.step(`get price `)
        const budget = OnboardingPageConstants.label.budget;
        const count = await PageHelper.getText(await OnboardingPage.bedRoomCount(budget));
        return count;
    }

    static async enterText() {
        await ElementHelper.sendKeys(await GlobSelectors.inpputById(OnboardingPageConstants.arrtibutes.inputID), 'test');
        await ElementHelper.clickOnElement(await OnboardingPage.dropDownOption);
    }

    static async clickOnBikeIcon() {
        await ElementHelper.clickOnElement(await OnboardingPage.bikeIcond);
    }

    static async nextButton() {
        await ElementHelper.clickWithJS(await GlobSelectors.buttonByClassName(OnboardingPageConstants.arrtibutes.nextButtonClass));
    }

}