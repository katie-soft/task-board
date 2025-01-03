import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

export type ColumnMenuProps = {
  open: boolean;
  handleClose: () => void;
  anchorEl: null | HTMLElement;
};

const options = ["Edit", "Delete"];

export default function ColumnMenu({
  open,
  handleClose,
  anchorEl,
}: ColumnMenuProps) {
  return (
    <Menu open={open} onClose={handleClose} anchorEl={anchorEl}>
      {options.map((option) => (
        <MenuItem key={option} onClick={handleClose}>
          {option}
        </MenuItem>
      ))}
    </Menu>
  );
}
