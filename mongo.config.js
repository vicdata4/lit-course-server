const { domain, port } = require('./config.js').mongodb;

const mongo = require('mongodb').MongoClient;
const url = `mongodb://${domain}:${port}:27017`;
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 5000
};

exports.mongoConnect = async (refs = {
  db: 'lit-course',
  collection: 'lit-data'
}) => {
  return mongo.connect(url, options).then(client => {
    const collection = client.db(refs.db).collection(refs.collection);
    return { client, collection };
  }).catch(error => {
    return { error };
  });
};
