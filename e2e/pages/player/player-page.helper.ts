import { StepLogger } from '../../components/logs/stepLogger';
import { ExpectationHelper } from '../../components/expectation-helper';
import { GlobSelectors } from '../../components/globselectors';
import { PlayerPageConstants } from './player-page.constants';
import { LoginPageConstants } from '../login/login-page.constant';
import { ElementHelper } from '../../components/element-helper';
export class PlayerPageHelper {

    static async verifyFiveMinuteCounter(stepLogger: StepLogger) {
        stepLogger.verification(`verify 5 minutes counter is displayed`);
        const minFive = PlayerPageConstants.attributes.fiveMinutClass;
        await ExpectationHelper.verifyElementIsDisplayed(await GlobSelectors.divByClassEquals(minFive),
            `5 minutie counter`, stepLogger);
    }

    static async verifySocialLoginPopUp(stepLogger: StepLogger) {
        stepLogger.verification(`verify social login pop up on player after two minutes`);
        const email = LoginPageConstants.attributes.socialLogin.emailButtonHook;
        const facebookHook = LoginPageConstants.attributes.socialLogin.faceBookHook;
        const googleHook = LoginPageConstants.attributes.socialLogin.googleHook;
        const closeCLass = LoginPageConstants.attributes.socialLogin.loginCloseClass;

        await ExpectationHelper.verifyElementIsDisplayed(await GlobSelectors.buttonByDataHook(email), 'email', stepLogger);
        await ExpectationHelper.verifyElementIsDisplayed(await GlobSelectors.buttonByDataHook(facebookHook), 'facebook', stepLogger);
        await ExpectationHelper.verifyElementIsDisplayed(await GlobSelectors.buttonByDataHook(googleHook), 'google', stepLogger);
        await ElementHelper.clickOnElement(await GlobSelectors.buttonByClassName(closeCLass));
        await ExpectationHelper.verifyElementIsNotDisplayed(await GlobSelectors.buttonByDataHook(email), 'email button', stepLogger);
    }

    static async verifyOneHourIsDisplayed(stepLogger: StepLogger) {
        stepLogger.verification(`verify one hour is displayed/after freesign up`);
        const oneHour = PlayerPageConstants.attributes.fiveMinutClass;
        await ExpectationHelper.verifyElementIsDisplayed(await GlobSelectors.divByClassEquals(oneHour), oneHour, stepLogger);
    }

    static async clickOnBackButton(stepLogger: StepLogger) {
        stepLogger.step(`click on back button on videoPlayer`);
        await ElementHelper.clickOnElement(await GlobSelectors.buttonByID(PlayerPageConstants.attributes.backButtonID))
    }

}