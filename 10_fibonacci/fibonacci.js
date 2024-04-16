const fibonacci = function (n) {
    n = parseInt(n);

    if (n < 0) return "OOPS";
    if (n === 1) return 1;

    let prevSum = 0, curSum = 1;

    for (let i = 0; i < n; i++) {
        prevSum += curSum;
        curSum = prevSum - curSum;
    }

    return prevSum;
};

// Do not edit below this line
module.exports = fibonacci;
