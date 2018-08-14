var bill_mode = require('../models/bill_model');
var express = require('express');
var router = express.Router();
router.post("/", function(req, res, next) {
  bill_mode.addBill(req.body, function(err, rows) {
    if (err) 
    {
      res.json(err);
    } 
    else
    {
      console.log(rows.insertId);
      res.json(rows);
    }
  });
});


router.get("/", function(req, res, next) {
  bill_mode.getBill(function(err, rows) {
    if (err) {
      res.json(err);
    } else {
      res.json(rows);
    }
  });
});
module.exports = router;