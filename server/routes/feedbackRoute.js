// ...existing code...
import express from 'express';
import sendFeedbackEmail from '../nodemailerConfig.js';
const router = express.Router();
router.post('/', async (req, res) => { // changed: use '/' because mounted at /send-feedback
  const { feedback, rating, email } = req.body;
  if (!feedback || !email) {
    return res.status(400).json({ message: 'Feedback and email are required.' });
  }
  try {
    await sendFeedbackEmail(feedback, rating, email);
    return res.status(200).json({ message: 'Feedback sent successfully!' }); // single response
  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({ message: 'Failed to send feedback. Please try again later.' });
  }
});
export default router;
// ...existing code...