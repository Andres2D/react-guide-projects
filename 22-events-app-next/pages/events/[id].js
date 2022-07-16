import { useRouter } from 'next/router';

const EventDetailPage = () => {
  const router = useRouter();

  return (
    <div>
      <h1>The Event Page: [{router.query.id}]</h1>
    </div>
  )
};

export default EventDetailPage;
