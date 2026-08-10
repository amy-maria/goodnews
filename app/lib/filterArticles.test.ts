import { describe, it, expect } from 'vitest';
import filterArticles from './filterArticles';
import type { Article } from '../newspage/NewsPage';

function makeArticle(title: string): Article {
  return {
    index: 0,
    title,
    description: '',
    urlToImage: '',
    name: '',
    url: '',
    content: '',
    author: null,
  };
}

describe('filterArticles', () => {
  it('removes articles whose title contains an excluded word', () => {
    const articles = [
      makeArticle('Everybody says this is great'),
      makeArticle('A totally normal headline'),
    ];

    const result = filterArticles(articles, ['everybody says']);

    expect(result).toHaveLength(1);
    expect(result[0].title).toBe('A totally normal headline');
  });

  it('matching is case-insensitive', () => {
    const articles = [makeArticle('EVERYBODY SAYS something')];

    const result = filterArticles(articles, ['everybody says']);

    expect(result).toHaveLength(0);
  });

  it('keeps every article when no words are excluded', () => {
    const articles = [makeArticle('Any headline at all')];

    const result = filterArticles(articles, []);

    expect(result).toHaveLength(1);
  });
});