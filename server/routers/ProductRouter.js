/**
 * Created by arun on 14/5/15.
 */

var express = require('express');

var productRouter = function(model){

    var router = express.Router();
    router.route('/').get(function(req,res){

        var query = {};
        if(req.query._id){
            query._id = req.query._id;

        }

        model.find(query,function(error,success){

            if(error){
                console.log("Unable to fetch products from database");

            }
            else{
                return res.json(success);
            }

        });
    }).post(function(req,res){

        var productdocument = new model(req.body);
        productdocument.save(function(err,data){
            if(err){
                res.send("Cannot save data in database" + err);
                console.log(req.body);
                console.log(err);
            }

            res.status(201).json(data);
        });


    });

    return router;

};
module.exports = productRouter;