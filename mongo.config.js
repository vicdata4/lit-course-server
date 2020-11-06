const { domain, port } = require('./config.js').mongodb;

module.exports = {
  mongo: require('mongodb').MongoClient,
  url: `mongodb://${domain}:${port}:27017`,
  options: {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 5000
  },
  db_name: 'lit-course'
};
