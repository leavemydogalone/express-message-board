var express = require('express');
var router = express.Router();

const messages = [
  {
    text: 'Hi there!',
    user: 'Amando',
    added: new Date(),
  },
  {
    text: 'Hello World!',
    user: 'Charles',
    added: new Date(),
  },
];

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express', messages: messages });
});

router.post('/', function (req, res, next) {
  return res.redirect('/new');
});

/* GET form page. */

router.get('/new', function (req, res, next) {
  res.render('form', { title: 'Express' });
});

router.post('/new', function (req, res, next) {
  messages.push({
    user: req.body.text,
    text: req.body.author,
    added: new Date(),
  });
  console.log(req.body);

  res.redirect('/');
});

module.exports = router;
