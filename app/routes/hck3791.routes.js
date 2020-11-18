module.exports = (app) => {
  const validator = require('../controllers/hck3791/data.controller.js');

  app.get('/get-hours', validator.getHours);
  app.get('/get-requests', validator.getRequests);
};
