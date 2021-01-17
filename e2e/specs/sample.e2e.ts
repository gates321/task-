import { StepLogger } from '../components/logs/stepLogger';
import { PageHelper } from '../components/page-helper';
import { CommonPageHelper } from '../pages/common/common-page.helper';
import { WaitHelper } from '../components/wait-helper';


describe(`task`, () => {
    let stepLogger: StepLogger;

    beforeAll(async () => {
        stepLogger = new StepLogger();
    });

    afterAll(async () => {
        stepLogger = new StepLogger();
    });

    it('task 4/1', async () => {
        await browser.url(`https://www.seleniumeasy.com/test/basic-first-form-demo.html`);
        await CommonPageHelper.verifypageTitle(stepLogger);
        await CommonPageHelper.enterText(stepLogger);
        await CommonPageHelper.verifyTextInDisplay(stepLogger);
        await CommonPageHelper.entetValues(stepLogger);
    })

    it('task4/2', async () => {
        await browser.url(`https://www.seleniumeasy.com/test/bootstrap-dual-list-box-demo.html`);
        await CommonPageHelper.verifypageTitleSecond(stepLogger);
        const text = await CommonPageHelper.enterSubString(stepLogger);
        await CommonPageHelper.clickOnSelectAll();
        await CommonPageHelper.verifyTextMoved(stepLogger, text);
    })
})