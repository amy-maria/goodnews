import { describe, it, expect, beforeEach } from 'vitest';
import { getExcludedWords, addExcludedWords, removeExcludedWords } from './excludedWords';

describe('excludedWords(localStorage)', () => {
    beforeEach(() => {
        localStorage.clear();
    });

    it('it returns an empty array when nothing has been saved yet', () => {
        expect(getExcludedWords()).toEqual([]);
    });
    it('adds a word and persists', () => {
        const result = addExcludedWords('usher');
        expect(result).toEqual(['usher']);
        expect(getExcludedWords()).toEqual(['usher']);
    });

    it('removed a word and persists the change', () => {
        addExcludedWords('usher');
        addExcludedWords('everybody says');

        const result = removeExcludedWords('usher');

        expect(result).toEqual(["everybody says"]);
        expect(getExcludedWords()).toEqual(["everybody says"]);
    })
})