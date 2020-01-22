var express = require('express');
var router = express.Router();
const User = require('../models/user')
/* GET users listing. */


router.get('/user/data', (req, res, next) => {
  User.find()
   .then((docs) => {
     console.log(docs);
     res.send('See your console.')
   });
})


router.post('/user/data', (req, res, next) => {
  var data = {
    name: req.body.name,
    dob: req.body.dob,
    gender: req.body.gender,
    phone: req.body.phone,
    permanentAddress: req.body.permanentAddress,
    temporaryAddress: req.body.temporaryAddress,
    password: req.body.password,
    email: req.body.email
  }

  var item = new User(data);
  item.save()
   .then(item => res.send(item))
   .catch(err => console.log(err.message))
})

module.exports = router;
