import { useState } from "react";

import Form from "./Form";
import Footer from "./Footer";
import TodoList from "./TodoList";
export default function Todo() {
  const [todos, setTodos] = useState([]);
  const completedTodos = todos.filter((todo) => todo.done === true).length;
  const totalTodos = todos.length;
  return (
    <div className="float-child_1">
      <Form todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
      <Footer completedTodos={completedTodos} totalTodos={totalTodos} />
    </div>
  );
}
