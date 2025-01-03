import Typography from "@mui/material/Typography";
import TaskCard, { CardProps } from "../Card/Card";
import styles from "./Column.module.css";
import IconButton from "@mui/material/IconButton";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

export type ColumnProps = {
  title: string;
  index?: number;
  data: CardProps[];
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

export default function Column({ title, data, onClick }: ColumnProps) {
  return (
    <div className={styles["column-content"]}>
      <header className={styles["column-header"]}>
        <Typography variant="h4">{title}</Typography>
        <IconButton aria-label="more" id="long-button" onClick={onClick}>
          <MoreHorizIcon />
        </IconButton>
      </header>

      {data.map((card) => (
        <TaskCard title={card.title} text={card.text} />
      ))}
    </div>
  );
}
