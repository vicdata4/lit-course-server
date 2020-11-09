const express = require('express');
const bodyParser = require('body-parser');
const config = require('./config.js');
const cookieParser = require('cookie-parser');
const { mongo, url, options } = require('./mongo.config.js');
const reset = '\x1b[0m';

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

mongo.connect(url, options).then(client => {
  // eslint-disable-next-line no-console
  console.log(`${reset} \x1b[32m`, 'Connected successfully to Mongodb', '\x1b[0m');
  client.close();
}).catch(() => {
  // eslint-disable-next-line no-console
  console.log('Mongodb error connection');
});

app.use(express.static(config.publicPath));

require('./app/lit-course.routes.js')(app);

app.get('*', (req, res) => {
  res.sendFile(`${config.publicPath}/index.html`);
});

app.listen(config.port, () => {
  // eslint-disable-next-line no-console
  console.log(`${reset} \x1b[36m`, 'LitCourse Server', `${reset}is listening on port ${config.port} 🚀`);
});
