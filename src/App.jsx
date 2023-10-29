import React, { useState } from "react";
import InputTodo from "./components/InputTodo";
import TodoList from "./components/TodoList";
import FilterTodo from "./components/FilterTodo";

function App() {
  const [activeFilter, setActiveFilter] = useState("all");

  return (
    <div className="justify-center items-centre">
      <h1 className="mb-6 font-bold text-2xl">What's the plan for today?</h1>
      <InputTodo />
      <FilterTodo />
      <TodoList activeFilter={activeFilter} />
    </div>
  );
}

export default App