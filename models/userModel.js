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


exports.loginUser = (email, callback) => {
    const login = "SELECT * FROM user WHERE email = ? ";
    sql.query(login, [email], function(err,result) {
        console.log(err);
        console.log(result);
        callback(result);
    });
    
    console.log("ankur")
};



   
 