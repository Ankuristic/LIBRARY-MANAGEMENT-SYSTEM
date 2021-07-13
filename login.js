const userModel = require.main.require('./models/userModel');
const jwt= require('jsonwebtoken');


exports.login = function(req, res){
    var data = {
  
  email: req.body.email,
  password: req.body.password,
  
};
 userModel.loginUser(req.body.email, function(result){
     if(!result){
       res.render('login',{errs:[{message:'invalid email'}]});
        
    }
    else {
      var token = jwt.sign({email:user.email}, 
        "mynameiaankurbackenddeveloper", {
            expiresIn:"7days"
        })
        res.send(token)
    
        console.log(result);
    }
    });
  console.log(req.body);
}





 



  //   app.get("/userData/",function(req,res){
  //     ogetData._getData(function(data){
  //         res.send({"status":"200","statuscode":"1","result":data});
  //     });
  // })