import Typography from "@mui/material/Typography";
import TaskCard, { CardProps } from "../Card/Card";
import styles from "./Column.module.css";

export type ColumnProps = {
  title: string;
  index: number;
  data: CardProps[];
};

export default function Column({ title, index, data }: ColumnProps) {
  return (
    <div className={styles.column}>
      <Typography variant="h4">{title}</Typography>
      <span>{index}</span>
      {data.map((card) => (
        <TaskCard title={card.title} text={card.text} />
      ))}
    </div>
  );
}
