import { Article } from "../newspage/NewsPage";

//imports article and runs filter against title

function titleContainsExcludedWord(title: string, excludedWords: string[]): boolean {
    const lowerTitle = title.toLowerCase();
    //loops thru each word in the excludedWords list and stops if one returns true on the title 
    return excludedWords.some((word) =>
        lowerTitle.includes(word.toLowerCase()));

}
function filterArticles(articles: Article[], excludedWords: string[]): Article[] {
    //filter for every article in the array individually. ! keeps the article if it does not contain the excluded word
    return articles.filter((article) =>
        !titleContainsExcludedWord(article.title, excludedWords));


}
export default filterArticles;