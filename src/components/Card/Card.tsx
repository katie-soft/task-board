import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export type CardProps = {
  title: string;
  text: string;
};

export default function TaskCard({ title, text }: CardProps) {
  return (
    <Card variant="outlined" sx={{ cursor: "pointer" }}>
      <CardContent>
        <Typography variant="h5">{title}</Typography>
        <Typography variant="body2">{text}</Typography>
      </CardContent>
    </Card>
  );
}
