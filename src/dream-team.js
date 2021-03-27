const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
    if (Array.isArray(members) == false) return false;

    let result = [];

    for (let element of members) {
        if (typeof element == "string") {
            result.push(element.trim()[0].toUpperCase());
        }
    }

    return result.sort().join("");
};