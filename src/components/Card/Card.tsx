import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardData } from "../../data/types";

import styles from "./Card.module.css";

type BasicCardData = Omit<CardData, "columnId">;

export type CardProps = BasicCardData & {
  onClick: (cardData: BasicCardData) => void;
};

export default function TaskCard({
  id,
  title,
  text,
  importance,
  onClick,
}: CardProps) {
  return (
    <Card
      onClick={() => onClick({ id, title, text, importance })}
      variant="outlined"
      sx={{ cursor: "pointer" }}
    >
      <CardContent>
        <span>{id}</span>
        <span>{importance}</span>
        <Typography variant="h6" sx={{ mb: 3 }}>
          {title}
        </Typography>
        <Typography variant="body2" className={styles.description}>
          {text}
        </Typography>
      </CardContent>
    </Card>
  );
}
