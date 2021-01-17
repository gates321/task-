import * as log4js from 'log4js';

export class StepLogger {
    logger!: log4js.Logger;
    stepIdVar = '';
    id: number;
    testCaseId!: number;
    logMessages = '';

    constructor(private debug = process.env.DEBUG || true) {
        this.id = 0;
    }

    set caseId(theCaseId: number) {
        this.testCaseId = theCaseId;
        this.logger = log4js.getLogger(`C${theCaseId}`);
        this.logger.debug(this.logMessages);
        this.id = 1;
        this.logMessages = '';
    }

    step(stepName: string) {
        let operation = 'Pre-Condition';
        if (this.testCaseId) {
            operation = 'Step';
        }
        this.commonLogger(operation, stepName);
    }

    stepId(optionalId = 0) {
        this.id = optionalId > 0 ? optionalId : this.id + 1;
        this.commonLogger('Step Id', this.id.toString());
    }

    specLoger(operation: string, step: string) {
        const timestamp = new Date().toISOString().split('T')[1];
        const message = `${this.stepIdVar} *${operation}* - ${step}`;
    }

    commonLogger(operation: string, step: string) {
        const timestamp = new Date().toISOString().split('T')[1];
        const message = `${this.stepIdVar} *${operation}* - ${step}`;

        if (this.debug) {
            console.log(`${timestamp} - ${this.testCaseId || ''}${message}`);
        }

        // if (!process.env.NO_ALLURE) {
        //     const suite = allure._allure.getCurrentSuite();
        //     if (suite && suite.currentStep) {
        //         allure.createStep(message, () => {
        //             // empty
        //         })();
        //     }
        // }

        if (this.logger) {
            this.logger.debug(message);
        } else {
            this.logMessages += message;
        }
    }

    verification(verificationDescription: string) {
        this.commonLogger('Verification', verificationDescription);
    }
}
