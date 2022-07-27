const UserProfilePage = (props) => {
  return <h1>{props.username}</h1>;
};

export default UserProfilePage;

export const getServerSideProps = async(context) => {
  return {
    props: {
      username: 'Andres2D'
    }
  };
};
