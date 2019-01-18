var mysql = require('mysql');
var bcrypt = require('bcryptjs');


const db = mysql.createConnection({
   host     : 'cops4you.c8t7ta0pz7pb.us-east-2.rds.amazonaws.com',
   user     : 'cops4youadmin',
   password : 'cops1234567$',
   database : 'cops4you',
   port:'3306'
});


module.exports = db;

module.exports.comparePassword = function(candidatePassword, hash, callback){
    bcrypt.compare(candidatePassword,hash,(err,isMatch)=>{
        if(err) throw err;
        callback(null,isMatch);
    })
}

module.exports.passwordHash = function(newUser,callback){
    console.log(newUser)
    bcrypt.genSalt(10,(err,salt)=>{
        bcrypt.hash(newUser.password,salt,(err,hash)=>{
            if(err) throw err;
            console.log("the hash"+hash)
            newUser.password = hash;
            
            let sql = "INSERT INTO user_table (userName,password) VALUES('"+newUser.username+"','"+newUser.password+"')'";
            console.log(sql);
            db.query(sql,function(err,result){
                if(err) {
                    callback(err,null);
                }else{
                    callback(null,result)
                }
            })
            
        });
    });
}

module.exports.getUserByUsername = function(username,callback){
    console.log("got here")
    const usernamequery = "SELECT * FROM user_table WHERE userName='"+ username +"'";
    console.log(usernamequery)
    
    db.query(usernamequery,function(err,result){
        if(err) {
            callback(err,null);
        }else{
            callback(null,result)
        }
    })
}
