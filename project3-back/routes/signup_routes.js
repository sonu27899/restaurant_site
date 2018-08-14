var user = require("../models/signup_model");
var express = require("express");
var router = express.Router();

router.post('/',function(req,res,next){
    user.addUser(req.body,function(err,rows){
        if(err)
        {
            res.json(err);
        }
        else
        {
            res.json(rows);
        }
    });
});
router.get('/',function(req,res,next){
    user.getInfo(function(err,rows){
        if(err)
        {
            res.json(err);
        }
        else
        {
            res.json(rows);
        }
    });
});
module.exports=router;