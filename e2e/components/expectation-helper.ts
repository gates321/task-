import { StepLogger } from './logs/stepLogger';
import { WaitHelper } from './wait-helper';

export class ExpectationHelper {

    static async verifyElementIsDisplayed(targetElement: any, value: string, stepl: StepLogger) {
        stepl.verification(`verify that ${value} is displayed`);
        const displayON = await WaitHelper.waitToBeDisplayed(await targetElement);
        expect(displayON).toBe(true, `${value}, is displayed`);
    }

    static async verifyElementExist(targetElement: any, value: string, stepl: StepLogger) {
        stepl.verification(`verify that ${value} is exists`);
        const displayON = await WaitHelper.waitForElementToBePresent(await targetElement);
        expect(displayON).toBe(true, `${value}, is exists`);
    }

    static async verifyStringValueEqualTo(actualValue: string, expectedValue: string, stepLogger: StepLogger) {
        stepLogger.verification(`'${actualValue}' should be equal to '${expectedValue}' value`);
        expect(actualValue).toEqual(expectedValue, 'actual and expected values are equal');
    }

    static async verifyNumberValueEqual(actualValue: number, expectedValue: number, stepLogger: StepLogger) {
        stepLogger.verification(`'${actualValue}' should equal '${expectedValue}'`);
        expect(actualValue).toEqual(expectedValue, `${actualValue} is equal to ${expectedValue}`);
    }

}