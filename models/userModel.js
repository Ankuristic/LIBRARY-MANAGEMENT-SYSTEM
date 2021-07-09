const sql= require('../models/db');

const userModel={

}

const  createUser = (user, callback) => {
    var sql = "INSERT INTO users VALUES(null, ?, ?, ?, ?, ?, ?, ?)";
    db.executeQuery(sql, [user.name, user.phone, user.email, 0, user.password, user.address, user.gender], function(result) {
        callback(result);
    });
};

const getUser = (id, callback) => {
    var sql = "SELECT * FROM users WHERE user_id=?";
    db.executeQuery(sql, [id], function(result) {
        callback(result[0]);
    });
};