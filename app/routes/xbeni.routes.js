module.exports = (app) => {
  const validator = require('../controllers/xbeni/datacipa.controller.js');

  app.get('/get-users-cipa', validator.getUsersCipa);
};
