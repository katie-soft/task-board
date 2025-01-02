import "./App.css";
import Board from "./components/Board/Board";
import { mockBoard } from "./data/mockData";

export default function App() {
  return <Board title={mockBoard.title} data={mockBoard.data} />;
}
