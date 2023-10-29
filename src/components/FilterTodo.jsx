import { useDispatch } from "react-redux";
import { setFilter } from "../redux/reducers/todo-reducer";

function FilterTodo() {
  const dispatch = useDispatch();

  const handleFilterClick = (filter) => {
    dispatch(setFilter(filter));
  };

  return (
    <div>
      <div>
        <button onClick={() => handleFilterClick("all")}>All</button>
        <button onClick={() => handleFilterClick("active")}>Active</button>
        <button onClick={() => handleFilterClick("completed")}>Completed</button>
      </div>
    </div>
  );
}

export default FilterTodo;
