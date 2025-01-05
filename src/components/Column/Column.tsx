import Typography from "@mui/material/Typography";
import TaskCard from "../Card/Card";
import styles from "./Column.module.css";
import IconButton from "@mui/material/IconButton";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { CardData, ColumnData } from "../../data/types";

export type ColumnProps = Omit<ColumnData, "boardId"> & {
  cards: CardData[];
  onColumnClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  onCardClick: (data: CardData) => void;
};

export default function Column({
  id,
  title,
  color,
  cards,
  onColumnClick,
  onCardClick,
}: ColumnProps) {
  const columnCards = cards.filter((card) => card.columnId === id);

  return (
    <div className={styles["column-content"]}>
      <span>{color}</span>
      <header className={styles["column-header"]}>
        <Typography variant="h4">{title}</Typography>
        <IconButton aria-label="more" id="long-button" onClick={onColumnClick}>
          <MoreHorizIcon />
        </IconButton>
      </header>

      {columnCards.map((card) => (
        <TaskCard
          key={card.id}
          id={card.id}
          title={card.title}
          text={card.text}
          importance={card.importance}
          onClick={() =>
            onCardClick({
              id: card.id,
              title: card.title,
              text: card.text,
              columnId: card.columnId,
              importance: card.importance,
            })
          }
        />
      ))}
    </div>
  );
}
