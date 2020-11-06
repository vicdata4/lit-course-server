module.exports = (app) => {
  const validator = require('./controllers/data.controller.js');

  app.get('/cities', validator.getCities);
};
