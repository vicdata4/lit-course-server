const config = require('../../config.js');
const jwt = require('jsonwebtoken');

const getToken = (req) => {
  let token = req.headers['authorization'] || req.headers['x-access-token'];

  if (token && token.startsWith(config.prefix)) {
    token = token.slice(config.prefix.length, token.length);
  }
  return token;
};

exports.verify = (req, res, next) => {
  const token = getToken(req);
  if (token) {
    jwt.verify(token, config.secret, (err, decoded) => {
      if (err) {
        return res.json({ error: true, message: 'Token is not valid' });
      } else {
        req.decoded = decoded;
        next();
      }
    });
  } else {
    return res.json({ error: true, message: 'Auth token is not supplied' });
  }
};

exports.auth = (req, res, next) => {
  const token = getToken(req);
  if (token) {
    return jwt.verify(token, config.secret, (err) => {
      res.json({ isLogged: !(err) });
    });
  };
  return res.json({ isLogged: false });
};
