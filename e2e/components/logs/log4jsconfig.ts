export class log4jsconfig {

    static Log(): any {
        var log4js = require('log4js');
        //log4js.configure('');
        //  let logger = log4js.getLogger(); //for both console and file
        let log = log4js.getLogger("default");
        return log;
    }
}