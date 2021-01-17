import { StepLogger } from '../../components/logs/stepLogger';
import { PageHelper } from '../../components/page-helper';
import { billingPage } from './billing.po';
import { ExpectationHelper } from '../../components/expectation-helper';
import { WaitHelper } from '../../components/wait-helper';
import { billingPageConstants } from './billing-page.constants';
import { ElementHelper } from '../../components/element-helper';
import { GlobSelectors } from '../../components/globselectors';
export class BillingPageHelper {

    static async getTextFromDuration(stepLogger: StepLogger) {
        stepLogger.step(`get text from duration list/make lowercase`);
        const duration = await PageHelper.getText(await billingPage.billingDuration());
        return duration;
    }

    static async verifyDurationText(stepLogger: StepLogger, expDuration: string) {
        stepLogger.verification(`verify duration text 'year' from upgrade page`);
        await WaitHelper.waitNotToBeDisplayed(await billingPage.billingDuration());
        const actDuration = await this.getTextFromDuration(stepLogger);
        await ExpectationHelper.verifyStringValueContain(actDuration.toLowerCase(), expDuration, stepLogger)
    }

    static async fillBillingAddress(stepLogger: StepLogger) {
        stepLogger.step(`fill adddres/city/zip code/country`);
        const address = billingPageConstants.attributes.addressPlaceHolder;
        const city = billingPageConstants.attributes.cityPlaceHolder;
        const country = billingPageConstants.attributes.countryPlaceHolder;
        const zipCode = billingPageConstants.attributes.postalCodePlaceHolder;

        await WaitHelper.pause();
        await ElementHelper.sendKeys(await GlobSelectors.inputByPlaceHolder(address), 'Tbilisi');
        await ElementHelper.sendKeys(await GlobSelectors.inputByPlaceHolder(city), 'Tbilisi');
        await ElementHelper.sendKeys(await GlobSelectors.inputByPlaceHolder(zipCode), '1111');
        await ElementHelper.clickOnElement(await GlobSelectors.inputByPlaceHolder(country));
        await WaitHelper.pause(1000);
        await ElementHelper.clickOnElement(await billingPage.country());
        await this.clickONNextStep();
    }

    static async clickONNextStep() {
        await ElementHelper.clickOnElement(await GlobSelectors.buttonByClassName(billingPageConstants.attributes.nextStepBTNClass));
    }

    // checkout wrapp
    static async verifyCheckoutPage(stepLogger: StepLogger) {
        stepLogger.verification(`verify checkout page is opened`);
        await ExpectationHelper.verifyElementIsDisplayed(await GlobSelectors.divByIdEquals(billingPageConstants.attributes.checkouID),
            'checkout wrapper', stepLogger);
        await ExpectationHelper.verifyElementIsDisplayed(await GlobSelectors.h2TagByTextContains(billingPageConstants.lables.paymentHeader),
            'Your payment method', stepLogger);
    }

    static async fillCardCredentials(stepLogger: StepLogger) {
        stepLogger.step(`fill card number/month/year/cvv/name`);
        await ElementHelper.sendKeys(await billingPage.cardNumber(), '4242424242424242');
        await ElementHelper.sendKeys(await billingPage.cardName(), 'test name');
        await ElementHelper.sendKeys(await billingPage.cardCVV(), `111`);

        await ElementHelper.clickOnElement(await billingPage.cardYear());
        await WaitHelper.pause(1000);
        await ElementHelper.clickOnElement(await billingPage.firstMonth());

        await ElementHelper.clickOnElement(await billingPage.cardMonth());
        await WaitHelper.pause(1000);
        await ElementHelper.clickOnElement(await billingPage.fourthYear());

        await ElementHelper.clickOnElement(await GlobSelectors.buttonByClassName(billingPageConstants.attributes.nextStepBTNClass));
        // browser.execute((elem) => window.getComputedStyle(elem), $(“.someElem”))
    }
}