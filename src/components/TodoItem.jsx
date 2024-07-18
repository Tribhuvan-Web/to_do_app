import React, { useState } from "react";
import { toast } from "react-toastify";

const TodoItem = ({ element, deleteTask }) => {
  const [buttonText, setButtonText] = useState("Mark as completed");
  const markAsCompleted = () => {
    toast.success("This task has been successfully completed");
    setButtonText("This task has been completed");
  };
  return (
    <>
      <div className="card">
        <p>
          <span>{element.text}</span> by <span> {element.setTime} </span>
        </p>
        <button onClick={() => deleteTask(element.id)}>Delete Task</button>
        <button
          onClick={() => markAsCompleted(element.id)}
          style={{ backgroundColor: "green" }}
        >
          {buttonText}
          {setButtonText}
        </button>
      </div>
    </>
  );
};

export default TodoItem;
