const text = "This is a test. Test is a word that appears twice in this sentence.";
const wordFreqArray = wordFrequencyAnalyzer(text);
console.log(wordFreqArray);
// Output: [{ word: 'a', frequency: 2 }, { word: 'is', frequency: 2 }, { word: 'test', frequency: 2 }, { word: 'this', frequency: 2 }, { word: 'word', frequency: 1 }, { word: 'that', frequency: 1 }, { word: 'appears', frequency: 1 }, { word: 'twice', frequency: 1 }, { word: 'in', frequency: 1 }, { word: 'sentence', frequency: 1 }]

function wordFrequencyAnalyzer(text) {
    // Split the text into an array of words and remove any punctuation
    const words = text.toLowerCase().replace(/[^\w\s]/g, '').split(/\s+/);

    // Create an object to store the frequency of each word
    const wordFreq = {};

    // Loop through each word and update its frequency count
    for (let i = 0; i < words.length; i++) {
        const word = words[i];
        if (!wordFreq[word]) {
            wordFreq[word] = 0;
        }
        wordFreq[word]++;
    }

    // Convert the wordFreq object into an array of objects with the word and frequency count
    const wordFreqArray = Object.keys(wordFreq).map((word) => ({
        word,
        frequency: wordFreq[word],
    }));

    // Sort the array by frequency, with the most frequent words appearing first
    wordFreqArray.sort((a, b) => b.frequency - a.frequency);

    return wordFreqArray;
}
