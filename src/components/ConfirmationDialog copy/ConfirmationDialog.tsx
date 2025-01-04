import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";

type ConfirmationDialogProps = {
  open: boolean;
  handleClose: () => void;
  handleSave: () => void;
  text: string;
};

export default function ConfirmationDialog({
  open,
  handleClose,
  handleSave,
  text,
}: ConfirmationDialogProps) {
  return (
    <Dialog open={open}>
      <DialogTitle sx={{ mr: 6 }}>{text}</DialogTitle>
      <IconButton
        onClick={handleClose}
        sx={{ position: "absolute", top: "5px", right: "5px" }}
      >
        <CloseIcon />
      </IconButton>
      <DialogActions>
        <Button onClick={handleClose} color="error">
          No
        </Button>
        <Button onClick={handleSave} autoFocus>
          Yes
        </Button>
      </DialogActions>
    </Dialog>
  );
}
