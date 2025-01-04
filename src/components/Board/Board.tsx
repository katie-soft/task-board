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
import ConfirmationDialog from "../ConfirmationDialog copy/ConfirmationDialog";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import { CardData } from "../../data/mockData";

export type BoardProps = {
  title: string;
  data: ColumnProps[];
};

export default function Board({ title, data }: BoardProps) {
  const [boardData, setBoardData] = useState(data);
  const [dialogIsOpen, setDialogIsOpen] = useState(false);
  const [dialogType, setDialogType] = useState<DialogType | undefined>(
    undefined,
  );
  const [activeColumnId, setActiveColumnId] = useState<number | null>(null);
  const [activeCardData, setActiveCardData] = useState<CardData | null>(null);

  const openDialog = (type: DialogType, columnId?: number) => {
    if (typeof columnId === "number") {
      setActiveColumnId(columnId);
    }
    setDialogType(type);
    setDialogIsOpen(true);
  };

  const closeDialog = () => {
    setDialogIsOpen(false);
    setDialogType(undefined);
  };

  const [confirmationIsOpen, setConfirmationIsOpen] = useState(false);
  const [confirmationText, setConfirmationText] = useState("");

  const openConfirmation = (text: string) => {
    setConfirmationText(text);
    setConfirmationIsOpen(true);
    closeColumnMenu();
  };
  const closeConfirmation = () => {
    setConfirmationIsOpen(false);
  };

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const columnMenuIsOpen = Boolean(anchorEl);

  const openColumnMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const closeColumnMenu = () => {
    setAnchorEl(null);
  };
  const editColumn = () => {
    openDialog("editColumn");
    setAnchorEl(null);
  };

  const handleSaveCustomDialog = (formData: any) => {
    if (dialogType === "addTask" && typeof activeColumnId === "number") {
      addCard(activeColumnId, formData);
    }
    closeDialog();
  };

  const addCard = (columnIndex: number, newCard: CardData) => {
    setBoardData((prevBoardData) =>
      prevBoardData.map((column) => {
        if (column.index === columnIndex) {
          return {
            ...column,
            data: [...column.data, newCard],
          };
        }
        return column;
      }),
    );
  };

  const viewCard = (data: CardData) => {
    setActiveCardData(data);
    openDialog("viewTask");
  };

  return (
    <>
      <section className={styles.board}>
        <header className={styles["board-header"]}>
          <Typography variant="h3" sx={{ color: "text.secondary", mb: 3 }}>
            {title}
          </Typography>
          <IconButton onClick={() => openDialog("editBoard")} size="large">
            <SettingsOutlinedIcon fontSize="inherit" />
          </IconButton>
        </header>
        <div className={styles["columns-wrapper"]}>
          <ColumnMenu
            anchorEl={anchorEl}
            open={columnMenuIsOpen}
            handleClose={closeColumnMenu}
            handleEdit={editColumn}
            handleDelete={() =>
              openConfirmation("Do you want to delete this column?")
            }
          />
          {boardData.map((column) => (
            <div className={styles.column}>
              <Column
                index={column.index}
                title={column.title}
                data={column.data}
                onColumnClick={openColumnMenu}
                onCardClick={viewCard}
              />
              <Button
                variant="contained"
                onClick={() => openDialog("addTask", column.index)}
              >
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
        handleSave={(formData) => handleSaveCustomDialog(formData)}
        taskTitle={activeCardData?.title}
        taskText={activeCardData?.text}
      />

      <ConfirmationDialog
        text={confirmationText}
        open={confirmationIsOpen}
        handleClose={closeConfirmation}
      />
    </>
  );
}
