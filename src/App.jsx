import React, { useState } from "react";
import InputTodo from "./components/InputTodo";
import TodoList from "./components/TodoList";
import FilterTodo from "./components/FilterTodo";

function App() {
  const [activeFilter, setActiveFilter] = useState("all");

  return (
    <div className="justify-center items-centre">
      <div className="text-center">
        <h1 className="mt-10 mb-10 font-bold text-4xl">What's the plan for today?</h1>
      </div>
      <InputTodo />
      <FilterTodo />
      <TodoList activeFilter={activeFilter} />
    </div>
  );
}

export default App;
