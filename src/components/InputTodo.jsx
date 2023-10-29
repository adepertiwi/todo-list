import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/reducers/todo-reducer";

function InputTodo() {
  const dispatch = useDispatch();
  const [input, setInput] = useState("");

  const handleClick = (e) => {
    e.preventDefault();
    console.log(input);
    let newTodo = {
      value: input,
      status: false,
    };
    dispatch(addTodo(newTodo));
    setInput("");
  };

  return (
    <div className="mb-2">
      <form>
        <div className="flex items-center space-x-2">
          <input
            className="w-1/2 px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:border-blue-300"
            type="text"
            placeholder="  Input todo"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            className="px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none"
            onClick={handleClick}
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
}

export default InputTodo;
