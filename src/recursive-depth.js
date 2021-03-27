const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
    calculateDepth(arr) {
        let count = 1;

        for (let i of arr) {
            let contRecurse = 1;
            if (Array.isArray(i)) {
                contRecurse += this.calculateDepth(i);
            }
            if (contRecurse > count) {
                count = contRecurse;
            }
        }
        return count;
    }
};