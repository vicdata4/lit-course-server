module.exports = (app) => {
    const validator = require('../controllers/ikeyvin/monitoring-list-petition.controller.js');
  
    app.get('/get-petitions', validator.getPetitions);
    app.post('/add-petition', validator.addPetition);
    app.delete('/delete-petition/:id', validator.deletePetition);
    app.put('/update-petition', validator.updatePetition);
  };