import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [todos, setTodos] = useState([]);

  const [isNewTodo, setIsNewTodo] = useState(false);
  const [newTodoValue, setNewTodoValue] = useState("");

  useEffect(() => {
    let data = localStorage.getItem("todos");
    if (data) {
      setTodos(JSON.parse(data));
    }
  }, []);

  const handleTodoDone = (id) => {
    let newTodos = [...todos];
    const todo = newTodos.find((todo) => todo.id === id);
    todo.done = !todo.done;
    setTodos(newTodos);
    localStorage.setItem("todos", JSON.stringify(newTodos));
  };

  const AddTodo = (e) => {
    e.preventDefault();
    let newId = 1;
    if (todos[todos.length - 1]) {
      newId = todos[todos.length - 1].id + 1;
    }
    let newTodos = [...todos, { id: newId, text: newTodoValue, done: false }];
    setTodos(newTodos);
    setIsNewTodo(false);
    setNewTodoValue("");
    localStorage.setItem("todos", JSON.stringify(newTodos));
  };

  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.done}
              onChange={() => handleTodoDone(todo.id)}
            />
            <p style={{ display: "inline" }}>{todo.text}</p>
          </li>
        ))}
      </ul>

      {isNewTodo ? (
        <form onSubmit={AddTodo}>
          <input
            type="text"
            value={newTodoValue}
            onChange={(e) => setNewTodoValue(e.target.value)}
          />
          <button type="submit">Submit</button>
        </form>
      ) : (
        <button onClick={() => setIsNewTodo(true)}>Add todo</button>
      )}
    </div>
  );
}

export default App;
