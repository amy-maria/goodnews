'use client';
import { FaArchive, FaArrowLeft } from 'react-icons/fa';
import { useRouter } from 'next/navigation';
import Button from '../components/Button';

interface Article {
  title: string;
  urlToImage: string;
  content: string;
  name: string;
  author: string | null;
  url: string;
}

interface ModalProps {
  article: Article;
  onClose: () => void;
}

const ModalPage: React.FC<ModalProps> = ({ article, onClose }) => {
  return (
    <div className='fixed z-50 top-0 left-0 w-screen min-h-screen flex justify-center items-center bg-black/50 overflow-auto p-4'>
      <div className='bg-light text-ink relative max-w-md w-full max-h-[90vh] overflow-y-auto rounded-lg shadow-md p-5'>
        <button
          onClick={onClose}
          aria-label='Close article'
          className='absolute top-3 left-3 z-10 flex items-center justify-center w-10 h-10 rounded-full bg-dark/70 text-light test-lg hover:bg-dark'>
          <FaArrowLeft />
        </button>

        <picture>
          <img
            src={article.urlToImage}
            alt={article.name}
            height={100}
            width={100}
            className='object-cover w-full h-48 rounded-md'
          />
        </picture>

        <div className='mt-4'>
          <h2 className='text-xl font-bold'>{article.title}</h2>
        </div>
        <div>
          <h3 className='text-sm text-gray-600'>{article.author}</h3>
        </div>
        <article className='mt-2'>{article.content}</article>
        <a
          href={article.url}
          target='_blank'
          rel='noopener noreferrer'
          className='text-accent underline block mt-4 '>
          Link to full article
        </a>
      </div>
    </div>
  );
};
export default ModalPage;
