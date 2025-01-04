import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import DialogContent from "@mui/material/DialogContent";
import TextField from "@mui/material/TextField";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import { CardData } from "../../data/mockData";

export type DialogType =
  | "addTask"
  | "viewTask"
  | "addColumn"
  | "editColumn"
  | "editBoard";

type CustomDialogProps = {
  open: boolean;
  handleClose: () => void;
  handleSave?: (formData: any) => void;
  type?: DialogType;
  taskTitle?: string;
  taskText?: string;
};

export default function CustomDialog({
  open,
  handleClose,
  handleSave,
  type,
  taskTitle,
  taskText,
}: CustomDialogProps) {
  const addTaskContent = (
    <>
      <DialogTitle sx={{ mr: 6 }}>Add task</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          required
          margin="dense"
          id="title"
          name="title"
          label="Task Title"
          type="text"
          fullWidth
          variant="standard"
        />
        <TextField
          autoFocus
          required
          margin="dense"
          id="text"
          name="text"
          label="Task Description"
          type="text"
          fullWidth
          variant="standard"
        />
      </DialogContent>
    </>
  );

  const viewTaskContent = (
    <>
      <DialogTitle sx={{ mr: 6, mb: 1.5, minWidth: "300px" }}>
        {taskTitle}
      </DialogTitle>
      <DialogContent>
        <Typography sx={{ color: "text.secondary", mb: 1 }}>
          Описание:
        </Typography>
        <Typography>{taskText}</Typography>
      </DialogContent>
    </>
  );

  const addColumnContent = (
    <>
      <DialogTitle sx={{ mr: 6, minWidth: "300px" }}>Add column</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          required
          margin="dense"
          id="title"
          name="title"
          label="Column Name"
          type="text"
          fullWidth
          variant="standard"
        />
      </DialogContent>
    </>
  );

  const editColumnContent = (
    <>
      <DialogTitle sx={{ mr: 6, minWidth: "300px" }}>Edit column</DialogTitle>
      <DialogContent>
        <Typography sx={{ color: "text.secondary", ml: 3 }}>Title</Typography>
      </DialogContent>
    </>
  );

  const editBoardContent = (
    <>
      <DialogTitle sx={{ mr: 6, minWidth: "300px" }}>Edit board</DialogTitle>
      <DialogContent>
        <Typography sx={{ color: "text.secondary", ml: 3 }}>Title</Typography>
      </DialogContent>
    </>
  );

  const dialogContent = (type: DialogType) => {
    switch (type) {
      case "addTask":
        return addTaskContent;
      case "viewTask":
        return viewTaskContent;
      case "addColumn":
        return addColumnContent;
      case "editColumn":
        return editColumnContent;
      case "editBoard":
        return editBoardContent;
    }
  };

  const hasForm = type !== "viewTask";

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const formJson = Object.fromEntries((formData as any).entries());
    handleSave && handleSave(formJson);
  };

  return (
    <Dialog
      open={open}
      PaperProps={{
        component: "form",
        onSubmit: handleFormSubmit,
      }}
    >
      {type && dialogContent(type)}
      <IconButton
        onClick={handleClose}
        sx={{ position: "absolute", top: "5px", right: "5px" }}
      >
        <CloseIcon />
      </IconButton>
      {hasForm && (
        <DialogActions>
          <Button onClick={handleClose} color="error">
            Cancel
          </Button>
          <Button type="submit" autoFocus>
            Save
          </Button>
        </DialogActions>
      )}
    </Dialog>
  );
}
