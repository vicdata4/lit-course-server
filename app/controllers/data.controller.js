const { ObjectID } = require('mongodb');
const { mongoConnect } = require('../../mongo.config.js');

exports.addItem = async (req, res) => {
  const data = req.body;
  const mongo = await mongoConnect();

  if (mongo.client) {
    mongo.collection.findOne({ date: data.date }).then(item => {
      if (!item) {
        mongo.collection.insertOne(data).then(item => {
          if (item) {
            res.send({ result: item.result });
          }
          mongo.client.close();
        }).catch(() => {
          mongo.client.close();
        });
      } else {
        res.send({ exist: true });
      }
    }).catch(() => {
      mongo.client.close();
    });
  } else {
    res.status(500).send();
  }
};

exports.deleteItem = async (req, res) => {
  const id = req.params.id;
  const mongo = await mongoConnect();

  if (mongo.client) {
    mongo.collection.deleteOne({ _id: ObjectID(id) }).then(item => {
      if (item) {
        res.send({ result: item.result });
      }
      mongo.client.close();
    }).catch(() => {
      mongo.client.close();
    });
  } else {
    res.status(500).send();
  }
};

exports.updateItem = async (req, res) => {
  const data = req.body;
  const _id = ObjectID(data.id);
  delete data.id;

  const mongo = await mongoConnect();

  if (mongo.client) {
    mongo.collection.updateOne({ _id }, { $set: data }).then(item => {
      if (item) {
        res.send({ result: item.result });
      }
      mongo.client.close();
    }).catch(() => {
      mongo.client.close();
    });
  } else {
    res.status(500).send();
  }
};

exports.getItems = async (req, res) => {
  const mongo = await mongoConnect();

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
