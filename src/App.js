import "./App.css";
import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: "This is first todo!", done: false },
    { id: 2, text: "This is second todo!", done: false },
    { id: 3, text: "This is third todo!", done: false },
    { id: 4, text: "This is fourth todo!", done: false },
  ]);

  const handleChange = (id) => {
    let newTodos = [...todos];
    const todo = newTodos.find((todo) => todo.id === id);
    todo.done = !todo.done;
    setTodos(newTodos);
  };

  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.done}
              onChange={() => handleChange(todo.id)}
            />
            <p style={{ display: "inline" }}>{todo.text}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
