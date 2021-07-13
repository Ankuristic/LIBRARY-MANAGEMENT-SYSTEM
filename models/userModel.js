const sql= require('./db');

const userModel= function(){

}

exports.createUser = (user, callback) => {
    
    var user = "INSERT INTO user VALUES(name,email,phone,address,password,gender)";
    sql.query(user, [user.name, user.email, user.phone,  user.address, user.password, user.gender], function(result) {
        console.log(result)
        callback(result);
    });
};


exports.loginUser = (email, password, callback) => {
    var login = "SELECT * FROM users WHERE email = ? AND password = ?";
    sql.query(login, [email, password], function(result) {
        callback(result[0]);
    });
};


   
 