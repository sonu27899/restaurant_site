var order=require('../models/past_order_details');
var express=require('express');
var router=express.Router();

router.get('/:id',function(req,res,next){

    order.gePastOrder(req.params.id,function(err,rows){
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