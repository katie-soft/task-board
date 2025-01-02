import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

type AddTaskDialogProps = {
  open: boolean;
  handleClose: () => void;
};

export default function AddTaskDialog({
  open,
  handleClose,
}: AddTaskDialogProps) {
  return (
    <Dialog open={open} sx={{ p: 2 }}>
      <DialogTitle>Добавить задачу</DialogTitle>
      <Typography sx={{ color: "text.secondary", ml: 3 }}>Заголовок</Typography>
      <Typography sx={{ color: "text.secondary", ml: 3 }}>Текст</Typography>
      <Button onClick={handleClose}>Close</Button>
    </Dialog>
  );
}
