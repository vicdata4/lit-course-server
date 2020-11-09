module.exports = (app) => {
  const validator = require('./controllers/data.controller.js');

  app.get('/get-items', validator.getItems);
  app.post('/add-item', validator.addItem);
  app.delete('/delete-item/:id', validator.deleteItem);
  app.put('/update-item', validator.updateItem);
};
