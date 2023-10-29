import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteTodo,
  getTodo,
  updateTodo,
} from "../redux/reducers/todo-reducer";

function TodoList() {
  const dispatch = useDispatch();
  const { isLoading, todos } = useSelector((state) => state.todo);

  const [editId, setEditId] = useState(null);
  const [editValue, setEditValue] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [activeFilter, setActiveFilter] = useState("all");

  useEffect(() => {
    dispatch(getTodo(activeFilter));
  }, [activeFilter]);

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
        <div className="text-l text-gray-600">loading...</div>
      ) : (
        todos.map((todo) => (
          <div
            key={todo.id}
            className="w-1/2 mb-2 p-2 bg-white rounded-lg shadow-sm"
          >
            {editId === todo.id ? (
              <div className="flex items-center space-x-2">
                <input
                  className="w-full p-2 border rounded-lg shadow-sm focus:outline-none focus:border-blue-300"
                  type="text"
                  value={editValue}
                  onChange={(e) => setEditValue(e.target.value)}
                />
                <button
                  className="px-3 py-2 text-white bg-green-500 rounded-lg hover:bg-green-600 focus:outline-none"
                  onClick={() => handleSaveEdit(todo.id)}
                >
                  ✅
                </button>
              </div>
            ) : (
              <div className="flex space-x-4">
                <input
                className="flex-none"
                  type="checkbox"
                  checked={todo.checked}
                  onChange={() =>
                    handleToggleCheck(todo.id, todo.value, todo.checked)
                  }
                />
                <span
                  className={`flex-1 w-100 text-lg ${
                    todo.status ? "line-through text-gray-400" : ""
                  }`}
                >
                  {todo.value}
                </span>
                {!isEditing && (
                  <div className="flex-none space-x-2">
                    <button
                      className="text-blue-500 hover:underline focus:outline-none"
                      onClick={() => handleEdit(todo.id, todo.value)}
                    >
                      ✏️
                    </button>
                    <button
                      className="text-red-500 hover:underline focus:outline-none"
                      onClick={() => handleDelete(todo.id)}
                    >
                      ❌
                    </button>
                  </div>
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
