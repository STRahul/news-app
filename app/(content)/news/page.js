import NewsList from '@/components/news-list';
import { getAllNews } from '@/lib/news';

export default async  function NewsPage() {
  const news = await getAllNews();
  
  // const response = await fetch('http://localhost:8080/news');
  // const news = await response.json();

  return (
    <>
      <h1>News Page</h1>
      <NewsList news={news} />
    </>
  );
}
