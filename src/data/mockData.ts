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
      title: 'Completed',
      index: 2,
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
    }
  ]
}