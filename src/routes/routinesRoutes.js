const express = require('express');
const router = express.Router();
const routinesController = require('../controllers/routinesController');

router.post('/createRoutine', routinesController.getSampleData);

module.exports = router;
