const User = require("../models/user");

exports.signup = (req, res) => {
  const user = User(req.body);
  user.save((err, user) => {
    if(err){
      return res.status(400).json({
        error: err.errmsg,
        message: "User not saved in DB",
      });
    }
    res.json(user);
  });
}