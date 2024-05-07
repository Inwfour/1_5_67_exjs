var express = require('express');
var router = express.Router();

// ---------- /users -------------
/* GET users listing. */
router.get('/:id', function(req, res, next) {

  let params = req.params
  let querys = req.query

  res.status(200).send({
    params,
    querys
  });
});

/* POST */
router.post('/', function(req, res, next) {

  let body = req.body
  let { authorization } = req.headers

  res.status(200).send({
    body,
    authorization
  });
});

/* PUT */
router.put('/', function(req, res, next) {
  res.status(200).send('PUT');
});

/* DELETE */
router.delete('/', function(req, res, next) {
  res.status(200).send('DELETE');
});

module.exports = router;
