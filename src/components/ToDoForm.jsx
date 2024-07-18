import React, { useState } from "react";
import { toast } from "react-toastify";
import TimePicker from "react-time-picker";
import "react-time-picker/dist/TimePicker.css";
import "react-clock/dist/Clock.css";

const ToDoForm = ({ addTask }) => {
  const [text, setText] = useState("");
  const [time, setTime] = useState("");

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
        <TimePicker
          onChange={setTime}
          value={time}
          disableClock={true}
          format="h:mm a"
          id="inputTime"
        />
        <button
          onClick={() =>
            text.length <= 0
              ? toast.warning("You cannot add empty task")
              : addTask(text, time)
          }
        >
          Add Task
        </button>
      </div>
    </>
  );
};

export default ToDoForm;
