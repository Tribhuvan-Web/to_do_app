import React, { useState } from "react";
import { toast } from "react-toastify";

const ToDoForm = ({ addTask }) => {
  const [text, setText] = useState("");

  return (
    <>
      <div className="todo-form">
        <h1>Add new Todo</h1>
        <input
          type="text"
          value={text}
          placeholder="Add to remember"
          onChange={(e) => setText(e.target.value)}
        />
        <button
          onClick={() =>
            text.length <= 0
              ? toast.warning("You cannot add empty task")
              : addTask(text)
          }
        >
          Add Task
        </button>
      </div>
    </>
  );
};

export default ToDoForm;
