const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
    if (!date) {
        return "Unable to determine the time of year!";
    }

    try {
        date.getTime();
    } catch (e) {
        throw new Error(e);
    }

    let d = date.getMonth();

    if ((d >= 0 && d <= 1) || d == 11) return "winter";
    if (d >= 2 && d <= 4) return "spring";
    if (d >= 5 && d <= 7) return "summer";
    if (d >= 8 && d <= 10) return "autumn";
};