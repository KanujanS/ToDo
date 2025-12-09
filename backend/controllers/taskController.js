import db from '../config/db.js';

export const getTasks = async (req, res) => {
  try { const [rows] = await db.query(
    'SELECT * FROM task WHERE completed = false ORDER BY created_at DESC LIMIT 5'
  );
  res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
};

export const addTask = async (req, res) => {
  const { title, description } = req.body;
  const [result] = await db.query(
    'INSERT INTO task (title, description) VALUES (?, ?)',
    [title, description]
  );
  res.status(201).json({ id: result.insertId, title, description, completed: 0 });
};

export const markDone = async (req, res) => {
  const { id } = req.params;
  await db.query('UPDATE task SET completed = true WHERE id = ?', [id]);
  res.sendStatus(204);
};

export const deleteTask = async (req, res) => {
  const { id } = req.params;
  await db.query('DELETE FROM task WHERE id = ?', [id]);
  res.sendStatus(204);
};