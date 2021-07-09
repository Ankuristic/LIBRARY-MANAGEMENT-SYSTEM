const userModel=require("../models/controllers")

// to retrieve all user data
exports.findAll=(req,res)=>{
    userModel.getUser((err,data)=>{
        if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving user."
      });
    else res.send(data);
    })
}