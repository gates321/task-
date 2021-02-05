import { SuiteNames } from '../../components/suite-names';
export class OnboardingPage {

    static sliderRight(text: string) {
        return $(`//p[text()='${text}']//parent::div//following-sibling::div//div[@class='rc-slider-handle rc-slider-handle-2']`);
    }

    static bedRoomCount(text: string) {
        return $(`//p[text()='${text}']/parent::div//p[@class='header__display display-text mb-1 mb-sm-2']`)
    }

    static get bikeIcond() {
        return $(`//*[@id='bike_icon']//ancestor::button`);
    }

    static get dropDownOption() {
        return $(`(//div[@class='pac-item' and contains(.,'Test')])[1]`)
    }

    static get levelCounts() {
        return $$(`//button[@class='rating d-inline mr-2 btn btn-primary']`);
    }

    static get plusButton() {
        return $(`//button[contains(@class,'plus')]`);
    }

    static get nextButton() {
        return $(`//button[contains(@class,'next')]`);
    }

    static get minusButton() {
        return $(`//button[contains(@class,'minus')]`);
    }

    static multiValues(i: number) {
        return $(`(//div[contains(@class,'multi-value__label')])[${i}]`);
    }

    static get multiValuesCount() {
        return $$(`//div[contains(@class,'multi-value__label')]`);
    }

    static get lastElementOfMonth() {
        return $(`(//button[contains(@class,'month-view__days__day')])[last()]`);
    }

    static studio(text: string) {
        return $(`//p[text()='Studio - ${text}']`)
    }

    static divByText(text: string, i: number) {
        return $(`(//div[text()='${text}'])[${i}]`);
    }
}