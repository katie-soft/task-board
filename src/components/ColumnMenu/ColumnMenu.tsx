import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

export type ColumnMenuProps = {
  open: boolean;
  handleClose: () => void;
  handleEdit: () => void;
  handleDelete: () => void;
  anchorEl: null | HTMLElement;
};

export default function ColumnMenu({
  open,
  handleClose,
  handleEdit,
  handleDelete,
  anchorEl,
}: ColumnMenuProps) {
  return (
    <Menu open={open} onClose={handleClose} anchorEl={anchorEl}>
      <MenuItem onClick={handleEdit}>Edit</MenuItem>
      <MenuItem onClick={handleDelete}>Delete</MenuItem>
    </Menu>
  );
}
