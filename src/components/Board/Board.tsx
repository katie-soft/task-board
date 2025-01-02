import { ColumnProps } from "../Column/Column";
import Column from "../Column/Column";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import AddTaskDialog from "../AddTaskDialog/AddTaskDialog";

import styles from "./Board.module.css";
import { useState } from "react";

export type BoardProps = {
  title: string;
  data: ColumnProps[];
};

export default function Board({ title, data }: BoardProps) {
  const [addTaskDialogIsOpen, setAddTaskDialogIsOpen] = useState(false);
  const openAddTaskDialog = () => {
    setAddTaskDialogIsOpen(true);
  };
  const closeAddTaskDialog = () => {
    setAddTaskDialogIsOpen(false);
  };
  return (
    <>
      <section className={styles.board}>
        <Typography variant="h3" sx={{ color: "text.secondary", mb: 3 }}>
          {title}
        </Typography>
        <div className={styles["columns-wrapper"]}>
          {data.map((column) => (
            <div className={styles.column}>
              <Column
                title={column.title}
                index={column.index}
                data={column.data}
              />
              <Button variant="contained" onClick={openAddTaskDialog}>
                +
              </Button>
            </div>
          ))}
        </div>
      </section>
      <AddTaskDialog
        open={addTaskDialogIsOpen}
        handleClose={closeAddTaskDialog}
      />
    </>
  );
}
