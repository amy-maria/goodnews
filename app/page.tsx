import NewsPage from './newspage/NewsPage';

export default function Home() {
  return (
    <div>
      <article>
        <h2 className='text-center text-2xl'>Daily Headlines</h2>
        <NewsPage />
      </article>
    </div>
  );
}
