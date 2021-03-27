const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
    if (typeof sampleActivity !== "string" || !sampleActivity) return false;
    let floatSampleActivity = parseFloat(sampleActivity);
    if (
        floatSampleActivity <= 0 ||
        floatSampleActivity > 15 ||
        isNaN(floatSampleActivity)
    )
        return false;

    let k = 0.693 / HALF_LIFE_PERIOD;
    let t = Math.ceil(Math.log(MODERN_ACTIVITY / floatSampleActivity) / k);
    return t;
};