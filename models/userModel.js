const sql= require('../models/db');

const userModel={

}

exports.  createUser = (user, callback) => {
    var sql = "INSERT INTO users VALUES(null, ?, ?, ?, ?, ?, ?, ?)";
    db.executeQuery(sql, [user.name, user.phone, user.email, 0, user.password, user.address, user.gender], function(result) {
        callback(result);
    });
};

exports. insertUser = (newUser, result) => {
    sql.query("INSERT into user SET  ?",newUser,function(err,res,field){
        if(err){
            return result(err,null);
        }else{
            return result(null,res);
        }
    });
   
}
   
 