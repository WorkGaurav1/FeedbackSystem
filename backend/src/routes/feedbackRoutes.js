const express = require('express');
const {
  getAllFeedbacks,
  getFeedbackById,
  createFeedback,
  updateFeedback,
  deleteFeedback,
} = require('../controllers/feedbackController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

router.use(authMiddleware);

router.get('/', getAllFeedbacks);
router.get('/:id', getFeedbackById);
router.post('/', createFeedback);
router.put('/:id', updateFeedback);
router.delete('/:id', deleteFeedback);

module.exports = router;
