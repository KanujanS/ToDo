import db from '../config/db.js';

export const getTasks = async (req, res) => {
  const [rows] = await db.query(
    'SELECT * FROM tasks WHERE completed = false ORDER BY created_at DESC LIMIT 5'
  );
  res.json(rows);
};

export const addTask = async (req, res) => {
  const { title, description } = req.body;
  const [result] = await db.query(
    'INSERT INTO tasks (title, description) VALUES (?, ?)',
    [title, description]
  );
  res.status(201).json({ id: result.insertId, title, description, completed: 0 });
};

export const markDone = async (req, res) => {
  const { id } = req.params;
  await db.query('UPDATE tasks SET completed = true WHERE id = ?', [id]);
  res.sendStatus(204);
};

export const deleteTask = async (req, res) => {
  const { id } = req.params;
  await db.query('DELETE FROM tasks WHERE id = ?', [id]);
  res.sendStatus(204);
};