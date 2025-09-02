export interface Todo {
  id: number;
  text: string;
  completed: boolean;
  createdAt: string; 
}

export interface TodoItemProps {
  todo: Todo;
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
}