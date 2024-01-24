import fetchArticles from '../lib/fetchArticles';

export default async function Article() {
  const articleData: Promise<Article[]> = fetchArticles();

  const articles = await articleData;

  return (
    <div>
      {Array.isArray(articles) &&
        articles.map((article) => {
          return (
            <div key={article.props.id}>
              <h3>{article.title}</h3>
              <p>{article.description}</p>
            </div>
          );
        })}
    </div>
  );
}
