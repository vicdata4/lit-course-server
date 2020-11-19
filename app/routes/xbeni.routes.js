module.exports = (app) => {
  const validatorCipa = require('../controllers/xbeni/datacipa.controller.js');
  const validatorPe = require('../controllers/xbeni/reportepe.controller');

  app.get('/get-users-cipa', validatorCipa.getUsersCipa);
  app.get('/get-employes-pe', validatorPe.getEmployesPe);
  app.get('/get-registers-pe', validatorPe.getRegistersPe);
};
