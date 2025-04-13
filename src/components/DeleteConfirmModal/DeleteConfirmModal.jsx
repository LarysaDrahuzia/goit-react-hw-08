import { Dialog, DialogTitle, DialogActions, Button } from '@mui/material';

const DeleteConfirmModal = ({
  open,
  onClose,
  onConfirm,
  title = 'Delete contact?',
  confirmText = 'Delete',
  cancelText = 'Cancel',
}) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>{title}</DialogTitle>
      <DialogActions>
        <Button onClick={onClose}>{cancelText}</Button>
        <Button onClick={onConfirm} color="error">
          {confirmText}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DeleteConfirmModal;
