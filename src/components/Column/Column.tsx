import Typography from "@mui/material/Typography";
import TaskCard from "../Card/Card";
import styles from "./Column.module.css";
import IconButton from "@mui/material/IconButton";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { CardData, ColumnData } from "../../data/mockData";

export type ColumnProps = Omit<ColumnData, "index"> & {
  onColumnClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  onCardClick: (data: CardData) => void;
};

export default function Column({
  title,
  data,
  onColumnClick,
  onCardClick,
}: ColumnProps) {
  return (
    <div className={styles["column-content"]}>
      <header className={styles["column-header"]}>
        <Typography variant="h4">{title}</Typography>
        <IconButton aria-label="more" id="long-button" onClick={onColumnClick}>
          <MoreHorizIcon />
        </IconButton>
      </header>

      {data.map((card) => (
        <TaskCard
          key={card.id}
          id={card.id}
          title={card.title}
          text={card.text}
          onClick={() =>
            onCardClick({ id: card.id, title: card.title, text: card.text })
          }
        />
      ))}
    </div>
  );
}
