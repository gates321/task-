
import { Element, ElementArray } from 'webdriverio';
export class WaitHelper {

    static async sleeep(pauseTime = 5000) {
        await browser.pause(pauseTime);
    }

    // element existing in DOM
    static async waitForElementToBePresent(targetElement: Element) {
        const elems = await targetElement.waitForExist();
        return elems;
    }

    // element present on page
    static async waitToBeDisplayed(targetElement: Element) {
        const elems = await targetElement.waitForDisplayed();
        return elems;
    }

    static async waitNotToBeDisplayed(targetElement: Element) {
        const elems = await targetElement.waitForDisplayed({ reverse: true });
        return elems;
    }

    static async waitTobeClickable(targetLement: Element) {
        const elems = await targetLement.waitForClickable();
        return elems;
    }

    static async waitForEnabled(targetLement: Element) {
        const elems = await targetLement.waitForEnabled();
        return elems;
    }


    static async waitForPageToStable() {
        await browser.waitUntil(async () => await browser.execute(`return document.readyState === 'complete'`));
    }
} 