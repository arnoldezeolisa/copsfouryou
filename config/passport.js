const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const jwt = require("jsonwebtoken");

const db = require("../config/db");

module.exports = function(passport) {
  console.log("first part of passport");
  let opts = {};
  opts.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme("jwt");
  opts.secretOrKey = "cops4you";
  console.log("second part of passport");

  passport.use(
    new JwtStrategy(opts, (jwt_payload, done) => {
      console.log("third part of passport" + JSON.stringify(jwt_payload));
      console.log(
        "logged data" + JSON.stringify(jwt_payload["data"][0]["userName"])
      );

      db.getUserByUsername(jwt_payload["data"][0]["userName"], (err, user) => {
        console.log("!!!jwt " + jwt_payload + " " + user);
        if (err) {
          return done(err, false);
        }
        if (user) {
          return done(null, user);
        } else {
          return done(null, false);
        }
      });
    })
  );
};
