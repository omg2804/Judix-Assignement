import Task from "../models/Task.js";

export const createTask = async (req, res) => {
  const { title, description } = req.body;
  const task = await Task.create({
    title,
    description,
    user: req.userId,
  });
  res.json(task);
};

export const getTasks = async (req, res) => {
  const tasks = await Task.find({ user: req.userId }).sort({ createdAt: -1 });
  res.json(tasks);
};

export const updateTask = async (req, res) => {
  const task = await Task.findOneAndUpdate(
    { _id: req.params.id, user: req.userId },
    req.body,
    { new: true }
  );
  res.json(task);
};

export const deleteTask = async (req, res) => {
  await Task.findOneAndDelete({ _id: req.params.id, user: req.userId });
  res.json({ msg: "Deleted" });
};
