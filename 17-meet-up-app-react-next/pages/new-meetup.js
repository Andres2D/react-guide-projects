import { useRouter } from 'next/router';
import NewMeetupForm from '../components/meetups/NewMeetupForm';

const NewMeetupPage = () => {

  const router = useRouter();

  const addMeetupHandler = async(form) => {
    const response = await fetch('/api/new-meetup', {
      method: 'POST',
      body:JSON.stringify(form),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    const data = await response.json();
    console.log(data);
    router.push('/');
  };

  return <NewMeetupForm onAddMeetup={addMeetupHandler} />
};

export default NewMeetupPage;