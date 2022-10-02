
#include <array>
#include <string>
using namespace std;

class Solution {
    
    inline static const int ALPHABET_SIZE = 26;

public:
    bool equalFrequency(string word) const {

        array<int, ALPHABET_SIZE> frequency{};
        for (const auto& letter : word) {
            ++frequency[letter - 'a'];
        }

        for (auto& currentFrequency : frequency) {
            if (currentFrequency == 0) {
                continue;
            }
            --currentFrequency;
            if (allFrequenciesAreEqual(frequency)) {
                return true;
            }
            ++currentFrequency;
        }

        return false;
    }

private:

    bool allFrequenciesAreEqual(const array<int, ALPHABET_SIZE>& frequency) const {

        int firstNonzeroFrequency = 0;
        for (const auto& currentFrequency : frequency) {
            if (currentFrequency == 0) {
                continue;
            }
            if (firstNonzeroFrequency == 0) {
                firstNonzeroFrequency = currentFrequency;
                continue;
            }
            if (firstNonzeroFrequency != currentFrequency) {
                return false;
            }
        }
        return true;
    }
};
