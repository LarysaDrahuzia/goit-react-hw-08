import { IoMdPerson } from 'react-icons/io';
import { HiPhone } from 'react-icons/hi2';
import { AiOutlineEdit } from 'react-icons/ai';
import css from './Contact.module.css';

const Contact = ({ id, name, number, icon, onEdit }) => {
  return (
    <div className={css.contact}>
      <div className={css.nameBox}>
        <IoMdPerson color="#fff">{icon}</IoMdPerson>
        <span className={css.name}>{name}</span>
      </div>
      <div className={css.phoneBox}>
        <HiPhone color="#fff">{icon}</HiPhone>
        <span className={css.phone}>{number}</span>
      </div>
      <button className={css.editBtn} onClick={() => onEdit(id)}>
        <AiOutlineEdit color="#fff" size={20} />
      </button>
    </div>
  );
};

export default Contact;
