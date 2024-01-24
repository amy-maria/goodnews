import fetchArticles from '../lib/fetchArticles';
import Link from 'next/link';

export default async function Article() {
  const articleData: Promise<NewsArticle[]> = fetchArticles()

  const articles = await articleData;
  console.log('hello')

  const content = (
  <section>
   {articles.map(article => {
    return (
        
    <div key={article.props.id}>
    <h3>{article.props.title}</h3>
    <p>{article.props.description}</p>
    </div>
    )}
    if
  {articles.length === 0 && 
    (<p>No news stories found</p>)
  }
})
  </section>
   
return content 
}

