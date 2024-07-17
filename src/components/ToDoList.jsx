import React from "react";
import TodoItem from "./TodoItem";

const ToDoList = ({ todo, deleteTask }) => {
  return (
    <div>
      <section className="todo-list">
        <h1>Your Todo's</h1>
        <div className="container">
          {todo && todo.length > 0 ? (
            todo.map((element) => {
              return (
                <TodoItem
                  deleteTask={deleteTask}
                  element={element}
                  key={element.id}
                />
              );
            })
          ) : (
            <p>You do not have any task to do.</p>
          )}
        </div>
      </section>
    </div>
  );
};

export default ToDoList;
