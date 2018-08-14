var bill_details_model=require('../models/bill_details_model');
var express=require('express');
var router=express.Router();
router.post('/',function(req,res,next){
    bill_details_model.addBillDetails(req.body,function(err,rows){
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
    bill_details_model.getBillDetails(function(err,rows){
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