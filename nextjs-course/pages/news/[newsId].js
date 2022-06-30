import { useRouter } from 'next/router';

const DetailPage = () => {
  const { query } = useRouter();
  const newsId = query.newsId;
  return <h1>The Detail Page: {newsId}</h1>;
};

export default DetailPage;
