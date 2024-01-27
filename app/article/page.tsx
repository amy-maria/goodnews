'use client';
import fetchArticles from '../lib/fetchArticles';
import { useState, useEffect } from 'react';
import NewsCard from '../components/NewsCard';

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

  return (
    <div className='text-black text-center'>
      {Array.isArray(newsData) &&
        newsData.map(({ title, description }, index) => (
          <NewsCard key={index} title={title} description={description} />
        ))}
    </div>
  );
};

export default NewsPage;
