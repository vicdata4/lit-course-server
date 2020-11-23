/* eslint-disable no-console */
const express = require('express');
const bodyParser = require('body-parser');
const config = require('./config.js');
const cookieParser = require('cookie-parser');
const { mongoConnect } = require('./mongo.config.js');
const c = color => `\x1b[${color}m`;
const rs = c(0);

const app = express();
app.use(cookieParser());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', config.origin);
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,form-data');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

(async function() {
  const mongo = await mongoConnect();
  if (mongo.client) {
    console.log(`${rs}${c(92)}`, 'Connected successfully to Mongodb', rs);
    mongo.client.close();
  } else {
    console.log('Mongodb error connection');
  }
}());

app.use(express.static(config.publicPath));

require('./app/lit-course.routes.js')(app);
require('./app/routes/ikeyvin.routes.js')(app);

app.get('*', (req, res) => {
  res.sendFile(`${config.publicPath}/index.html`);
});

app.listen(config.port, () => {
  console.log(`${rs}${c(96)}`, 'LitCourse Server', `${rs}is listening on port ${config.port} 🚀`);
});
