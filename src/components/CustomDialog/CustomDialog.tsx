import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";

export type DialogType = "addTask" | "editTask" | "addColumn" | "editColumn";

type CustomDialogProps = {
  open: boolean;
  handleClose: () => void;
  type?: DialogType;
};

export default function CustomDialog({
  open,
  handleClose,
  type,
}: CustomDialogProps) {
  const addTaskContent = (
    <>
      <DialogTitle sx={{ mr: 6 }}>Add task</DialogTitle>
      <Typography sx={{ color: "text.secondary", ml: 3 }}>Title</Typography>
      <Typography sx={{ color: "text.secondary", ml: 3 }}>Text</Typography>
    </>
  );

  const editTaskContent = (
    <>
      <DialogTitle sx={{ mr: 6 }}>Edit task</DialogTitle>
      <Typography sx={{ color: "text.secondary", ml: 3 }}>Title</Typography>
      <Typography sx={{ color: "text.secondary", ml: 3 }}>Text</Typography>
    </>
  );

  const addColumnContent = (
    <>
      <DialogTitle sx={{ mr: 6 }}>Add column</DialogTitle>
      <Typography sx={{ color: "text.secondary", ml: 3 }}>Title</Typography>
    </>
  );

  const editColumnContent = (
    <>
      <DialogTitle sx={{ mr: 6 }}>Edit column</DialogTitle>
      <Typography sx={{ color: "text.secondary", ml: 3 }}>Title</Typography>
    </>
  );

  const dialogContent = (type: DialogType) => {
    switch (type) {
      case "addTask":
        return addTaskContent;
      case "editTask":
        return editTaskContent;
      case "addColumn":
        return addColumnContent;
      case "editColumn":
        return editColumnContent;
    }
  };

  return (
    <Dialog open={open}>
      {type && dialogContent(type)}
      <IconButton
        onClick={handleClose}
        sx={{ position: "absolute", top: "5px", right: "5px" }}
      >
        <CloseIcon />
      </IconButton>
    </Dialog>
  );
}
