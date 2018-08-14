var user = require("../models/login_model");
var express = require("express");
var router = express.Router();

router.post('/:user_email', function(req, res, next) {
      user.getLoginById(req.params.user_email,req.body,function(err, rows) {
      if (err) 
      {
          res.json(err);
      } 
      else
     {
      res.json(rows);
     }
  });
});
module.exports = router;