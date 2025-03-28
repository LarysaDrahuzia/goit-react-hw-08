import { IoMdPerson } from 'react-icons/io';
import { HiPhone } from 'react-icons/hi2';

import css from './Contact.module.css';

const Contact = ({ name, number, icon }) => {
  return (
    <div className={css.contact}>
      <div className={css.nameBox}>
        <IoMdPerson>{icon}</IoMdPerson>
        <span className={css.name}>{name}</span>
      </div>
      <div className={css.phoneBox}>
        <HiPhone>{icon}</HiPhone>
        <span className={css.phone}>{number}</span>
      </div>
    </div>
  );
};

export default Contact;
