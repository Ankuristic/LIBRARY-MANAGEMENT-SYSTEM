const userModel = require.main.require('./models/userModel');
// const jwt= require('jsonwebtoken');


exports.loginuser = function(req, res){
    var data = {
  
  email: req.body.email,
  password: req.body.password,
  
};
var token = jwt.sign({email:user.email}, 
    "mynameiaankurbackenddeveloper", {
        expiresIn:"7days"
    })
    res.send(token)

 userModel.loginUser(data, function(result){
     if(result){
        console.log(result);
        res(result);
    }
    else {
        res('Invalid');
    }
    });
  console.log(req.body);
}


 