import type {Todo} from '../types/Todo';

export function createTodo(text: string): Todo {
  return { id: Date.now(), text, completed: false };
};