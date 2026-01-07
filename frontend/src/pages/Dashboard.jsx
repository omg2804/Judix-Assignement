import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  fetchTasks,
  createTask,
  deleteTask,
  updateTask,
} from "../services/taskApi";

export default function Dashboard() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [search, setSearch] = useState("");

  const navigate = useNavigate();

  const loadTasks = async () => {
    const res = await fetchTasks();
    setTasks(res.data);
  };

  useEffect(() => {
    loadTasks();
  }, []);

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  const addTask = async (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    await createTask({ title });
    setTitle("");
    loadTasks();
  };

  const removeTask = async (id) => {
    await deleteTask(id);
    loadTasks();
  };

  const toggleStatus = async (task) => {
    await updateTask(task._id, {
      status: task.status === "pending" ? "done" : "pending",
    });
    loadTasks();
  };

  const filteredTasks = tasks.filter((t) =>
    t.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-200">
      {/* Header */}
      <div className="bg-white shadow">
        <div className="max-w-5xl mx-auto p-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-600">TaskBoard</h1>
          <button
            onClick={logout}
            className="text-red-600 hover:underline font-medium"
          >
            Logout
          </button>
        </div>
      </div>

      <div className="max-w-5xl mx-auto p-6">
        {/* Add Task */}
        <div className="bg-white rounded-xl shadow p-5 mb-6">
          <h2 className="font-semibold mb-3">Create New Task</h2>
          <form onSubmit={addTask} className="flex gap-3">
            <input
              className="border rounded-lg p-3 flex-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter task title..."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 rounded-lg">
              Add
            </button>
          </form>
        </div>

        {/* Search */}
        <div className="mb-4">
          <input
            className="border rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Search tasks..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* Task List */}
        <div className="grid gap-3">
          {filteredTasks.map((task) => (
            <div
              key={task._id}
              className="bg-white rounded-xl shadow p-4 flex justify-between items-center hover:shadow-md transition"
            >
              <div
                className="cursor-pointer"
                onClick={() => toggleStatus(task)}
              >
                <p
                  className={`font-medium ${
                    task.status === "done"
                      ? "line-through text-gray-400"
                      : "text-gray-800"
                  }`}
                >
                  {task.title}
                </p>
                <span
                  className={`text-xs px-2 py-1 rounded-full ${
                    task.status === "done"
                      ? "bg-green-100 text-green-700"
                      : "bg-yellow-100 text-yellow-700"
                  }`}
                >
                  {task.status}
                </span>
              </div>

              <button
                onClick={() => removeTask(task._id)}
                className="text-sm text-red-600 hover:underline"
              >
                Delete
              </button>
            </div>
          ))}

          {filteredTasks.length === 0 && (
            <div className="bg-white rounded-xl shadow p-10 text-center text-gray-500">
              No tasks found. Create your first task 🚀
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
