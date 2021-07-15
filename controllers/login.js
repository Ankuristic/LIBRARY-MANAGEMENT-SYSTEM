const userModel = require.main.require('./models/userModel');
const jwt= require('jsonwebtoken');


exports.login = function(req, res){
var data = {
email: req.body.email,
password: req.body.password,

};
userModel.loginUser(req.body.email, function(result){
 console.log('ankur')
   if(!result){
     res('login',{errs:[{message:'invalid email'}]});
  }
  else {
    var token = jwt.sign({email:data.email }, 
      "mynameisankur456789123", {
          expiresIn:"7days"
            
      })
      console.log(token)
      res(token)

    
    // res('valid  email ');
  }
  });
}


 



  //   app.get("/userData/",function(req,res){
  //     ogetData._getData(function(data){
  //         res.send({"status":"200","statuscode":"1","result":data});
  //     });
  // })



