'use client';
import fetchArticles from '../lib/fetchArticles';
import { useState, useEffect } from 'react';
import NewsCard from '../components/NewsCard';
import ModalPage from './modal';

interface Article {
  index: number;
  title: string;
  description: string;
  urlToImage: string;
  name: string;
  url: string;
  content: string;
  author: string | null;
}

const NewsPage = () => {
  console.log('NewsPage re-rendered');
  const [newsData, setNewsData] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  useEffect(() => {
    const getNewsData = async () => {
      try {
        const data = await fetchArticles();

        setNewsData(data.articles);
        setLoading(false);
        console.log(data);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };
    getNewsData();
  }, []);

  {
    /*click event for modal */
  }
  const handleArticleClick = (article: Article) => {
    console.log('Article clicked:', article);
    setSelectedArticle(article);
  };
  const handleCloseModal = () => {
    console.log('Selected article:', selectedArticle);
    setSelectedArticle(null);
  };

  return (
    <>
      {loading ? (
        <div>Loading ...</div>
      ) : (
        <div className='card-list text-black text-center'>
          {newsData.map((article, index) => (
            <NewsCard
              key={index}
              title={article.title}
              urlToImage={article.urlToImage}
              description={article.description}
              onClick={() => handleArticleClick(article)}
            />
          ))}

          {selectedArticle && (
            <ModalPage article={selectedArticle} onClose={handleCloseModal} />
          )}
        </div>
      )}
    </>
  );
};

export default NewsPage;
