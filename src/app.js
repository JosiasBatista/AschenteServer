const express = require('express');
const app = express();
const routinesRouter = require('./routes/routinesRoutes');

// Middleware
app.use(express.json());

// Routes
app.use('/api/sample', routinesRouter);

module.exports = app;
