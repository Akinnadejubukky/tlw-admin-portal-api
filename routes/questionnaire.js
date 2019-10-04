const express = require('express');

const Question = require('../models/question');

const router = express.Router();

// Registration Routes

router.post('/add', async (req, res) => {
  const question = await Question.create(req.body);

  res.status(200).json({ status: 'success', question })
});

module.exports = router;
