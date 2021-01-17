export class CommonPage {


    static popUp() {
        return $(`#image-darkener`);
    }

    static popUpClose() {
        return $(`#at-cv-lightbox-close`);
    }

    static title(text: string) {
        return $(`//title[text()='${text}']`);
    }

    static userMessageInput() {
        return $(`//input[@id='user-message']`);
    }

    static showMessageButton() {
        return $(`//button[@onclick='showInput();']`);
    }

    static displayText() {
        return $(`#display`);
    }

    static sumOne() {
        return $(`#sum1`);
    }

    static sumTwo() {
        return $(`#sum2`);
    }

    static totalButton() {
        return $(`//button[@onclick='return total()']`);
    }

    static totalSum() {
        return $(`#displayvalue`);
    }

    static firstTextLiest() {
        return $(`(//li[@class='list-group-item'])[1]`);
    }

    static leftSearch() {
        return $(`//div[@class='dual-list list-left col-md-5']//input`);
    }

    static selecAllLeft() {
        return $(`(//a[@class='btn btn-default selector'])[1]`);
    }

    static moveRight() {
        return $(`//button[@class='btn btn-default btn-sm move-right']`);
    }

    static rightListText(text: string) {
        return $(`//div[@class='dual-list list-right col-md-5']//li[contains(text(),'${text}')]`)
    }
}