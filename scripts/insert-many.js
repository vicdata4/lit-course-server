const { mongo, url, options } = require('../mongo.config.js');
const data = require('./cities.js').cities;

mongo.connect(url, options).then(client => {
  const collection = client.db('lit-course').collection('cities');

  collection.insertMany(data).then(() => {
    client.close();
  }).catch(() => {
    client.close();
  });
}).catch(() => {
});
