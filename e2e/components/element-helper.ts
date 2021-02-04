import { Element } from 'webdriverio';
import { WaitHelper } from './wait-helper';
export class ElementHelper {

    static async sendKeys(elem: Element, value: string) {
        await elem.setValue(value);
    }

    static async clickOnElement(elem: Element) {
        await elem.click();
    }

    static async doubleClick(elem: Element) {
        await elem.doubleClick();
    }

    static async moveToElement(elem: Element) {
        await elem.moveTo();
    }

    static async switchToWindow(windowTitle: string) {
        await browser.switchWindow(windowTitle);
    }

    static async clickWithJS(elem: Element) {

        await browser.execute("arguments[0].click();", elem);
    }

    static async moveRight(elem: Element) {
        await elem.dragAndDrop({ x: 100, y: 0 });
    }
}