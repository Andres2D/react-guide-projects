const UserIdPage = (props) => {
  return <h1>{props.id}</h1>
};

export default UserIdPage;

// WIth getServerSideProps we don't need to get the pre-generated paths
export const getServerSideProps = async(context) => {
  const { params } = context;

  const userId = params.uid;

  return {
    props: {
      id: `userId-${userId}`
    }
  };
};
