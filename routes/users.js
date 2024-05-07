var express = require('express');
var router = express.Router();
const userSchema = require('../models/users.model')

// ---------- /users -------------
/* GET users listing. */
router.get('/:id', async function (req, res, next) {
  try {
    let params = req.params
    let querys = req.query

    let users = await userSchema.find({})

    res.status(200).send(users);
  } catch (error) {
    res.status(500).send(error.toString())
  }
});

/* POST */
router.post('/', async function (req, res, next) {
  try {
    let { name, age } = req.body

    let user = new userSchema({
      name,
      age
    })

    let save = await user.save()

    res.status(200).send(save);
  } catch (error) {
    res.status(500).send(error.toString())
  }
});

/* PUT */
router.put('/:id', async function (req, res, next) {
  try {
    let { name, age } = req.body

    let update = await userSchema.findByIdAndUpdate(req.params.id, { name, age }, { new: true })

    res.status(200).send(update);
  } catch (error) {
    res.status(500).send(error.toString())
  }

});

/* DELETE */
router.delete('/:id', async function (req, res, next) {
  try {
    
    let delete_user = await userSchema.findByIdAndDelete(req.params.id)

    res.status(200).send(delete_user);
  } catch (error) {
    res.status(500).send(error.toString())
  }

});

module.exports = router;
