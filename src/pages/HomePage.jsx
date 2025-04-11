import DocTitle from '../components/DocTitle/DocTitle';
import { AiFillPhone } from 'react-icons/ai';

const HomePage = () => {
  return (
    <div>
      <DocTitle>
        Welcome to your Phonebook! {''}
        <AiFillPhone color="aqua" size={36} />
        <p>All your contacts, all in one place.</p>
      </DocTitle>
    </div>
  );
};

export default HomePage;
