import React, { useState } from "react";
import useTodos from "../hooks/useTodos";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const { todos, addTodo, toggleTodo } = useTodos();
  const [task, setTask] = useState("");

  const handleAdd = () => {
    if (task.trim()) {
      addTodo(task);
      setTask("");
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex gap-4">
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          className="flex-1 px-4 py-2 border border-blue-300 rounded-xl shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Enter a task..."
        />
        <button
          onClick={handleAdd}
          className="px-6 py-2 bg-gradient-to-r from-blue-400 to-blue-600 text-white font-semibold rounded-xl shadow-md hover:scale-105 transition-transform"
        >
          Add
        </button>
      </div>
      <div className="grid gap-4">
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} toggleTodo={toggleTodo} />
        ))}
      </div>
    </div>
  );
};

export default TodoList;
