import React from "react";
import Todo from "./Todo";
import { Todos } from "./TodoListComponents.js";

export default function TodoList({ handleDone, handleUndone, todolist }) {
  return (
    <Todos>
      {todolist.map((todo, index) => (
        <Todo
          handleDone={() => handleDone(index)}
          handleUndone={() => handleUndone(index)}
          key={todo.todo}
          todo={todo.todo}
        />
      ))}
    </Todos>
  );
}
