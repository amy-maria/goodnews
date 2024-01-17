import fetchArticles from '@/lib/fetchArticles';
import type { ArticlesResults } from '@/models/Articles';

export default async function Articles() {
  const url = 'https://newsnow.p.rapidapi.com/';

  const articles: ArticlesResults | undefined = await fetchArticles(url);

  if (!articles)
    return <h2 className='m-4 text-2xl font-bold'>No Articles Found</h2>;

  return (
    <section className='px-2 my-3 grid gap-2'>
      {images.photos.map((photo) => (
        <div key={photo.id} className='h-64 bg-gray-200 rounded-xl'></div>
      ))}
    </section>
  );
}
