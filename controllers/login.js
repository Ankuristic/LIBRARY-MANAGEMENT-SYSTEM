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
       res.send('login',{errs:[{message:'invalid email'}]});
       var token = jwt.sign({email:user.email , user: user_id}, 
        "mynameiaankurbackenddeveloper", {
            expiresIn:"7days"
        })

        res.send({"status":"200","statuscode":"1","result":result});
        console.log(token);
        // console.log(result);
    
        
    }
    else {
      
      res('valid  email ');
    }
    });
    // console.log(result);
//   console.log(req.body);
}





 



  //   app.get("/userData/",function(req,res){
  //     ogetData._getData(function(data){
  //         res.send({"status":"200","statuscode":"1","result":data});
  //     });
  // })