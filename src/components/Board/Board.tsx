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
import { BoardData, CardData, ColumnData } from "../../data/types";
import { getColumnNameById } from "../../utils/getColumnNameById";
import cn from "classnames";
import { ColorPicker } from "../ColorPicker/ColorPicker";

export type BoardProps = BoardData & {
  columns: ColumnData[];
  cards: CardData[];
};

export default function Board({ id, title, columns, cards }: BoardProps) {
  const initialColumns = columns.filter((column) => column.boardId === id);
  const columnIds = new Set(columns.map((column) => column.id));
  const initialCards = cards.filter((card) => columnIds.has(card.columnId));

  const [columnData, setColumnData] = useState(initialColumns);
  const [cardData, setCardData] = useState(initialCards);

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

  const openColumnMenu = (
    event: React.MouseEvent<HTMLButtonElement>,
    id: number,
  ) => {
    setAnchorEl(event.currentTarget);
    setActiveColumnId(id);
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
    } else if (dialogType === "addColumn") {
      addColumn(formData.title);
    }
    closeDialog();
  };

  const addCard = (columnIndex: number, newCard: CardData) => {
    setCardData((prevCardData) => [
      ...prevCardData,
      {
        id: prevCardData.length + 1,
        columnId: columnIndex,
        title: newCard.title,
        text: newCard.text,
        importance: "medium",
      },
    ]);
  };

  const viewCard = (data: CardData) => {
    setActiveCardData(data);
    openDialog("viewTask");
  };

  const addColumn = (newColumnTitle: string) => {
    setColumnData((prevColumnData) => [
      ...prevColumnData,
      {
        title: newColumnTitle,
        id: columnData.length + 1,
        data: [],
        boardId: id,
        sort: 1,
        color: "white",
      },
    ]);
  };

  const removeColumn = () => {
    setColumnData((prevColumnData) =>
      prevColumnData.filter((column) => column.id !== activeColumnId),
    );
  };

  const handleSaveConfirmation = () => {
    removeColumn();
    closeConfirmation();
  };

  return (
    <>
      <ColorPicker />
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
          {columnData.map((column) => (
            <div
              className={cn(styles.column, styles[column.color])}
              key={column.id}
            >
              <Column
                id={column.id}
                title={column.title}
                color={column.color}
                sort={column.sort}
                cards={cardData.filter((card) => card.columnId === column.id)}
                onColumnClick={(event) => openColumnMenu(event, column.id)}
                onCardClick={viewCard}
              />
              <Button
                variant="contained"
                onClick={() => openDialog("addTask", column.id)}
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
        taskColumnName={getColumnNameById(columnData, activeCardData?.columnId)}
        taskImportance={activeCardData?.importance}
      />
      <ConfirmationDialog
        text={confirmationText}
        open={confirmationIsOpen}
        handleClose={closeConfirmation}
        handleSave={handleSaveConfirmation}
      />
    </>
  );
}
