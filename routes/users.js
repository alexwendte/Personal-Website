const express = require('express');
const router = express.Router();

router.get('/contact-me', (req, res, next) => {
  res.send('CONTACT-ME');
});

router.get('/projects', (req, res, next) => {
  res.send('PROJECTS');
});

router.get('/about-me', (req, res, next) => {
  res.send('ABOUT-ME');
});

module.exports = router;