var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var jwt = require("jsonwebtoken");
const cors = require("cors");
const passport = require("passport");
const path = require("path");
const db = require("./config/db");
let http = require("http").Server(app);

//app.set("view engine","ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ limit: "50mb" }));
app.use(passport.initialize());
app.use(passport.session());

app.use(cors());
app.use(express.static(path.join(__dirname, "public")));

//Passport Middleware

// DATABASE CONNECTION, DB setup is in config folder
db.connect(function(error) {
  if (error) {
    console.log("error connecting db: " + error);
  } else {
    console.log("Datebase Connected");
  }
});

//TEST ROUTE FOR DATABASE
app.get("/", function(req, res) {
  //about mysql
  db.query("SELECT * FROM user_accounts", function(error, rows, fields) {
    if (!!error) {
      console.log("Error in the query");
    } else {
      //parse with rows/fields
      console.log("succesful query");
      console.log(rows);
      console.log(fields);
    }
  });
});

app.post("/register", function(req, res, next) {
  console.log(req.body.email);
  let newUser = {
    username: req.body.email,
    password: req.body.password
  };
  console.log(newUser);

  //PASSWORD ENCRYPT AND DATABASE INSERT--IN config/db.js

  db.passwordHash(newUser, err => {
    if (err) {
      console.log("hash did not work! " + err);
      res.json({ success: false, msg: "Failed to register" });
    } else {
      console.log("hash did work!");
      res.json({ success: true, msg: "user registered" });
    }
  });
});

app.post("/authenticate", function(req, res, next) {
  const username = req.body.email;
  const password = req.body.password;

  db.getUserByUsername(username, (err, user) => {
    if (err) {
      console.log(err);
      return res.json({ success: false, msg: "User not found." });
    }
    if (!user[0]) {
      return res.json({ success: false, msg: "User not found." });
    } else {
      db.comparePassword(password, user[0].userPass, (err, isMatch) => {
        if (err) throw err;
        if (isMatch) {
          const token = jwt.sign({ data: user }, "cops4you", {
            expiresIn: 604800 //1 week
          });
          res.json({
            success: true,
            token: "JWT " + token
          });
        } else {
          return res.json({
            success: false,
            msg: "Username and password do not match."
          });
        }
      });
    }
  });
});

app.get("*", function(req, res) {
  res.sendFile(__dirname + "/public"); // load the single view file (angular will handle the page changes on the front-end)
});

var server = require("http").createServer(app);
var io = require("socket.io", { transports: ["websocket"] })(server, {
  origins: "*:*"
}).listen(server);
//io.set('origins', 'http://localhost:4200/messages');
server.listen(3000);

//starting socket

io.on("connection", socket => {
  // Log whenever a user connects
  console.log("user connected");

  // Log whenever a client disconnects from our websocket server
  socket.on("disconnect", function() {
    console.log("user disconnected");
  });

  // When we receive a 'message' event from our client, print out
  // the contents of that message and then echo it back to our client
  // using `io.emit()`
  socket.on("message", message => {
    console.log("Message Received: " + message);
    socket.join("some room");
    //io.to('some room').emit({type:'new-message', text: message});

    io.emit("message", message);
  });
});

process.env.PORT = 8080; //process.env.PORT || 8080;

app.listen(process.env.PORT, process.env.IP, function() {
  console.log("The Cops4You server has started on port " + process.env.PORT);
});
