
public class Solution {

    private static final int ALPHABET_SIZE = 26;

    public boolean equalFrequency(String word) {

        int[] frequency = new int[ALPHABET_SIZE];
        for (int i = 0; i < word.length(); ++i) {
            ++frequency[word.charAt(i) - 'a'];
        }

        for (int i = 0; i < ALPHABET_SIZE; ++i) {
            if (frequency[i] == 0) {
                continue;
            }
            --frequency[i];
            if (allFrequenciesAreEqual(frequency)) {
                return true;
            }
            ++frequency[i];
        }

        return false;
    }

    private boolean allFrequenciesAreEqual(int[] frequency) {
        
        int firstNonzeroFrequency = 0;
        for (int currentFrequency : frequency) {
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
}
