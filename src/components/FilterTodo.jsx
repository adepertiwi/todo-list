import { useDispatch } from "react-redux";
import { setFilter } from "../redux/reducers/todo-reducer";

function FilterTodo() {
  const dispatch = useDispatch();

  const handleFilterClick = (filter) => {
    dispatch(setFilter(filter));
  };

  return (
    <div className="mb-4">
      <div className="flex items-center space-x-4">
        <button
          className="px-2 py-1 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none"
          onClick={() => handleFilterClick("all")}
        >
          All
        </button>
        <button
          className="px-2 py-1 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none"
          onClick={() => handleFilterClick("active")}
        >
          Active
        </button>
        <button
          className="px-2 py-1 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none"
          onClick={() => handleFilterClick("completed")}
        >
          Completed
        </button>
      </div>
    </div>
  );
}

export default FilterTodo;
