import "./App.css";
import Board from "./components/Board/Board";
import { cards, columns, boards } from "./data/mockData";

export default function App() {
  return (
    <Board
      id={boards[0].id}
      title={boards[0].title}
      type={boards[0].type}
      columns={columns}
      cards={cards}
    />
  );
}
