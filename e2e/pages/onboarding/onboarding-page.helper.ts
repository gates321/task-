import { StepLogger } from '../../components/logs/stepLogger';
import { PageHelper } from '../../components/page-helper';
import { ExpectationHelper } from '../../components/expectation-helper';
import { ElementHelper } from '../../components/element-helper';
import { OnboardingPage } from './onboarding.po';
import { OnboardingPageConstants } from './onboarding-page.constants';
import { GlobSelectors } from '../../components/globselectors';
import { WaitHelper } from '../../components/wait-helper';
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

    static async checkLevelsAndClickPLus(stepLogger: StepLogger) {
        stepLogger.step(`check levels of rate and click pluss button`);
        await WaitHelper.sleeep(2000);
        const existLevel = await OnboardingPage.levelCounts;
        await ElementHelper.clickWithJS(await OnboardingPage.plusButton);
        const actualLevel = await OnboardingPage.levelCounts;
        await ExpectationHelper.verifyValueGraterThan(actualLevel.length, existLevel.length, stepLogger)
        await this.clickNextButtonByClass();
    }

    static async checkLevelAndClickMinus(stepLogger: StepLogger) {
        stepLogger.step(`check schools page`)
        await WaitHelper.sleeep();
        await WaitHelper.waitForElementToBePresent(await GlobSelectors.h2TagByTextContains(OnboardingPageConstants.label.schools));
        await this.clickNextButtonByClass();
    }

    static async clickNextButtonByClass() {
        await ElementHelper.clickWithJS(await OnboardingPage.nextButton);
    }

    static async getValues(stepLogger: StepLogger) {
        await ExpectationHelper.verifyElementIsDisplayed(await OnboardingPage.multiValues(1), 'presnet', stepLogger);
        await WaitHelper.waitForPageToStable();
        const count = await OnboardingPage.multiValuesCount;
        const empty: string[] = [];
        for (let i = 0; i < count.length; i++) {
            const textValues = await PageHelper.getText(await OnboardingPage.multiValues(i + 1));
            empty.push(textValues);
        }
        const arrSecond = empty;
        console.log(arrSecond);
        return arrSecond;
    }

    static async goToCafeBars(stepLogger: StepLogger) {
        const bars = OnboardingPageConstants.label.cafeBars;
        await this.clickNextButtonByClass();
        await ExpectationHelper.verifyElementIsDisplayed(await GlobSelectors.h2TagByTextContains(bars), bars, stepLogger);
        await WaitHelper.sleeep(2000);
        await this.clickNextButtonByClass();
    }

    static async goToParks(stepLogger: StepLogger) {
        const parks = OnboardingPageConstants.label.parks;
        await ExpectationHelper.verifyElementIsDisplayed(await GlobSelectors.h2TagByTextContains(parks), parks, stepLogger);
        await WaitHelper.sleeep(2000);
        await this.clickNextButtonByClass();
    }


    static async goToGym(stepLogger: StepLogger) {
        const gym = OnboardingPageConstants.label.gym;
        await ExpectationHelper.verifyElementIsDisplayed(await GlobSelectors.h2TagByTextContains(gym), gym, stepLogger);
        await WaitHelper.sleeep(2000);
        await this.clickNextButtonByClass();
    }

    static async goToShops(stepLogger: StepLogger) {
        const shops = OnboardingPageConstants.label.shops;
        await ExpectationHelper.verifyElementIsDisplayed(await GlobSelectors.h2TagByTextContains(shops), shops, stepLogger);
        await WaitHelper.sleeep(2000);
        await this.clickNextButtonByClass();
    }

    static async clickOnLastDate(stepLogger: StepLogger) {
        await ExpectationHelper.verifyElementIsDisplayed(await OnboardingPage.lastElementOfMonth, 'last date', stepLogger);
        await WaitHelper.sleeep(2000);
        await ElementHelper.clickOnElement(await OnboardingPage.lastElementOfMonth);
    }

    static async verifyModalOpenesAndCLickShowResults(stepLogger: StepLogger) {
        stepLogger.verification(`verify results modal opens and click on show results`);
        const modal = OnboardingPageConstants.arrtibutes.modalBody;
        const showResultsButtonCLass = OnboardingPageConstants.arrtibutes.showResultsButtonCLass;

        await ExpectationHelper.verifyElementIsDisplayed(await GlobSelectors.divByClassEquals(modal), 'modal', stepLogger);
        await ElementHelper.clickOnElement(await GlobSelectors.buttonByClassName(showResultsButtonCLass));

    }

    static async verifyValuesAreCorrect(stepLogger: StepLogger, bedroomNum: string, priceNum: string, school: string[]) {
        stepLogger.verification(`verify values are correct`);
        await ExpectationHelper.verifyElementIsDisplayed(await OnboardingPage.studio(bedroomNum), bedroomNum, stepLogger);
        await ExpectationHelper.verifyElementIsDisplayed(await GlobSelectors.paragraphByText(priceNum), priceNum, stepLogger);
        for (let i = 0; i < school.length; i++) {
            await ExpectationHelper.verifyElementIsDisplayed(await GlobSelectors.divByText(school[i].toString()), school[i].toString(), stepLogger);
        }
    }

}