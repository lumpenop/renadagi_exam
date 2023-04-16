export type TodoType = {id: number; text: string; done: boolean};

export const TODOS: TodoType[] = [
  {id: 1, text: '작업환경 설정', done: true},
  {id: 2, text: 'RN 기초 공부', done: true},
  {id: 3, text: 'TodoList 만들기', done: false},
];
