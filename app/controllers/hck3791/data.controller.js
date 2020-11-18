const { mongoConnect } = require('../../../mongo.config.js');

exports.getHours = async(req, res) => {
  const mongo = await mongoConnect({ db: 'lit-course', collection: 'hours' });

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

exports.getRequests = async(req, res) => {
  const mongo = await mongoConnect({ db: 'lit-course', collection: 'requests' });

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
