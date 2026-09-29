const pool = require('../config/database');

async function getProfile(req, res, next) {
  try {
    const [rows] = await pool.query(
      'SELECT id, name, email FROM users WHERE id = ?',
      [req.user.id]
    );
    if (rows.length === 0) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(rows[0]);
  } catch (err) {
    next(err);
  }
}

async function updateProfile(req, res, next) {
  try {
    const { name, email } = req.body;

    await pool.query(
      'UPDATE users SET name = COALESCE(?, name), email = COALESCE(?, email) WHERE id = ?',
      [name, email, req.user.id]
    );

    res.json({ message: 'Profile updated' });
  } catch (err) {
    next(err);
  }
}

module.exports = { getProfile, updateProfile };
