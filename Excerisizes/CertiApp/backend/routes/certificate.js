const express = require('express');
const router = express.Router();
const cert = require('../models/certificate');

router.get('/certificates', async (req, res) => {
  try {
    const details = await cert.find({});
    res.json(details);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.get('/certificates/:id', async (req, res) => {
  try {
    const certificateID = req.params.id;
    const details = await cert.findOne({ certificateID: certificateID }, { _id: 0 });
    if (!details) {
      return res.status(404).json({ error: 'Certificate not found' });
    }
    res.json(details);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.post('/certificates', async (req, res) => {
  try {
    const data = req.body;
    const result = await cert.create(data);
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
