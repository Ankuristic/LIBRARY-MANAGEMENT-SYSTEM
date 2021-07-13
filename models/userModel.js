const sql= require('./db');

const userModel= function(){

}

exports.createUser = (user, callback) => {
    console.log(user)
    
    const query = "INSERT INTO user (name,email,phone,address,password,gender) VALUES (?,?,?,?,?,?)";
    sql.query(query, [user.name, user.email, user.phone,  user.address, user.password, user.gender], function(result) {
        console.log(result)
        callback(result);
    });
};


exports.loginUser = (email, password, callback) => {
    const login = "SELECT * FROM user WHERE email = ? AND password = ?";
    sql.query(login, [email, password], function(result) {
        console.log(result);
        callback(result[0]);
    });
};


   
 