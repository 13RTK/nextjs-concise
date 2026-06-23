import { News } from '@/app/_types/News';
import {
  Item,
  ItemContent,
  ItemTitle,
  ItemDescription,
} from '@/components/ui/item';

function NewsListItem({ news }: { news: News }) {
  return (
    <Item variant='outline' className='w-1/3 mx-auto rounded-xl'>
      <ItemContent>
        <ItemTitle>
          {news.title.length > 20
            ? `${news.title.slice(0, 50)}...`
            : news.title}
        </ItemTitle>
        <ItemDescription>
          {news.content.length > 100
            ? `${news.content.slice(0, 100)}...`
            : news.content}
        </ItemDescription>
      </ItemContent>
    </Item>
  );
}

export default NewsListItem;
