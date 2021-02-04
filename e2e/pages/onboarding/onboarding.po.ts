export class OnboardingPage {

    static sliderRight(text: string) {
        return $(`//p[text()='${text}']//parent::div//following-sibling::div//div[@class='rc-slider-handle rc-slider-handle-2']`);
    }

    static bedRoomCount(text:string) {
        return $(`//p[text()='${text}']/parent::div//p[@class='header__display display-text mb-1 mb-sm-2']`)
    }

    static get bikeIcond() {
        return $(`//*[@id='bike_icon']//ancestor::button`);
    }

    static get dropDownOption() {
        return $(`(//div[@class='pac-item' and contains(.,'Test')])[1]`)
    }

}