const mongoose = require("../database");
 
// create an schema
var userSchema = new mongoose.Schema({
            name: String,
            email:String
        });
 
var userModel=mongoose.model('users',userSchema);
 
module.exports = mongoose.model("Users", userModel);

var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var userModel = require('../models/userModel');
 
 
/* GET home page. */
router.get('/', function(req, res, next) {
      
    userModel.find((err, docs) => {
        if (!err) {
            res.render("list", {
                data: docs
            });
        } else {
            console.log('Failed to retrieve the Course List: ' + err);
        }
    });
 
});
module.exports = router;

