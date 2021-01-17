import { StepLogger } from './logs/stepLogger';
import { WaitHelper } from './wait-helper';

export class ExpectationHelper {

    static async verifyElementIsDisplayed(targetElement: any, value: string, stepl: StepLogger) {
        stepl.verification(`verify that ${value} is displayed`);
        const displayON = await WaitHelper.waitToBeDisplayed(await targetElement);
        await expect(displayON).toBe(true, `${value}, is displayed`);
    }

    static async letsSeeTargetXpath(terget: any, name: string, stepLogger: StepLogger) {
        stepLogger.verification(`lets si if sss element is prenets or not`);
        const displayON = await WaitHelper.waitForElementToBePresent(await terget, name, stepLogger);
        await expect(displayON).toBe(true, 'element is fucken true');
    }

    static async verifyStringValueEqualTo(actualValue: string, expectedValue: string, stepLogger: StepLogger) {
        stepLogger.verification(`'${actualValue}' should be equal to '${expectedValue}' value`);
        await expect(actualValue).toEqual(expectedValue, 'actual and expected values are equal');
    }

    static async verifyStringValueContain(actualValue: string, expectedValue: string, stepLogger: StepLogger) {
        stepLogger.verification(`'${actualValue}' should contains '${expectedValue}' value`);
        await expect(actualValue).toContain(expectedValue);
    }

    static async verifyElementIsNotDisplayed(targetElement: any, value: string, stepl: StepLogger) {
        stepl.verification(`verify that ${value} is not displayed`);
        const displayON = await WaitHelper.waitNotToBeDisplayed(await targetElement);
        await expect(displayON).toBe(true, `${value}, is displayed`);
    }

    static async verifyNumberValueEqual(actualValue: number, expectedValue: number, stepLogger: StepLogger) {
        stepLogger.verification(`'${actualValue}' should equal '${expectedValue}'`);
        await expect(actualValue).toEqual(expectedValue, `${actualValue} is equal to ${expectedValue}`);
    }

}