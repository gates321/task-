export class PageHelper {

    static async getText(elem: any) {
        await elem.waitForDisplayed();
        const text = await elem.getText();
        return text;
    }

    //**boolean */
    static async isElementDisplayed(targetElement: any) {
        return await targetElement.isDisplayed();
    }

}