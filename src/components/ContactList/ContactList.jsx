import Contact from '../Contact/Contact';
import { useDispatch, useSelector } from 'react-redux';

import { deleteContact } from '../../redux/contactsOps';
import css from './ContactList.module.css';
import { selectVisibleContacts } from '../../redux/contactsSlice';

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectVisibleContacts);

  return (
    <>
      <ul className={css.list}>
        {contacts.map(({ id, name, number }) => (
          <li key={id} className={css.item}>
            <Contact name={name} number={number} />
            <button
              className={css.btn}
              onClick={() => dispatch(deleteContact(id))}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ContactList;
