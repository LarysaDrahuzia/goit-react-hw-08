import { Dialog, DialogTitle, DialogContent, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import ContactForm from '../ContactForm/ContactForm'; // існуючий компонент форми
import { useSelector } from 'react-redux';

const EditContactModal = ({ open, onClose }) => {
  const contact = useSelector(state => state.contacts.editingContact);

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
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
        <ContactForm contactToEdit={contact} onClose={onClose} />
      </DialogContent>
    </Dialog>
  );
};

export default EditContactModal;
