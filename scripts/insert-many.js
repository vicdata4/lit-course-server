const { mongo, url, options } = require('../mongo.config.js');
const data = require('./countries.js').countryList;

mongo.connect(url, options).then(client => {
  const collection = client.db('lit-course').collection('countries');

  collection.insertMany(data).then(() => {
    client.close();
  }).catch(() => {
    client.close();
  });
}).catch(() => {
});
