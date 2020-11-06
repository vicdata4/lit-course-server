module.exports = (app) => {
  const validator = require('./controllers/data.controller.js');

  app.get('/countries', validator.getCountries);
};
