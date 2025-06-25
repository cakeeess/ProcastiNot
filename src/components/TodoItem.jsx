import React from "react";
import { motion } from "framer-motion";

const TodoItem = ({ task, toggleTask, removeTask }) => (
  <div
    className={`transition-all transform hover:scale-[1.02] shadow-md p-4 rounded-2xl bg-white border-l-4 ${
      task.completed ? "border-teal-500" : "border-cyan-400"
    }`}
  >
    <div className="flex justify-between items-center">
      <div className="flex items-start gap-3">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => toggleTask(task.id)}
          className="mt-1 accent-teal-500 w-5 h-5"
        />
        <div>
          <p
            className={`text-lg font-medium ${
              task.completed ? "line-through text-gray-400" : "text-gray-800"
            }`}
          >
            {task.text}
          </p>
          <p className="text-xs text-gray-500 mt-1">
            Added: {task.createdAt}
            {task.completed && ` | Completed: ${task.completedAt}`}
          </p>
        </div>
      </div>
      <button
        onClick={() => removeTask(task.id)}
        className="text-red-400 hover:text-red-600 text-sm font-semibold"
      >
        ✕
      </button>
    </div>
  </div>
);

export default TodoItem;

