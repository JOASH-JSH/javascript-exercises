const repeatString = function (str, num) {
    if (num < 0) return "ERROR";
    if (str === "") return str;

    let newStr = "";

    while (num > 0) {
        newStr += str;
        num--;
    }

    return newStr;
};

// Do not edit below this line
module.exports = repeatString;
