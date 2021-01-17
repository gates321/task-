import { StepLogger } from 'e2e/components/logs/stepLogger';
import { PageHelper } from './page-helper';

export class WaitHelper {

    static async pause(pauseTime = 5000) {
        await browser.pause(pauseTime);
    }

    // element present in DOM
    static async waitForElementToBePresent(targetElement: any, name: string, steplogger: StepLogger) {
        steplogger.step(`${name}, elemnt should be present`);
        const elems = await targetElement.waitForExist();
        return elems;
    }

    // element present on page
    static async waitToBeDisplayed(targetElement: any) {
        const elems = await targetElement.waitForDisplayed();
        return elems;
    }

    static async waitNotToBeDisplayed(targetElement: any) {
        const elems = await targetElement.waitForDisplayed({ reverse: true });
        return elems;
    }

    static async waitForPageToStable(timeout = 5000) {
        await browser.pause(timeout);
        await browser.execute('return document.readyState == \'complete\'');
    }
} 