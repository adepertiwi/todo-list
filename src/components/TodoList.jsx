import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, getTodo } from "../redux/reducers/todo-reducer";

function TodoList() {
  const dispatch = useDispatch();
  const { isLoading, todos} = useSelector((state) => state.todo);

  useEffect(() => {
    dispatch(getTodo())
  }, []);

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  return (
    <div>
      {isLoading ? (
        <div>loading...</div>
      ) : (
        todos.map(todo => (
          <div key={todo.id}>
          <span>{todo.value}</span>
          <button>✏️</button>
              <button onClick={() => handleDelete(todo.id)}>❌</button>
            </div>
      ))
    )}
    </div>
  );
}

export default TodoList;
