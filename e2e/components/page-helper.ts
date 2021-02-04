import { WaitHelper } from './wait-helper';
import { Element } from 'webdriverio';

export class PageHelper {

    static DEFAULT_TIMEOUT = 25000;

    static async enterKey() {
        await browser.keys('\uE007');
    }

    static async sendKeyDown()  {
        await browser.keys('\ue015');
    }

    static async keyReturn() {
        await browser.keys('\ue006');
    }

    public static numberFromString(text: string) {
        return Number(text.replace(/\D+/g, '.'));
    }

    public static numberFromStringReplacongNSBP(text: string) {
        return String(text.replace(/&nbsp/g, ''));
    }

    public static replaceAllNBSP(text: string) {
        return String(text.replace(/^\xa0*([^\xa0]*)\xa0*$/g, '$1'));
    }

    public static numberFromStringFloat(text: string) {
        return Number.parseFloat(text.replace(/,/, '.'));
    }

    public static stringWithoutComma(text: string) {
        return String(text.replace(/,/, ''));
    }

    public static stringWithoutDot(text: string) {
        return String(text.replace(/\./g, ''));
    }

    public static replaceCharacters(text: string) {
        return String(text.replace('₾', ''));
    }

    public static replaceWhiteSpaces(text: string) {
        return String(text.replace(/\s/g, ''));
    }

    public static replaceStarsFromString(text: string) {
        return String(text.replace(new RegExp(/\*| /g), ''));
    }

    public static replaceCommaWithDot(text: string) {
        return String(text.replace(/,/, '.'));
    }

    public static stringWithoutCommaSplitted(text: string) {
        return String(text.replace(/[ ,]+/, ' '));
    }

    public static removeFirstCharacter(text: string) {
        return String(text.replace('a', ''));
    }

    public static sliceString(text: string) {
        return String(text.substring(0, text.length - 2));
    }

    public static removeFirstWordFromLine(text: string) {
        return text.substr(text.indexOf(' ') + 1);
    }

    public static parseIntsss(text: string) {
        return parseInt(text);
    }

    public static replaceHashTag(text: string) {
        return String(text.replace('#', ''));
    }

    public static replaceQuotes(text: string) {
        return String(text.replace(/'/g, ''));
    }


    public static splitlineOnArray(text: string) {
        return text.split(' ');
    }

    static async executeScript(script: string) {
        return await browser.execute(script);
    }

    static async getText(elem: Element) {
        await WaitHelper.waitToBeDisplayed(elem);
        const text = await elem.getText();
        return text.toString().trim();
    }

    static async randomString(size: number) {
        let text = '';
        const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

        for (let i = 0; i < size; i++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        return text;
    }

    static randomStringNoINT(size: number) {
        let text = '';
        const possible = 'abcdefghijklmnopqrstuvwxyz';

        for (let i = 0; i < size; i++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        return text;
    }

    static getUniqueIdForCategory(length: number) {
        return Math.random().toString(36).substr(2, length);
    }

    static async currentUrl() {
        return await browser.getUrl();
    }


    static async refreshPage() {
        await browser.refresh();
    }

    //**boolean */
    static async isElementDisplayed(targetElement: Element) {
        return await targetElement.isDisplayed();
    }

    //**boolean DOM */
    static async isElementExisting(targetElement: Element) {
        return await targetElement.isExisting();
    }

    static async getTime() {
        const date = new Date();
        return [date.getHours(), date.getMinutes()];
    }

    public static lastCharacter(text: string) {
        return text.slice(-1);
    }

}