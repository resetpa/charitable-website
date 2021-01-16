var express = require('express');
var router = express.Router();

var contactUsModel = require('../modules/contactusschema');

/* GET home page. */

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Charitable Trust', msg:'' });
});


router.post('/sendmessage', function(req, res, next) {
  var messageDetail = new contactUsModel({
    Name: req.body.name,
    Email: req.body.email,
    Mobile: req.body.mobile,
    Message: req.body.message
  });
  
  messageDetail.save((err) => {
    if(err) throw err
    res.render('index', { title: 'Charitable Trust', msg:'Message Sent Successfully' });

  });   
  
  });


module.exports = router;
