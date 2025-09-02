import type {Todo} from '../types/Todo';

export function createTodo(text: string): Todo {
  return { 
    id: Date.now(),
    text,
    completed: false,
     createdAt: new Date().toLocaleString("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
      month: "short",
      day: "numeric",
      year: "numeric",
    })
   };
};