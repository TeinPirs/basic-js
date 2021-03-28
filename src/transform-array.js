const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
    if (Array.isArray(arr)) {
        let newArr = arr.slice();
        newArr.push();
        let deleteEl;
        for (let i = 0; i < newArr.length; i++) {
            if (newArr[i] === "--discard-next") {
                newArr[i] = deleteEl;
                newArr[i + 1] = deleteEl;
            } else if (newArr[i] === "--discard-prev") {
                newArr[i] = deleteEl;
                newArr[i - 1] = deleteEl;
            } else if (newArr[i] === "--double-next") {
                newArr[i] = newArr[i + 1];
            } else if (newArr[i] === "--double-prev") {
                newArr[i] = newArr[i - 1];
            }
        }

        const result = newArr.filter((el) => el !== deleteEl && el !== undefined);

        return result;
    } else {
        throw new Error();
    }
};