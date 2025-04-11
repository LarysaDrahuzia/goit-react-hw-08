import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DocTitle from '../components/DocTitle/DocTitle';
import ContactList from '../components/ContactList/ContactList';
import ContactForm from '../components/ContactForm/ContactForm';
import SearchBox from '../components/SearchBox/SearchBox';
import Loader from '../components/Loader/Loader';
import Error from '../components/Error/Error';
import { fetchContacts } from '../redux/contacts/operations';
import {
  selectContacts,
  selectIsLoading,
  selectIsError,
} from '../redux/contacts/selectors';

const ContactsPage = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectIsError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <DocTitle>Your Phonebook</DocTitle>
      <ContactForm />
      <SearchBox />
      <div>{isLoading && <Loader />}</div>
      {isError && <Error>Error! Try later!</Error>}
      {contacts.length > 0 && <ContactList />}
    </>
  );
};

export default ContactsPage;
