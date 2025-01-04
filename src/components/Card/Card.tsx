import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardData } from "../../data/mockData";

import styles from "./Card.module.css";

export type CardProps = CardData & {
  onClick: (cardData: CardData) => void;
};

export default function TaskCard({ id, title, text, onClick }: CardProps) {
  return (
    <Card
      onClick={() => onClick({ id, title, text })}
      variant="outlined"
      sx={{ cursor: "pointer" }}
    >
      <CardContent>
        <span className={styles.id}>{id}</span>
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
