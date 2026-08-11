'use client';
import Image from 'next/image';
import { useState } from 'react';

{
  /*Single card to display one news article. */
}
interface NewsCardProps {
  title: string;
  description: string;
  urlToImage: string;
  onClick: () => void;
}

const NewsCard: React.FC<NewsCardProps> = ({
  title,
  urlToImage,
  description,
  onClick,
}) => {
  const [imageError, setImageError] = useState(false);
  const handleImageError = () => {
    console.warn('Image failed to load:', urlToImage);
    setImageError(true);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      onClick();
    }
  };

  return (
    <div
      className='relative overflow-hidden box-border border-4 shadow-xl cursor-pointer focus:outline focus:outline-2 focus:outline-offset-2'
      role='button'
      tabIndex={0}
      aria-label={`Read more: ${title}`}
      onClick={onClick}
      onKeyDown={handleKeyDown}>
      {urlToImage && !imageError ? (
        <picture>
          <div className='relative w-full aspect-video'>
            <img
              src={urlToImage}
              alt={title}
              fill
              className='object-cover'
              onError={handleImageError}
              sizes='(max-width: 768px) 100vw, (max-width:1024px) 50vw, 33vw'
            />
          </div>
        </picture>
      ) : (
        <div className='w-full h-25 bg-gray-200 flex items-center justify-center text-gray-700 text-sm'>
          No image available.
        </div>
      )}

      <div className='pwidth={x-6 py-4'>
        <h3 className='font-bold text-xl mb-2'>{title}</h3>
      </div>
    </div>
  );
};

export default NewsCard;
