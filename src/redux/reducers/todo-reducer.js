import axios from "axios";

const initialValue = {
  todos: [],
  isLoading: false,
  error: "",
};

function todoReducer(state = initialValue, action) {
  switch (action.type) {
    case "delete_todo_success":
      const filterTodo = state.todos.filter(
        (item) => item.id !== action.payload
      );
      return {
        ...state,
        todos: filterTodo,
      };

    case "start_fetching":
      return {
        ...state,
        isLoading: true,
      };

    case "success_get_todo":
      return {
        ...state,
        isLoading: false,
        todos: action.payload,
      };
    default:
      return state;
  }
}

function startFetching() {
  return {
    type: "start_fetching",
  };
}

function successGetTodo(data) {
  return {
    type: "success_get_todo",
    payload: data,
  };
}

function deleteTodoSuccess(id) {
  return {
    type: "delete_todo_success",
    payload: id,
  };
}

export const addTodo = (newTodo) => async (dispatch) => {
  dispatch(startFetching());

  await axios.post(
    "https://6524bf64ea560a22a4ea0eb2.mockapi.io/todo-list",
    newTodo
  );

  dispatch(getTodo());
}

export const deleteTodo = (data) => async (dispatch) => {
  dispatch(startFetching());

  await axios.delete(
    `https://6524bf64ea560a22a4ea0eb2.mockapi.io/todo-list/${data}`
  );
  dispatch(deleteTodoSuccess(data));
  dispatch(getTodo());
}

export function getTodo() {
  return async function (dispatch) {
    dispatch(startFetching());

    const { data } = await axios(
      "https://6524bf64ea560a22a4ea0eb2.mockapi.io/todo-list"
    );

    dispatch(successGetTodo(data));
  };
}

export default todoReducer;
