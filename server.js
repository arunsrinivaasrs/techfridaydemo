/**
 * Created by arun on 14/5/15.
 */
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var productModel = require('./server/models/ProductModel');
var productRouter = require('./server/routers/ProductRouter')(productModel);

var app = express();
var PORT = process.env.PORT || 8089;

app.use(express.static('public'));

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());


mongoose.connect('mongodb://autodesk:welcome123@ds053877.mongolab.com:53877/adeskproducts');

app.use('/autodesk/products',productRouter);

app.get('/',function(req,res){
    res.sendFile(path.join(__dirname, '../public', 'index.html'));
});
app.listen(PORT,function(){

   console.log("Server listening @ " + PORT);
});




