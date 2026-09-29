const pool = require('../config/database');

async function getAllFeedbacks(req, res, next) {
  try {
    const [rows] = await pool.query('SELECT * FROM feedbacks WHERE created_by = ? OR assigned_to = ?', [
      req.user.id,
      req.user.id,
    ]);
    res.json(rows);
  } catch (err) {
    next(err);
  }
}

async function getFeedbackById(req, res, next) {
  try {
    const [rows] = await pool.query('SELECT * FROM feedbacks WHERE id = ?', [req.params.id]);
    if (rows.length === 0) {
      return res.status(404).json({ message: 'Feedback not found' });
    }
    res.json(rows[0]);
  } catch (err) {
    next(err);
  }
}

async function createFeedback(req, res, next) {
  try {
    const { title, description, assignedTo } = req.body;

    if (!title || !description) {
      return res.status(400).json({ message: 'title and description are required' });
    }

    const [result] = await pool.query(
      'INSERT INTO feedbacks (title, description, created_by, assigned_to) VALUES (?, ?, ?, ?)',
      [title, description, req.user.id, assignedTo || null]
    );

    res.status(201).json({ id: result.insertId, title, description });
  } catch (err) {
    next(err);
  }
}

async function updateFeedback(req, res, next) {
  try {
    const { title, description, status } = req.body;

    await pool.query(
      'UPDATE feedbacks SET title = COALESCE(?, title), description = COALESCE(?, description), status = COALESCE(?, status) WHERE id = ?',
      [title, description, status, req.params.id]
    );

    res.json({ message: 'Feedback updated' });
  } catch (err) {
    next(err);
  }
}

async function deleteFeedback(req, res, next) {
  try {
    await pool.query('DELETE FROM feedbacks WHERE id = ?', [req.params.id]);
    res.json({ message: 'Feedback deleted' });
  } catch (err) {
    next(err);
  }
}

module.exports = {
  getAllFeedbacks,
  getFeedbackById,
  createFeedback,
  updateFeedback,
  deleteFeedback,
};
