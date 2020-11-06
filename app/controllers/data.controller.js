const { mongo, url, options } = require('../../mongo.config.js');

exports.getCities = (req, res) => {
  mongo.connect(url, options).then(client => {
    const collection = client.db('lit-course').collection('cities');

    collection.find().limit(100).toArray().then(data => {
      res.send({ data });
      client.close();
    }).catch(() => {
      client.close();
    });
  }).catch(() => {
    res.status(500).send();
  });
};
