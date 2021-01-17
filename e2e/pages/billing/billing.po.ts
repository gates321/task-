export class billingPage {

    static billingDuration() {
        return $(`(//div[@class='site-product-info']//li)[2]`); // index ((((
    }

    static country() {
        return $(`//span[text()='Afghanistan']`);
    }

    static cardNumber() {
        return $(`#cardNumber`);
    }

    static cardMonth() {
        return $(`#cardMonth`);
    }

    static cardYear() {
        return $(`#cardYear`);
    }

    static cardName() {
        return $(`#cardName`);
    }

    static cardCVV() {
        return $(`#cardCvv`);
    }

    static firstMonth() {
        return $(`//option[@value='01']`);
    }

    static fourthYear(){
        return $(`//option[@value='2024']`);
    }

}