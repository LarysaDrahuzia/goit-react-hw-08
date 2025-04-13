import { Dialog, DialogTitle, DialogContent, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import EditForm from '../EditForm/EditForm';
import { clearEditingContact } from '../../redux/contacts/slice';
import { useDispatch, useSelector } from 'react-redux';

const EditContactModal = () => {
  const dispatch = useDispatch();
  const editingContact = useSelector(state => state.contacts.editingContact);
  const onClose = () => {
    dispatch(clearEditingContact());
  };

  return (
    <Dialog
      open={Boolean(editingContact)}
      onClose={onClose}
      fullWidth
      maxWidth="sm"
    >
      <DialogTitle
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        Edit Contact
        <IconButton onClick={onClose}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        <EditForm />
      </DialogContent>
    </Dialog>
  );
};

export default EditContactModal;
