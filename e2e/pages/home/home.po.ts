export class HomePage {

    static get rentButton() {
        return $(`//div[@class='card-body']//a[contains(@class,'original') and text()='Rent']`);
    }

}