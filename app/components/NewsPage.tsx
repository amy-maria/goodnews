'use client';
import fetchArticles from '../lib/fetchArticles';
import { useState, useEffect } from 'react';
import NewsCard from './NewsCard';

const NewsPage = () => {
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(true);

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

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className='text-black text-center'>
      {Array.isArray(newsData) &&
        newsData.map(({ title, description, urlToImage }, index) => (
          <NewsCard
            key={index}
            title={title}
            imageUrl={urlToImage}
            description={description}
          />
        ))}
    </div>
  );
};

export default NewsPage;
