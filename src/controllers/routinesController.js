const routinesService = require('../services/routinesService');

exports.getSampleData = (req, res) => {
  const data = routinesService.getData();
  res.status(200).json(data);
};
