import React, { useState } from "react";
import InputTodo from "./components/InputTodo";
import TodoList from "./components/TodoList";
import FilterTodo from "./components/filterTodo";

function App() {
  const [activeFilter, setActiveFilter] = useState("all");

  return (
    <div>
      <h1>What`s the plan for today?</h1>
      <InputTodo />
      <FilterTodo activeFilter={activeFilter} setActiveFilter={setActiveFilter} />
      <TodoList activeFilter={activeFilter} />
    </div>
  )
}

export default App