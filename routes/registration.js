const express = require('express');

const Registration = require('../models/registration');

const router = express.Router();

// Registration Routes

router.get('/all', async (req, res) => {
  const registrations = await Registration.find(); //{ 'interview.day': '5/10/19' }

  res.status(200).json({ registrations })
});

module.exports = router;
