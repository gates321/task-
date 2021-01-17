export class ElementHelper {

    static async sendKeys(elem: any, value: string) {
        await elem.setValue(value);
    }

    static async clickOnElement(elem: any) {
        await elem.click();
    }
}