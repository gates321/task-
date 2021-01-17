export class SettingsPage {

    static monthYearButton() {
        return $$(`//div[@class='el-button-group switch']/button`);
    }

    static upgradeForExpatTV() {
        return $(`//div[@class='plan-item-wrap expat-tv']//button`);
    }

    static roundNumber() {
        return $(`(//div[@class='annually']//span[@class='round-num'])[1]`);
    }

    static decNumber() {
        return $(`(//div[@class='annually']//span[@class='dec-num'])[1]`);
    }

    static duration() {
        return $(`(//span[@class='duration'])[1]`);
    }

}