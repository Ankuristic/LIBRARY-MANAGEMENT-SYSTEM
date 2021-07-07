const mysql=require('mysql')


//view users
exports.view=(req,res)=>{

    res.sender('home');
};

//connection pool
 const pool = mysql.createConnection.createPool({
    host    : process.env.DB_HOST,
    USER     :process.env.DB_USER,
    password  : process.env. DB_PASS,    
    database   :   process.env.DB_NAME


