const { mongo, url, options } = require('../../mongo.config.js');

exports.getCountries = (req, res) => {
  mongo.connect(url, options).then(client => {
    const collection = client.db('lit-course').collection('countries');

    collection.find().toArray().then(data => {
      res.send({ data });
      client.close();
    }).catch(() => {
      client.close();
    });
  }).catch(() => {
    res.status(500).send();
  });
};
