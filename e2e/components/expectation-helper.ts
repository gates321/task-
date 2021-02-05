import { StepLogger } from './logs/stepLogger';
import { WaitHelper } from './wait-helper';
import { Element } from 'webdriverio';
import { PageHelper } from './page-helper';

export class ExpectationHelper {

    static async verifyElementIsDisplayed(targetElement: Element, value: string, stepl: StepLogger) {
        stepl.verification(`verify that ${value} is displayed`);
        const displayON = await WaitHelper.waitToBeDisplayed(targetElement);
        expect(displayON).toBe(true, `${value}, is displayed`);
    }

    static async verifyStringValueEqualTo(actualValue: string, expectedValue: string, stepLogger: StepLogger) {
        stepLogger.verification(`'${actualValue}' should be equal to '${expectedValue}' value`);
        expect(actualValue).toEqual(expectedValue, 'actual and expected values are equal');
    }

    static async verifyStringValueContain(actualValue: string, expectedValue: string, stepLogger: StepLogger) {
        stepLogger.verification(`'${actualValue}' should contains '${expectedValue}' value`);
        expect(actualValue).toContain(expectedValue);
    }

    static async verifyElementIsNotDisplayed(targetElement: Element, value: string, stepl: StepLogger) {
        stepl.verification(`verify that ${value} is not displayed`);
        const displayON = await WaitHelper.waitNotToBeDisplayed(targetElement);
        expect(displayON).toBe(true, `${value}, is displayed`);
    }

    static async verifyNumberValueEqual(actualValue: number, expectedValue: number, stepLogger: StepLogger) {
        stepLogger.verification(`'${actualValue}' should equal '${expectedValue}'`);
        expect(actualValue).toEqual(expectedValue, `${actualValue} is equal to ${expectedValue}`);
    }

    static async verifyContainsText(targetElement: Element, elementName: string, expectedValue: string, stepLogger: StepLogger) {
        stepLogger.verification(`'${elementName}' should have contains text as '${expectedValue}'`);
        expect((await PageHelper.getText(targetElement)).toLowerCase()).toContain(expectedValue.toLowerCase());
    }

    static async verifyValueGraterThan(actualValue: number, expectedValue: number, stepLogger: StepLogger) {
        stepLogger.verification(`'${actualValue}' should be grater than '${expectedValue}' value`);
        expect(actualValue).toBeGreaterThan(expectedValue);
    }


}