'use client';
import Image from 'next/image';
import { useState } from 'react';

interface NewsCardProps {
  title: string;
  description: string;
  imageUrl: string;
}

const NewsCard: React.FC<NewsCardProps> = ({
  title,
  imageUrl,
  description,
}) => {
  const [imageError, setImageError] = useState(false);
  const handleImageError = () => {
    console.error('Image failed to load:');
    setImageError(true);
  };

  return (
    <div>
      <h2>{title}</h2>
      <br />
      {!imageError ? (
        <Image
          src={imageUrl}
          alt={title}
          width={100}
          height={100}
          onError={handleImageError}
        />
      ) : (
        <p>Error loading image</p>
      )}
      <p className='text-wrap leading-relaxed'>{description}</p>
    </div>
  );
};

export default NewsCard;
