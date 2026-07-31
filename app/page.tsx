import NewsPage from './newspage/NewsPage';

export default function Home() {
  return (
    <div>
      <h2 className='flex justify-center text-center text-2xl mt-2'>
        Daily Headlines
      </h2>
      <NewsPage />
    </div>
  );
}
