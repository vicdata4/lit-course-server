module.exports = (app) => {
  const validator = require('./controllers/data.controller.js');

  app.get('/get-items', validator.getItemList);
  app.post('/add-item', validator.addItem);
  app.delete('/delete-item/:id', validator.deleteItem);
};
