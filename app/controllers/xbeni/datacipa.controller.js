const { ObjectID } = require('mongodb');
const { mongoConnect } = require('../../../mongo.config');

exports.getUsersCipa = async (req, res) => {
  const mongo = await mongoConnect({ db: 'lit-course', collection: 'users-cipa' });
  if (mongo.client) {
    mongo.collection.find().limit(100).toArray().then(data => {
      res.send({ data });
      mongo.client.close();
    }).catch(() => {
      mongo.client.close();
    });
  } else {
    res.status(500).send();
  }
};
