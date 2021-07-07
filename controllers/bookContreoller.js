const mysql=require('mysql');

//connection pool
//  const pool = mysql.createConnection.createPool({
//  if(err) throw err; // not connected;
//  console.log('connected as ID' +mysql.createConnection.thread)
//     host    : process.env.DB_HOST,
//     USER     :process.env.DB_USER,
//     password  : process.env. DB_PASS,    
//     database   :   process.env.DB_NAME


 
//view users
const newBook=(req,res)=>{

    pool.getConnection((err,connection)=>{
        if(err) throw err; //not connected
        console.log('Connected as Id'+connection.threadId);

        //user the connection
        connection.query('SELECT * FROM user',(err,row)=>{
         //when done with connection release
         connection.release();
         if(!err){
             res.sender('home',{rows})
         } else {
             console.log(err);
         }

         console.log('the data from book table : \n', rows)


        })
    });

}

module.exports={newBook}
