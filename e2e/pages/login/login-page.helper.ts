import { PageHelper } from '../../components/page-helper';
import { StepLogger } from '../../components/logs/stepLogger';
import { GlobSelectors } from '../../components/globselectors';
import { LoginPageConstants } from './login-page.constant';
import { ElementHelper } from '../../components/element-helper';
import { WaitHelper } from '../../components/wait-helper';
export class LoginPageHelper {

    static async getID() {
        await WaitHelper.pause(10000);
        const codeID = await PageHelper.executeScript(`return localStorage.getItem('activationcode');`);
        console.log(codeID);
        return codeID;
    }

    static async clickOnSocialLogin(stepLogger: StepLogger) {
        stepLogger.step(`click on freeSignUP login button`);
        const freeSignUP = LoginPageConstants.attributes.freeSignUP;
        await ElementHelper.clickOnElement(await GlobSelectors.buttonByClassName(freeSignUP));

    }

    static async clickOnEmail(stepLogger: StepLogger) {
        stepLogger.step(`click on sing up by email`);
        await ElementHelper.clickOnElement(
            await GlobSelectors.buttonByDataHook(LoginPageConstants.attributes.socialLogin.emailButtonHook));
    }

    static async enterEmailRegistrationData(stepLogger: StepLogger, uniqueName: string, uniqueSecond: string, uniqueMail: string) {
        stepLogger.step(`enter name, second and email into registration form`);
        const name = LoginPageConstants.attributes.socialLogin.yourNamePCH;
        const nameSec = LoginPageConstants.attributes.socialLogin.yourSecondNamePCH;
        const email = LoginPageConstants.attributes.socialLogin.typeEmail;
        const submit = LoginPageConstants.attributes.socialLogin.submitDataHook;


        await ElementHelper.sendKeys(await GlobSelectors.inputByPlaceHolder(name), uniqueName);
        await ElementHelper.sendKeys(await GlobSelectors.inputByPlaceHolder(nameSec), uniqueSecond);
        // date should be in email
        await ElementHelper.sendKeys(await GlobSelectors.inputByType(email), `qa+${uniqueMail}@mailbeaver.net`);
        await ElementHelper.clickOnElement(await GlobSelectors.buttonByDataHook(submit));
        await WaitHelper.pause();
        await this.getID();
    }
}