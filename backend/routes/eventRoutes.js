const express = require('express');
const router = express.Router();
const Event = require('../models/Event');

router.post('/create', async (req, res) => {
  try {
    const event = await Event.create(req.body);
    res.status(201).json(event);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
