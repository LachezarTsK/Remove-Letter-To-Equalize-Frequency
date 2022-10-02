
/**
 * @param {string} word
 * @return {boolean}
 */
var equalFrequency = function (word) {

    this.ALPHABET_SIZE = 26;
    const asciiCodeFor_a = 97;
    const frequency = new Array(ALPHABET_SIZE).fill(0);

    for (let i = 0; i < word.length; ++i) {
        ++frequency[word.codePointAt(i) - asciiCodeFor_a];
    }

    for (let i = 0; i < ALPHABET_SIZE; ++i) {
        if (frequency[i] === 0) {
            continue;
        }
        --frequency[i];
        if (allFrequenciesAreEqual(frequency)) {
            return true;
        }
        ++frequency[i];
    }

    return false;
};

/**
 * @param {number[]} frequency
 * @return {boolean}
 */
function allFrequenciesAreEqual(frequency) {
    let firstNonzeroFrequency = 0;
    for (let i = 0; i < this.ALPHABET_SIZE; ++i) {
        if (frequency[i] === 0) {
            continue;
        }
        if (firstNonzeroFrequency === 0) {
            firstNonzeroFrequency = frequency[i];
            continue;
        }
        if (firstNonzeroFrequency !== frequency[i]) {
            return false;
        }
    }
    return true;
}
