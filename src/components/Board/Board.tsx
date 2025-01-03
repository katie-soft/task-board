import { ColumnProps } from "../Column/Column";
import Column from "../Column/Column";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CustomDialog, { DialogType } from "../CustomDialog/CustomDialog";
import AddIcon from "@mui/icons-material/Add";

import styles from "./Board.module.css";
import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import ColumnMenu from "../ColumnMenu/ColumnMenu";

export type BoardProps = {
  title: string;
  data: ColumnProps[];
};

export default function Board({ title, data }: BoardProps) {
  const [dialogIsOpen, setDialogIsOpen] = useState(false);
  const [dialogType, setDialogType] = useState<DialogType | undefined>(
    undefined,
  );

  const openDialog = (type: DialogType) => {
    setDialogType(type);
    setDialogIsOpen(true);
  };
  const closeDialog = () => {
    setDialogIsOpen(false);
  };

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const columnMenuIsOpen = Boolean(anchorEl);

  const openColumnMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const closeColumnMenu = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <section className={styles.board}>
        <Typography variant="h3" sx={{ color: "text.secondary", mb: 3 }}>
          {title}
        </Typography>
        <div className={styles["columns-wrapper"]}>
          <ColumnMenu
            anchorEl={anchorEl}
            open={columnMenuIsOpen}
            handleClose={closeColumnMenu}
          />
          {data.map((column) => (
            <div className={styles.column}>
              <Column
                title={column.title}
                data={column.data}
                onClick={openColumnMenu}
              />
              <Button variant="contained" onClick={() => openDialog("addTask")}>
                <AddIcon color="secondary" />
              </Button>
            </div>
          ))}
          <IconButton
            onClick={() => openDialog("addColumn")}
            sx={{ mt: 1.5, ml: 1.5 }}
          >
            <AddIcon color="primary" />
          </IconButton>
        </div>
      </section>

      <CustomDialog
        type={dialogType}
        open={dialogIsOpen}
        handleClose={closeDialog}
      />
    </>
  );
}
