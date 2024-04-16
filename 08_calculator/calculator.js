const add = function (a, b) {
    return a + b;
};

const subtract = function (a, b) {
    return a - b;
};

const sum = function (nums) {
    return nums.reduce((acc, curr) => (acc += curr), 0);
};

const multiply = function (nums) {
    return nums.reduce((acc, curr) => (acc *= curr), 1);
};

const power = function (base, exp) {
    return base ** exp;
};

const factorial = function (num) {
    let fact = 1;
    while (num > 1) {
        fact *= num;
        num--;
    }
    return fact;
};

// Do not edit below this line
module.exports = {
    add,
    subtract,
    sum,
    multiply,
    power,
    factorial,
};
