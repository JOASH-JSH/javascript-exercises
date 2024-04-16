function isValidChar(char) {
    const charCode = char.charCodeAt();
    if (
        (charCode >= 48 && charCode <= 57) ||
        (charCode >= 65 && charCode <= 90) ||
        (charCode >= 97 && charCode <= 122)
    ) return true;
    return false;
}

const palindromes = function (str) {
    const newStr = str.toLowerCase();
    let start = 0;
    let end = newStr.length - 1;

    while (start <= end) {
        while (!isValidChar(newStr[start])) {
            start++;
        }
        while (!isValidChar(newStr[end])) {
            end--;
        }

        if (newStr[start] !== newStr[end]) return false;

        start++;
        end--;
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
