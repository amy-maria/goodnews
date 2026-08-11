'use client';
import { getExcludedWords } from '../lib/excludedWordsApi';
import filterArticles from '../lib/filterArticles';
import fetchArticles from '../lib/fetchArticles';
import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import NewsCard from '../components/NewsCard';
import ModalPage from './modal';

export interface Article {
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
  //console.log('NewsPage re-rendered');
  const { status } = useSession();
  const [excludedWords, setExcludedWords] = useState<string[]>([]); //holds whatever getExcludedWords returns
  const [newsData, setNewsData] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  useEffect(() => {
    const getNewsData = async () => {
      try {
        const data = await fetchArticles();
        //getExcludedWords(data);
        setNewsData(data.articles);
        setLoading(false);
        //console.log(data);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };
    getNewsData();
  }, []);

  useEffect(() => {
    if (status !== 'authenticated') return;
    const loadExcludedWords = async () => {
      const words = await getExcludedWords();
      setExcludedWords(words);
    };
    loadExcludedWords();
  }, [status]);

  const handleArticleClick = (article: Article) => {
    //console.log('Article clicked:', article);
    setSelectedArticle(article);
  };
  const handleCloseModal = () => {
    //console.log('Selected article:', selectedArticle);
    setSelectedArticle(null);
  };
  const filteredArticles = filterArticles(newsData, excludedWords);

  return (
    <>
      {loading ? (
        <div>Loading ...</div>
      ) : (
        <div className='grid grid-cols1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-4 text-black text-center'>
          {filteredArticles.map((article, index) => (
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
};;

export default NewsPage;
