import { useEffect } from 'react';
import ContactList from '../ContactList/ContactList';
import SearchBox from '../SearchBox/SearchBox';
import ContactForm from '../ContactForm/ContactForm';
import Loader from '../Loader/Loader';
import Error from '../Error/Error';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '../../redux/contactsOps';
import {
  selectIsLoading,
  selectIsError,
  selectContacts,
} from '../../redux/contactsSlice';
import css from './App.module.css';

const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectIsError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.container}>
      <h1 className={css.title}>Phonebook</h1>

      <ContactForm />
      {isLoading && <Loader />}
      {isError && <Error>Error! Try later!</Error>}
      <SearchBox />
      {contacts.length > 0 && <ContactList />}
    </div>
  );
};

export default App;
