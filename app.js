var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var jwt = require("jsonwebtoken");
const cors = require('cors');
const passport = require('passport');
const path = require('path');


//app.set("view engine","ejs");
app.use(bodyParser.urlencoded({extended:true}));
app.use( bodyParser.json({limit: '50mb'}) );
require('./config/passport')(passport);
app.use(passport.initialize());
app.use(passport.session());



app.use(cors());
app.use(express.static(path.join(__dirname,'public')));



//Passport Middleware




// DATABASE CONNECTION, DB setup is in config folder




//TEST ROUTE FOR DATABASE
app.get('/',function(req,res){
    //about mysql
    db.query("SELECT * FROM user_accounts",function(error,rows,fields){
        if(!!error){
            console.log('Error in the query');
        } else{
            //parse with rows/fields
            console.log('succesful query');
            console.log(rows);
            console.log(fields);
        }
    });
});

app.get('*', function (req, res) {
    res.sendFile(__dirname + '/public'); // load the single view file (angular will handle the page changes on the front-end)
});




















process.env.PORT = 3000;//process.env.PORT || 8080;

app.listen(process.env.PORT,process.env.IP,function(){
    console.log("The Cops4You server has started on port " + process.env.PORT);
});