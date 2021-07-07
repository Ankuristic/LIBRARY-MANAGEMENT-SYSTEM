const express = require('express')
const exphbs= require('express-handlebars');
const bodyParser = require('body-parser');
const mysql=require ('mysql');

require('dotenv').config();

const app = express()
const port = process.env.PORT|| 5000;
//parsing middleware
//parse application/ x-ww-form-url-encoded

app.use(bodyParser.urlencoded({extended:false}))
//parse application/json
app.use (bodyParser.json());

//static files
app.use(express.static('public'));

//Templating engine
app.engine('hbs',exphbs({extname:'hbs'}));
app.set('view engine','hbs');


//connection pool
// const pool = mysql.createConnection.createPool({
//     host    : process.env.DB_HOST,
//     USER     :process.env.DB_USER,
//     password  : process.env. DB_PASS,    
//     database   :   process.env.DB_NAME


// })

// // COnnected to DB
// pool.getConnection((err,connection)=>{
//     if(err) throw err;
//     console.log(`Connected as ID `+ connection.threadId);
// })

// // Router 
//  app.get('',(req,res)=> {
//      res.sender('home');
//  })

//MY SQL

// const pool=mysql.createPool({
//     // connectionLimit:5,
//     host:'localhost',
//     user:'root',
//     password:'',
//     database:'lms_db'
//   })

//   pool.getConnection((err,connection)=>{
//       if(err) throw err;
//       console.log(`Connected as ID` + connection.threadId);
//   });

  

//   app.get('/lms_db',(req,res)=>{
//     //   console.log('check')
//     pool.getConnection((err,connection)=>{
//       if(err) throw err
//       console.log(`connected as id ${connection.threadId}`)
  
//       //query(sqlString, callback)
//       connection.query('SELECT * from lms_book_details',(err,rows) => {
//         connection.release()
  
//         if(!err) {
//           res.send(rows)
  
//         } else {
//           console.log(err)
//         }
//       })
  
//     })
  
//   })



// LISTEN ON ENVIRONMENT PORT OR 5000

app.listen(port,() => console.log(`listen on port ${port}`))