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
    console.error('Image failed to load:');
    setImageError(true);
  };

  return (
    <div
      className='card relative max-w-full rounded overflow-hidden shadow-lg m-6'
      onClick={onClick}>
      {urlToImage && !imageError && (
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
      )}

      <div className='px-6 py-4'>
        <h5 className='font-bold text-xl mb-2'>{title}</h5>
      </div>
      <p className='text-gray-700 text-base text-inherit">'>{description}</p>
    </div>
  );
};

export default NewsCard;
