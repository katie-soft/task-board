export type BoardType = 'private' | 'shared';

export type BoardData = {
  id: number;
  title: string;
  type: BoardType;
}

export type Color = 'white' | 'blue' | 'yellow' | 'pink' | 'green';

export type ColumnData = {
  id: number;
  boardId: number;
  title: string;
  sort: number;
  color: Color;
}

export type Importance = 'high' | 'medium' | 'low';

export type CardData = {
  id: number;
  columnId: number;
  title: string;
  text: string;
  createdAt?: Date;
  updatedAt?: Date;
  importance: Importance;
}