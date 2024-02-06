'use client';
import { useRouter } from 'next/navigation';

interface Article {
  title: string;
  urlToImage: string;
  description: string;
}

interface ModalProps {
  article: Article;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ article, onClose }) => {
  const router = useRouter();
  console.log('modal rendered');

  if (!article) {
    return null;
  }

  return (
    <div className='modal show fixed inset-0 flex items-center justify-center'>
      <div className='modal-overlay absolute w-full h-full bg-gray-800 opacity-50'></div>
      <div className='modal-container bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto'></div>
      <div className='modal-content px-6 py-4 text-left '>
        <button
          className='modal-close absolute top-0 right-0 cursor-pointer flex flex-col items-center mt-4 mr-4 text-white text-sm z-50'
          onClick={onClose}>
          <span className='text-lg'>&times;</span>
        </button>
        <h2 className='font-bold text-xl mb-2'>{article.title}</h2>
        <picture>
          <img
            src={article.urlToImage}
            alt={article.title}
            className='w-full rounded'
          />
        </picture>
        <p className='text-gray-700 text-base mt-4'>{article.description}</p>
      </div>
    </div>
  );
};
export default Modal;
