import NewsListItem from '@/app/_components/NewsListItem';
import { getNews } from '@/app/_utils/actions';

export async function NewsList() {
  'use cache';

  const news = await getNews();

  return (
    <ul className='mt-4 flex w-full flex-col gap-6'>
      {news.map((newsItem, idx) => (
        <NewsListItem key={idx} news={newsItem} />
      ))}
    </ul>
  );
}
