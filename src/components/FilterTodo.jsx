import React from "react";

function FilterTodo({ activeFilter, setActiveFilter }) {
  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
  };

  return (
    <div>
      <div>
        <button onClick={() => handleFilterClick("all")}>All</button>
        <button onClick={() => handleFilterClick("active")}>Active</button>
        <button onClick={() => handleFilterClick("completed")}>
          Completed
        </button>
      </div>
    </div>
  );
}

export default FilterTodo;
