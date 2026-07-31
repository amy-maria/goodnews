'use client';

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

  return (
    <div
      className='relative overflow-hidden box-border border-4 shadow-xl'
      onClick={onClick}>
      {urlToImage && !imageError ? (
        <picture>
          <img
            src={urlToImage}
            alt={title}
            width={100}
            height={100}
            onError={handleImageError}
            className='w-full'
          />
        </picture>
      ) : (
        <div className='w-full h-25 bg-gray-200 flex items-center justify-center text-gray-500 text-sm'>
          No image available.
        </div>
      )}

      <div className='px-6 py-4'>
        <h5 className='font-bold text-xl mb-2'>{title}</h5>
      </div>
    </div>
  );
};

export default NewsCard;
