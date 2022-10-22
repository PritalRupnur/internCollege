
const isValid = function (value) {
    if (typeof value === "undefined" || value === null) return false;
    if (typeof value === "string" && value.trim().length > 0) return true;
    return false;
};

const isValidRequest = function (object) {
    return Object.keys(object).length > 0
}


const regixValidator = function (value) {
    const regex = /^[a-zA-Z]+([\s][a-zA-Z]+)*$/
    return regex.test(value)
    
}

const mobileValidator = function (value){
    const regex = /^([0|\+[0-9]{1,5})?([7-9][0-9]{9})$/
    return regex.test(value)
}


const nameRegex = function (value){
    const regex = /^[A-Za-z _-]+$/
    return regex.test(value)
    
}
const isValidEmail = function (value) {
    const regexForEmail =  /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/
    return regexForEmail.test(value)
}

const isValidLogoLink = function (logoLink){
    return (/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.\+#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%\+.#?&//=]*)/).test(logoLink)
}


module.exports = {isValid, isValidRequest, regixValidator, nameRegex, mobileValidator, isValidEmail, isValidLogoLink}

