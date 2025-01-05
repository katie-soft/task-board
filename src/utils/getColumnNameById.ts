import { ColumnData } from '../data/types';

export const getColumnNameById = (columns: ColumnData[], id: number | undefined) => {
  return typeof id === 'undefined' ? '' : columns.filter(column => column.id === id)[0].title;
}