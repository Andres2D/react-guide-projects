import { useRouter } from 'next/router';

const ClientProjectsPage = () => {

  const router = useRouter();

  const loadProjectHandler = () => {
    // approach 1
    // router.push('/clients/max/projectA');
    
    // approach 2
    router.push({
      pathname: '/clients/max/projectA',
      query: {
        id: 'max',
        clientProjectId: 'projectA'
      }
    });
    
    //cant go back on navigation
    // router.replace('/clients/max/projectA');

  };

  return (
    <div>
      <h1>The Projects of a Given Client</h1>
      <button onClick={loadProjectHandler}>Load Project A</button>
    </div>
  )
};

export default ClientProjectsPage;
