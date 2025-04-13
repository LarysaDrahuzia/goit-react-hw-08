import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { updateContact } from '../../redux/contacts/operations';
import toast from 'react-hot-toast';
import css from './EditForm.module.css';

const UserSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Enter the number of characters from 3 to 50')
    .max(50, 'Enter the number of characters from 3 to 50')
    .required('This field is required'),
  number: Yup.string()
    .max(18, 'Incorrect phone number')
    .required('This field is required'),
});

const EditForm = () => {
  const dispatch = useDispatch();
  const editingContact = useSelector(state => state.contacts.editingContact);

  const handleSubmit = (values, actions) => {
    dispatch(
      updateContact({
        id: editingContact.id,
        updatedData: {
          name: values.name,
          number: values.number,
        },
      })
    );
    toast.success(`Contact edited`, {
      style: {
        background: '#33f3ff',
        color: '#070929',
        fontWeight: 'bold',
      },
    });
    actions.resetForm();
  };

  return (
    <Formik
      enableReinitialize
      initialValues={{
        name: editingContact?.name || '',
        number: editingContact?.number || '',
      }}
      validationSchema={UserSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.form}>
        <div className={css.box}>
          <label className={css.label}>Name</label>
          <Field className={css.field} type="text" name="name" />
          <ErrorMessage className={css.error} name="name" component="span" />
        </div>
        <div className={css.box}>
          <label className={css.label}>Number</label>
          <Field className={css.field} type="tel" name="number" />
          <ErrorMessage className={css.error} name="number" component="span" />
        </div>
        <button className={css.button} type="submit">
          Save
        </button>
      </Form>
    </Formik>
  );
};

export default EditForm;
