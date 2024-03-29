// Validate form input elements
const validateLib = require('./ValidationLib');

/**
 * Validate User
 * @param userObj
 * @returns {boolean|{msg: string, isNotValid: boolean}|{isNotValid}|*}
 */
function validateUser(userObj) {
    // Check required fields
    let result = validateLib.checkRequired("email", userObj.email);
    if (result.isNotValid) {
        return result;
    }

    result = validateLib.checkRequired("firstname", userObj.firstname);
    if (result.isNotValid) {
        return result;
    }

    result = validateLib.checkRequired("email", userObj.email);
    if (result.isNotValid) {
        return result;
    }

    result = validateLib.checkRequired("telefon", userObj.telefon);
    if (result.isNotValid) {
        return result;
    }

    result = validateLib.checkRequired("password", userObj.password);
    if (result.isNotValid) {
        return result;
    }

    result = validateLib.checkRequired("passwordRepeat", userObj.passwordRepeat);
    if (result.isNotValid) {
        return result;
    }

    //check length
    result = validateLib.checkLength("username", userObj.username, 3, 15);
    if (result.isNotValid) {
        return result;
    }

    result = validateLib.checkLength("firstname", userObj.firstname, 3, 15);
    if (result.isNotValid) {
        return result;
    }

    result = validateLib.checkLength("password", userObj.password, 6, 25);
    if (result.isNotValid) {
        return result;
    }

    result = validateLib.checkLength("password", userObj.password, 6, 25);
    if (result.isNotValid) {
        return result;
    }

//check E-Mail syntax
    result = validateLib.checkEmail("email", userObj.email);
    if (result.isNotValid) {
        return result;
    }

    //check Telefon syntax
    result = validateLib.checkTelefon("telefon", userObj.telefon);
    if (result.isNotValid) {
        return result;
    }

    //check Username syntax
    result = validateLib.checkUsername("username", userObj.username);
    if (result.isNotValid) {
        return result;
    }

    //check Firstname syntax
    result = validateLib.checkFirstname("firstname", userObj.firstname);
    if (result.isNotValid) {
        return result;
    }

//check password Syntax
    result = validateLib.checkPassword("password", userObj.password);
    if (result.isNotValid) {
        return result;
    }
//check password Confirmation Syntax
    result = validateLib.checkPasswordsMatch("password", userObj.passwordRepeat);
    if (result.isNotValid) {
        return result;
    }

//all inputs are valid and isNotValid=false
    return false;
}

/**
 *  Export validation functions for further usage.
 *  function to export WITHOUT brackets!
 */

module.exports = {
    validateUser
}

