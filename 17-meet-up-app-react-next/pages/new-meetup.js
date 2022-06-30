import NewMeetupForm from '../components/meetups/NewMeetupForm';

const NewMeetupPage = () => {

  const addMeetupHandler = (form) => {
    console.log(form);
  };

  return <NewMeetupForm onAddMeetup={addMeetupHandler} />
};

export default NewMeetupPage;