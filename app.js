var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var jwt = require("jsonwebtoken");
const cors = require('cors');
const passport = require('passport');
const path = require('path');
const db = require("./config/db");


//app.set("view engine","ejs");
app.use(bodyParser.urlencoded({extended:true}));
app.use( bodyParser.json({limit: '50mb'}) );
app.use(passport.initialize());
app.use(passport.session());



app.use(cors());
app.use(express.static(path.join(__dirname,'public')));



//Passport Middleware




// DATABASE CONNECTION, DB setup is in config folder
db.connect(function(error){
    if(error){
        console.log('error connecting db: '+error)
    }else{
        console.log('Datebase Connected');
    }
});



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


app.post("/register",function(req,res,next){
        console.log(req.body.email)
        let newUser = {
            username:req.body.email,
            password:req.body.password
        }
        console.log(newUser)
        
        //PASSWORD ENCRYPT AND DATABASE INSERT--IN config/db.js
        
        db.passwordHash(newUser,(err)=>{
            if(err){
                console.log('hash did not work! '+err)
                res.json({success: false,msg:"Failed to register"})
            }else{
                console.log('hash did work!')
                res.json({success:true,msg:"user registered"})    
            }
        });
    });


   app.post("/authenticate",function(req,res,next){

        const username = req.body.username;
        const password = req.body.password;
        
        db.getUserByUsername(username, (err,user) => {
            
            if(err) {
                console.log(err)
                return res.json({success:false,msg:"User not found."})
            };
            if(!user[0]){
                return res.json({success:false,msg:"User not found."});
            }else{
            
            db.comparePassword(password, user[0].password,(err, isMatch)=>{
                if(err) throw err;
                if(isMatch){
                    const token = jwt.sign({data: user},'cops4you',{
                        expiresIn:604800 //1 week
                    });
                    res.json({
                        success:true,
                        token: 'JWT '+token
                    })
                }else{
                    return res.json({success:false,msg:'Username and password do not match.'})
                }
            
            })
        }
        })
        
        })



app.get('*', function (req, res) {
    res.sendFile(__dirname + '/public'); // load the single view file (angular will handle the page changes on the front-end)
});








process.env.PORT = 8080;//process.env.PORT || 8080;

app.listen(process.env.PORT,process.env.IP,function(){
    console.log("The Cops4You server has started on port " + process.env.PORT);
});

//starting socket
var socket = require('socket.io');

//apps set up
var server = app.listen(8080, function(){
    console.log('listening to requests on port 8080');
});



//socket setup
var io = socket(server);

io.on('connection', function(socket) {
    console.log('made socket connection')
})
