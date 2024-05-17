const cds = require("@sap/cds");
const implementation = require('./serverImplementation');
const passport = require('passport');
const cookieSession = require('cookie-session')
require('../auth/passport')

class CustomAuth extends cds.ApplicationService {
    async init() {

        return super.init()
    }
}
module.exports = CustomAuth