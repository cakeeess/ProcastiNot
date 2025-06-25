
import { useEffect, useState } from "react";
import useTasks from "../hooks/useTasks";
import TodoItem from "../components/TodoItem";
import Footer from "../components/footer";
const Home = () => {
  const { tasks, addTask, toggleTask, removeTask } = useTasks();
  const [input, setInput] = useState("");
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      addTask(input);
      setInput("");
    }
  };

  return (
    <>
    <div className="max-w-3xl  mx-auto mt-10 px-4">
      <div className="text-right text-gray-600 mb-2">
        {time.toLocaleDateString()} | {time.toLocaleTimeString()}
      </div>
      <form onSubmit={handleSubmit} className="flex mb-6">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="What's on your mind?"
          className="flex-1 p-3 rounded-l-xl border-2 border-teal-400 focus:outline-none focus:ring-2 focus:ring-teal-300"
        />
        <button
          type="submit"
          className="bg-teal-500 text-white px-6 rounded-r-xl font-semibold hover:bg-teal-600 transition-all"
        > Add
        </button>
      </form>

      <div className="space-y-4">
        {tasks.map((task) => (
          <TodoItem
            key={task.id}
            task={task}
            toggleTask={toggleTask}
            removeTask={removeTask}
          />
        ))}
      </div>
     
    </div>
     <Footer />
     </>
  );
};

export default Home;
