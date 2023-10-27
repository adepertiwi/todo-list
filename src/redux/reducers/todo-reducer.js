const initialState = {
  todos: [
    { id: 1, value: "belajar react" },
    { id: 2, value: "belajar redux" },
  ],
};

function todoReducer(state = initialState, action) {
  switch (action.type) {
    case "add_todo":
      const newTodo = {
        id: Date.now(),
        value: action.payload,
      };

      const cloneTodos = [...state.todos, newTodo];

      return {
        todos: cloneTodos,
      };

    case "delete_todo":
      const filterTodo = state.todos.filter(
        (item) => item.id != action.payload
      );
      return {
        todos: filterTodo,
      };
    default:
      return state;
  }
}

export function addTodo(input) {
  return {
    type: "add_todo",
    payload: input,
  };
}

export function deleteTodo(id) {
  return {
    type: "delete_todo",
    payload: id,
  };
}

export default todoReducer;
