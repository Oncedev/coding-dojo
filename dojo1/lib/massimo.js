var dojo = {
    run: function(romanNumber) {
        var table = {
            'I': 1,
            'V': 5,
            'X': 10,
            'L': 50,
            'C': 100,
            'D': 500,
            'M': 1000,
        },
        decimalNumber = 0;

        romanNumber.split('').map(function(currentRoman, index, arrRomanNumber) {
            decimalNumber += table[arrRomanNumber[index]];
            if (table[arrRomanNumber[index - 1]] < table[arrRomanNumber[index]]) {
                decimalNumber -= 2 * table[arrRomanNumber[index - 1]];
            }
        });

        return decimalNumber;
    }
};
module.exports = dojo;