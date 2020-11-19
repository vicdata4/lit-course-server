const { ObjectID } = require('mongodb');
const { mongoConnect } = require('../../../mongo.config');

exports.getEmployesPe = async (req, res) => {
  const mongo = await mongoConnect({ db: 'lit-course', collection: 'employes-reporte-pe' });
  if (mongo.client) {
    mongo.collection.find().limit(200).toArray().then(data => {
      res.send({ data });
      mongo.client.close();
    }).catch(() => {
      mongo.client.close();
    });
  } else {
    res.status(500).send();
  }
};

exports.getRegistersPe = async (req, res) => {
  const mongo = await mongoConnect({ db: 'lit-course', collection: 'registers-reporte-pe' });
  if (mongo.client) {
    mongo.collection.find().limit(200).toArray().then(data => {
      res.send({ data });
      mongo.client.close();
    }).catch(() => {
      mongo.client.close();
    });
  } else {
    res.status(500).send();
  }
};
