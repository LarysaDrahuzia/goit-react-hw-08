import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Contact from '../Contact/Contact';
import DeleteConfirmModal from '../DeleteConfirmModal/DeleteConfirmModal';
import EditContactModal from '../EditContactModal/EditContactModal';
import { deleteContact, updateContact } from '../../redux/contacts/operations';
import { selectVisibleContacts } from '../../redux/contacts/slice';
import toast from 'react-hot-toast';
import css from './ContactList.module.css';

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectVisibleContacts);

  // Стейт для збереження ID контакту, що видаляється
  const [contactToDelete, setContactToDelete] = useState(null);

  const handleDeleteConfirm = () => {
    if (contactToDelete) {
      dispatch(deleteContact(contactToDelete.id));
      toast.success(`Contact "${contactToDelete.name}" successfully deleted`, {
        style: {
          background: '#33f3ff',
          color: '#070929',
          fontWeight: 'bold',
        },
      });
      setContactToDelete(null);
    }
  };

  const [editingContact, setEditingContact] = useState(null);

  const handleEdit = id => {
    const contact = contacts.find(contact => contact.id === id);
    // console.log('Editing:', contact);
    setEditingContact(contact);
  };

  return (
    <>
      <ul className={css.list}>
        {contacts.map(({ id, name, number }) => (
          <li key={id} className={css.item}>
            <Contact id={id} name={name} number={number} onEdit={handleEdit} />
            <button
              className={css.btn}
              onClick={() => setContactToDelete({ id, name })} // Відкриваємо модалку
            >
              Delete
            </button>
          </li>
        ))}
      </ul>

      {/* Модалка підтвердження */}
      <DeleteConfirmModal
        open={!!contactToDelete}
        onClose={() => setContactToDelete(null)}
        onConfirm={handleDeleteConfirm}
        title={`Delete contact "${contactToDelete?.name}"?`}
      />

      {/* Модалка для редагування */}
      {editingContact && (
        <EditContactModal
          open={editingContact}
          onClose={() => setEditingContact(null)}
          // contact={editingContact}
        />
      )}
    </>
  );
};

export default ContactList;
