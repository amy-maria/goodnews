import React from 'react';

interface NewsCardProps {
  title: string;
  description: string;
}

const NewsCard: React.FC<NewsCardProps> = ({ title, description }) => {
  return (
    <div>
      <h2>{title}</h2>
      <br />
      <p className='text-wrap leading-relaxed'>{description}</p>
    </div>
  );
};

export default NewsCard;
