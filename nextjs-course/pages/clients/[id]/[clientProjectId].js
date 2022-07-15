import { useRouter } from 'next/router';

const SelectedClientProjectPage = () => {

  const {query} = useRouter();

  return (
    <div>
      <h1>The Project Page for a Specific Project for a Selected Client {query.clientProjectId} - {query.id}</h1>
    </div>
  );
};

export default SelectedClientProjectPage;
