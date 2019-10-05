const express = require('express');

const Question = require('../models/question');
const Answer = require('../models/answer');

const router = express.Router();

// Registration Routes

router.get('/all', async (req, res) => {
  const questions = await Question.find();

  res.status(200).json({ status: 'success', questions })
})

router.post('/add', async (req, res) => {
  const question = await Question.create(req.body);

  res.status(200).json({ status: 'success', question })
});

router.post('/answer', async (req, res) => {
  // const {
  //   name,
  //   dob,
  //   age,
  //   marital,
  //   email,
  //   phone,
  //   academic,
  //   professional,
  //   experience,
  //   processing,
  //   impairment,
  //   impairments,
  //   identification,
  //   passport,
  //   ig,
  //   fb,
  //   tw,
  //   about,
  //   why,
  //   occupation,
  //   ex_poe,
  //   duration,
  //   poe,
  //   salary,
  //   nysc,
  //   state,
  //   batch,
  //   nysc_num,
  //   pop,
  //   weekends,
  //   availability,
  //   unavailability,
  //   class_time,
  //   transport,
  //   absent_days,
  //   laptop,
  //   laptop_tlw,
  //   laptop_owner,
  //   laptop_loan,
  //   ram,
  //   cpu,
  //   lp_condition,
  //   power,
  //   internet,
  //   ex_student,
  //   sm_act,
  //   no_sm_act,
  //   sm_follow,
  //   no_sm_follow,
  //   sm_like,
  //   no_sm_like,
  //   sm_comment,
  //   no_sm_comment,
  //   sm_tagging,
  //   no_sm_tagging,
  //   sm_share,
  //   no_sm_share,
  //   sm_testimonial,
  //   no_sm_testimonial,
  //   sm_screenshot,
  //   no_sm_screenshot,
  //   sm_media,
  //   no_sm_media,
  //   rules,
  //   bylaws,
  //   no_byelaws,
  //   dedication
  // } = req.body;

  const answer = await Answer.create(req.body);
  res.redirect('http://google.com')
});

module.exports = router;
