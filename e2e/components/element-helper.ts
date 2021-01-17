export class ElementHelper {

    static async sendKeys(elem: any, value: string) {
        await elem.setValue(value);
    }

    static async clickOnElement(elem: any) {
        await elem.click();
    }

    static async clickUsingJsNoWait(elem: any) {
        return browser.executeScript('arguments[0].click();', await elem.getWebElement());
    }

    static async doubleClick(elem: any) {
        await elem.doubleClick();
    }
}