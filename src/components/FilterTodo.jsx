import { useDispatch } from "react-redux";
import { filterTodoList, setFilter } from "../redux/reducers/todo-reducer";

function FilterTodo() {
  const dispatch = useDispatch();

  const handleFilterClick = (filter) => {
    dispatch(setFilter(filter));
    dispatch(filterTodoList(filter));
  };

  return (
    <div className="grid grid-cols-6 mb-6">
      <div className="col-start-2 col-span-4">
        <div className="flex items-center space-x-2 text-xs">
          <button
            className="px-8 py-1 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none"
            onClick={() => handleFilterClick("all")}
          >
            All
          </button>
          <button
            className="px-6 py-1 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none"
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
    </div>
  );
}

export default FilterTodo;