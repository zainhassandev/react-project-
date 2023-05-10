import { useState } from "react";
import "./styles.css";

function App() {
  const [newItem, setNewItem] = useState();
  const [todos, setTodos] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    // setTodos([
    //   ...todos,
    //   { id: crypto.randomUUID, title: newItem, completed: false },
    // ]);WRONG WAY
    setTodos((currentTodos) => {
      return [
        ...currentTodos,
        {
          id: crypto.randomUUID,
          title: newItem,
          completed: false,
        },
      ];
    });
    setNewItem("");
  };
  const toggleTodo = (completed, id) => {
    console.log(id)
    setTodos((currentTodos) => {
      return currentTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed };
        }
      });
    });
  };
  return (
    <>
      <form action="" className="new-item-form" onSubmit={handleSubmit}>
        <div className="form-row">
          <label htmlFor="item">New Item</label>
          <input
            type="text"
            name=""
            id="item"
            value={newItem}
            onChange={(event) => {
              setNewItem(event.target.value, );
            }}
          />
        </div>
        <button className="btn">Add</button>
      </form>
      <h1 className="header">Todo List</h1>
      <ul className="list">
        {todos.map((todo) => {
          return (
            <li key={todo.id}>
              <label>
                <input
                  type="checkbox"
                  checked={todo.completed}
                  value={todo.completed}
                  onChange={(e) => toggleTodo(e.target.checked, todo.id)}
                />
                {todo.title}
              </label>
              <button className="btn btn-danger">Delete</button>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default App;
