import type { TodoItemProps } from "../types/Todo";

const TodoItem: React.FC<TodoItemProps> = ({ todo, toggleTodo, deleteTodo }) => {
  return (
    <li className="flex items-center gap-2 p-2">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleTodo(todo.id)}
        className="h-5 w-5 text-blue-500"
      />
     <div>
       <span style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
        {todo.text}
      </span>
      <p className="text-sm text-gray-500">
        Created at:{todo.createdAt}
        </p>
     </div>
      <button
        onClick={() => deleteTodo(todo.id)}
        className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600"
      >
        X
      </button>
    </li>
  );
};

export default TodoItem;