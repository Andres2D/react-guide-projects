import { useRouter } from 'next/router';

const FilteredEventsPage = () => {

  const router = useRouter();
  console.log(router);

  return (
    <div>
      <h1>Filtered events</h1>
    </div>
  )
};

export default FilteredEventsPage;
