const { ObjectID } = require('mongodb');
const { mongo, url, options } = require('../../mongo.config.js');

exports.addItem = (req, res) => {
  const data = req.body;

  mongo.connect(url, options).then(client => {
    const collection = client.db('lit-course').collection('lit-data');

    collection.insertOne(data).then(item => {
      if (item) {
        res.send({ result: item.result });
      }
      client.close();
    }).catch(() => {
      client.close();
    });
  }).catch(() => {
    res.status(500).send();
  });
};

exports.deleteItem = (req, res) => {
  const id = req.params.id;

  mongo.connect(url, options).then(client => {
    const collection = client.db('lit-course').collection('lit-data');

    collection.deleteOne({ _id: ObjectID(id) }).then(item => {
      if (item) {
        res.send({ result: item.result });
      }
      client.close();
    }).catch(() => {
      client.close();
    });
  }).catch(() => {
    res.status(500).send();
  });
};

exports.updateItem = (req, res) => {
  const data = req.body;
  const _id = ObjectID(data.id);
  delete data.id;

  mongo.connect(url, options).then(client => {
    const collection = client.db('lit-course').collection('lit-data');

    collection.updateOne({ _id }, { $set: data }).then(item => {
      if (item) {
        res.send({ result: item.result });
      }
      client.close();
    }).catch(() => {
      client.close();
    });
  }).catch(() => {
    res.status(500).send();
  });
};

exports.getItems = (req, res) => {
  mongo.connect(url, options).then(client => {
    const collection = client.db('lit-course').collection('lit-data');

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
