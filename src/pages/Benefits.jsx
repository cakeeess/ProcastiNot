import React from "react";

const Benefits = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-100 via-cyan-200 to-teal-100 px-8 py-24 text-gray-800 font-sans">
      <div className="max-w-4xl mx-auto bg-white/80 backdrop-blur-lg shadow-xl rounded-3xl p-10">
        <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-teal-500 mb-6">
          About the App
        </h1>
        <p className="text-lg mb-4">
          <strong>Procrastinot</strong> is a minimal yet powerful to-do list app designed to help you organize tasks, stay focused, and actually beat procrastination (get it? 👀). With a sleek UI, subtle gradients, and smooth animations, it’s more than just a list — it’s your daily productivity companion.
        </p>

        <p className="text-lg mb-4">
          The app is built using <strong>React</strong> and styled with <strong>Tailwind CSS</strong>. It uses <strong>custom hooks</strong> to cleanly manage task state, timestamps, and local storage — giving it a scalable and maintainable architecture. New tasks, completed tasks, and their respective creation/completion times are all automatically tracked and displayed.
        </p>

        <p className="text-lg mb-4">
          With real-time day, date, and time shown on the homepage, it’s easy to stay anchored to your day. Each task includes options to mark as complete or delete, with smooth entry/exit animations for better UX.
        </p>

        <p className="text-lg mb-4">
          The typography is carefully selected to reflect a calm yet modern aesthetic. All headers and text use a clean cyan-to-teal color palette that fits the calming gradient theme of the app.
        </p>

        <p className="text-lg mb-4">
          Whether you’re jotting down quick ideas or planning your week, <strong>Procrastinot</strong> is made to support your flow — not interrupt it.
        </p>

        <p className="mt-6 text-sm italic text-gray-500">
          Stay productive. Stay inspired. Stay not-procrastinating ✨
        </p>
      </div>
    </div>
  );
};

export default Benefits;
