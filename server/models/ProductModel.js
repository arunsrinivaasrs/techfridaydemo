/**
 * Created by arun on 14/5/15.
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var productModel = new Schema({

   productName : {type:String,required:true},
   productDesc : {type:String},
   productVersion : {type:String,required:true}


},{
    collection : 'products'

});

module.exports = mongoose.model('product',productModel);
