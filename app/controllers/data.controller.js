const validators = require('../utils/validators.js');

const mock = [
  { id: 1, mail: 'test1@test.com' },
  { id: 2, mail: 'test2@test.com' }
];

exports.getUserList = (req, res) => {
  if (req.params && req.params.email && validators.emailValidator(req.params.email)) {
    res.json({ data: mock });
  }
};
