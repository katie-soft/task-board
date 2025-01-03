import { BoardProps } from '../components/Board/Board';

export const mockBoard: BoardProps = {
  title: 'Тестовая доска',
  data: [
    {
      title: 'To Do',
      index: 0,
      data: [
        {
          title: 'Карточка 1',
          text: 'Задание 1'
        },
        {
          title: 'Карточка 2',
          text: 'Задание 2'
        },
        {
          title: 'Карточка 3',
          text: 'Задание 3'
        },
      ]
    },
    {
      title: 'In Progress',
      index: 1,
      data: [
        {
          title: 'Карточка 4',
          text: 'Задание 4'
        },
        {
          title: 'Карточка 5',
          text: 'Задание 5'
        },
      ]
    },
    {
      title: 'Completed',
      index: 2,
      data: [
        {
          title: 'Карточка 6',
          text: 'Задание 6'
        },
      ]
    }
  ]
}