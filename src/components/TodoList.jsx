import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, getTodo, updateTodo } from "../redux/reducers/todo-reducer";

function TodoList() {
  const dispatch = useDispatch();
  const { isLoading, todos } = useSelector((state) => state.todo);

  const [editId, setEditId] = useState(null);
  const [editValue, setEditValue] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    dispatch(getTodo());
  }, []);

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  const handleEdit = (id, value) => {
    setEditId(id);
    setEditValue(value);
    setIsEditing(true);
  };
  
  const handleSaveEdit = (id) => {
    dispatch(updateTodo(id, editValue));
    setEditId(null);
    setEditValue("");
    setIsEditing(false);
  };

  const handleToggleCheck = (id, value, checked) => {
    const newChecked = !checked; 
    dispatch(updateTodo(id, value, newChecked));
  };

  return (
    <div>
      {isLoading ? (
        <div>loading...</div>
      ) : (
        todos.map((todo) => (
          <div key={todo.id}>
            {editId === todo.id ? (
              <div>
                <input
                  type="text"
                  value={editValue}
                  onChange={(e) => setEditValue(e.target.value)}
                />
                <button onClick={() => handleSaveEdit(todo.id)}>✅</button>
              </div>
            ) : (
              <div>
        <input
          type="checkbox"
          checked={todo.checked}
          onChange={() => handleToggleCheck(todo.id, todo.value, todo.checked)}
        />
              <span style={{ textDecoration: todo.checked ? "line-through" : "none" }}>
          {todo.value}
        </span>
             {!isEditing && (
          <>
            <button onClick={() => handleEdit(todo.id, todo.value)}>✏️</button>
            <button onClick={() => handleDelete(todo.id)}>❌</button>
            </>
            )}
            </div>
          )}
        </div>
      ))
    )}
  </div>
);
}

export default TodoList;
