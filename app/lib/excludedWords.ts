

const STORAGE_KEY = 'excludedWords';


export function getExcludedWords(): string[ ] {

//ask local storage for the raw string

    const stored = localStorage.getItem(STORAGE_KEY);

    //check if there is anything there or null

    if (stored === null) {
        return [];
    }
//parse items back into an array
    return JSON.parse(stored);
}

export function addExcludedWords(phrase: string) {
    //1.get phrase 2.read current list 3. add phrase to memory 4. convert array to string and save to key 5. setItems always takes two arguments (key, stringvalue)
    const words = getExcludedWords();
    words.push(phrase);

    const serialized = JSON.stringify(words);
    localStorage.setItem(STORAGE_KEY, serialized);
    return words;
}

export function removeExcludedWords(phrase: string) {
    const words = getExcludedWords();//returns array
//filter matches the value to remove exactly
    const updatedWords = words.filter((word) => word !== phrase)
//builds new array containing every word except the one that matches the phrase
    const serialized = JSON.stringify(updatedWords);
    localStorage.setItem(STORAGE_KEY, serialized); //add to local storage

    return updatedWords;
        

}