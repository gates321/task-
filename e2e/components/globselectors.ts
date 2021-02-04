export class GlobSelectors {

    static spanByText(text: string) {
        return $(`//span[text()='${text}']`);
    }

    static spanByContainsText(text: string) {
        return $(`//span[contains(text(),'${text}')]`);
    }

    static spanByClassEquals(className: string) {
        return $(`//span[@class='${className}']`);
    }

    static divByText(text: string) {
        return $(`//div[text()='${text}']`);
    }

    static buttonByID(text: String) {
        return $(`//button[@id='${text}']`);
    }

    static h2TagByTextContains(text: string) {
        return $(`//h2[contains(text(),'${text}')]`);
    }

    static h1TagByTextContains(text: string) {
        return $(`//h1[contains(text(),'${text}')]`);
    }

    static divByTextContains(text: string) {
        return $(`//div[contains(text(),'${text}')]`);
    }

    static inpputById(text: string) {
        return $(`//input[@id='${text}']`);
    }

    static inpputByClass(text: string) {
        return $(`//input[@class='${text}']`);
    }

    static inputByPlaceHolder(text: string) {
        return $(`//input[@placeholder='${text}']`);
    }

    static inputWithAriaLabel(text: string) {
        return $(`//input[@aria-label='${text}']`);
    }

    static inputWithAriaLabelContains(text: string) {
        return $(`//input[contains(@aria-label,'${text}')]`);
    }

    static labelByText(text: string) {
        return $(`//label[text()='${text}']`);
    }

    static iTagByText(text: string) {
        return $(`//i[text()='${text}']`);
    }

    static textareaByAriaLabel(text: string) {
        return $(`//textarea[@aria-label='${text}']`);
    }

    static thWithTextContains(text: string) {
        return $(`//th[contains(text(),'${text}')]`);
    }

    static buttonByTextContains(text: string) {
        return $(`//button[contains(text(),'${text}')]`);
    }

    static tdByText(text: string) {
        return $(`//td[text()='${text}']`);
    }

    static iTagByTextContains(text: string) {
        return $(`//i[contains(text(),'${text}')]`);
    }

    static anchorContainstText(text: string) {
        return $(`//a[contains(text(),'${text}')]`);
    }

    static anchorByClass(text: string) {
        return $(`//a[@class='${text}']`);
    }

    static divByClassEquals(className: string) {
        return $(`//div[@class='${className}']`);
    }

    static buttonByClassName(className: string) {
        return $(`//button[@class='${className}']`);
    }

    static buttonByTitle(title: string) {
        return $(`//button[@title='${title}']`);
    }

    static buttonBytitleEquals(title: string) {
        return $(`//button[@title='${title}']`);
    }

    static paragraphByText(text: string) {
        return $(`//p[text()='${text}']`);
    }

    static paragraphContainsText(text: string) {
        return $(`//p[contains(text(),'${text}')]`);
    }

    static strongContainsText(text: string) {
        return $(`//strong[contains(text(),'${text}')]`);
    }

    static strongByTextEquals(text: string) {
        return $(`//strong[text()='${text}']`);
    }

    static anchorByClassEquals(className: string) {
        return $(`//a[@class='${className}']`);
    }

    static tdContainsText(text: string) {
        return $(`//td[contains(text(),'${text}')]`);
    }

    static anchorByText(text: string) {
        return $(`//a[text()='${text}']`);
    }

    static anchorById(text: string) {
        return $(`//a[@id='${text}']`);
    }

    static inpputByName(text: string) {
        return $(`//input[@name='${text}']`);
    }

    static iTagByClass(text: string) {
        return $(`//i[@class='${text}']`);
    }

    static textareaByClass(text: string) {
        return $(`//textarea[@class='${text}']`);
    }

    static inputByTitle(text: string) {
        return $(`//input[@title='${text}']`);
    }

    static labelByClass(text: string) {
        return $(`//label[@class='${text}']`);
    }

    static h5TagWithText(text: string) {
        return $(`//h5[text()='${text}']`);
    }

    static buttonByDataHook(text: string){
        return $(`//button[@data-hook='${text}']`);
    }

    static inputByType(text: string) {
        return $(`//input[@type='${text}']`);
    }


    static divByIdEquals(id: string) {
        return $(`//div[@id='${id}']`);
    }

    static buttonByIcon(icon: string) {
        return $(`//button[@icon='${icon}']`);
    }

    static anchorByDataHook(dataHook: string) {
        return $(`//a[@data-hook='${dataHook}']`);
    }

    static textareaByID(text: string) {
        return $(`//textarea[@id='${text}']`);
    }

}