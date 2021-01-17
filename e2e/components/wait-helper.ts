import { StepLogger } from 'e2e/components/logs/stepLogger';

export class WaitHelper {

    static async pause(pauseTime = 5000) {
        await browser.pause(pauseTime);
    }

    static async waitForElementToBePresent(targetElement: any) {
        const elems = await targetElement.waitForExist();
        return elems;
    }

    static async waitToBeDisplayed(targetElement: any) {
        const elems = await targetElement.waitForDisplayed();
        return elems;
    }
} 