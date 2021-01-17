export class LoginPageConstants {
    static get attributes() {
        return {
            signInClass: 'el-button primary-button focusable el-button--default orange-button',
            freeSignUP: 'el-button primary-button focusable el-button--default sky-button',
            logoClass: 'el-image image',
            socialLogin: {
                emailButtonHook: 'signup_with_email',
                faceBookHook: 'signup_with_facebook',
                googleHook: 'signup_with_google',
                yourNamePCH: 'Your Name',
                yourSecondNamePCH: 'Your Surname',
                typeEmail: 'email',
                submitDataHook: 'email_signup_submit',
                loginCloseClass: 'el-dialog__headerbtn'
            }
        };
    }

}