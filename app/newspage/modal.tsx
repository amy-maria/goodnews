'use client';
import { useRouter } from 'next/navigation';

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
  function handleCloseModal() {
    onClose();
  }

  return (
    <div className='modal-overlay fixed z-1 top-0 left-0 w-screen min-h-screen flex justify-center align-middle border-r-blue-700 overflow-auto'>
      <div className='modal-content bg-white my-{15%} mx-auto border-4 border-red-700 p-5 rounded-lg shadow-md overflow-auto'>
        <picture>
          <img
            src={article.urlToImage}
            alt=''
            height={100}
            width={100}
            className='object-fit align-center w-3/4 h-3/4'
          />
        </picture>
        <br />
        <div>
          <h2>{article.title}</h2>
        </div>
        <div>
          <h3>{article.author}</h3>
        </div>
        <article>{article.content}</article>
        <a href={article.url} target='_blank' className='text-sky-900 '>
          Link to full article
        </a>
        <br />
        <button
          className=' float-right rounded-full bg-sky-600 hover:bg-sky-900 text-base visited:text-purple-600 text-slate-700'
          onClick={handleCloseModal}>
          Close
        </button>
      </div>
    </div>
  );
};
export default ModalPage;
