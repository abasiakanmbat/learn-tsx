
import { useState } from "react"
import type {Todo} from "./types/Todo";
import  {createTodo} from "./utils/createTodo";
import TodoItem from "./components/TodoItem";

const APP_NAME:string = "Todo App";
let showTodos:boolean = true;

let initialTodos: Todo[] = [
  { id: 1, text: "Learn TypeScript", completed: false },
  { id: 2, text: "Build App", completed: true },
];

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>(initialTodos);
  const [input, setInput] = useState<string>("");
  const [showTodos, setShowTodos] = useState<boolean>(true);

  const toggleTodo = (id: number): void => {
    setTodos(
      todos.map((t) =>
        t.id === id ? { ...t, completed: !t.completed } : t
      )
    );
  };

  const deleteTodo = (id: number): void => {
    setTodos(todos.filter((t) => t.id !== id));
  };

  const addTodo = (): void => {
    if (!input.trim()) return;
    const newTodo: Todo = createTodo(input);
    setTodos([...todos, newTodo]);
    setInput("");
  };

  const toggleVisibility = (): void => {
    setShowTodos(!showTodos);
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-4">
      <h1 className="text-2xl font-bold mb-4">{APP_NAME}</h1>
      <button
        onClick={toggleVisibility}
        className="bg-gray-500 text-white p-2 mb-4"
      >
        {showTodos ? "Hide Todos" : "Show Todos"}
      </button>
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          value={input}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setInput(e.target.value)
          }
          placeholder="Add a todo"
          className="border border-gray-300 p-2 rounded-md flex-grow focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={addTodo}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Add
        </button>
      </div>
      {showTodos && (
        <ul className="space-y-2">
          {todos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              toggleTodo={toggleTodo}
              deleteTodo={deleteTodo}
            />
          ))}
        </ul>
      )}
    </div>
  );

};

export default App;
