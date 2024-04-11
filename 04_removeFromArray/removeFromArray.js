const removeFromArray = function (nums, ...targets) {
    targets.forEach((target) => {
        nums = nums.filter((num) => (num !== target ? num : 0));
    });
    return nums;
};

// Do not edit below this line
module.exports = removeFromArray;
