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
    case "update_todo_success":
      const updatedTodos = state.todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return {
            ...todo,
            value: action.payload.value,
            checked: action.payload.checked,
          };
        }
        return todo;
      });
      return {
        ...state,
        todos: updatedTodos,
      };
      
      case "set_filter": 
      return {
        ...state,
        activeFilter: action.payload,
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
};

export const deleteTodo = (data) => async (dispatch) => {
  dispatch(startFetching());

  await axios.delete(
    `https://6524bf64ea560a22a4ea0eb2.mockapi.io/todo-list/${data}`
  );
  dispatch(deleteTodoSuccess(data));
  dispatch(getTodo());
};

export function getTodo(activeFilter) {
  return async function (dispatch) {
    dispatch(startFetching());

    let url = `https://6524bf64ea560a22a4ea0eb2.mockapi.io/todo-list`;
    if (activeFilter === "active") {
      url += "?checked=false";
    } else if (activeFilter === "completed") {
      url += "?checked=true";
    }

    const { data } = await axios(url);

    dispatch(successGetTodo(data));
  };
}

export const updateTodo = (id, value, checked) => async (dispatch) => {
  dispatch(startFetching());

  await axios.put(
    `https://6524bf64ea560a22a4ea0eb2.mockapi.io/todo-list/${id}`,
    { value, checked }
  );

  dispatch(updateTodoSuccess(id, value, checked));
  dispatch(getTodo());
};

export function updateTodoSuccess(id, value) {
  return {
    type: "update_todo_success",
    payload: { id, value },
  };
}

export const setFilter = (filter) => {
  return {
    type: "set_filter",
    payload: filter,
  };
};

export default todoReducer;
