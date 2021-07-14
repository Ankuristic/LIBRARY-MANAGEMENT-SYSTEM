const sql= require('../models/db');

const bookModel= function(){

}
exports.getAllBook=function(result){
    sql.query("SELECT * FROM book",function(err,res){
        if(err) {
            return result(err,null);
        }
        else{
         return result(null,res);
        }
    });
}

// exports.getAllBookPagination= function(result){
//     sql.query("SELECT * FROM book WHERE ID < PREVIOUS_LIST_LAST_ID ORDER BY id DESC LIMIT 0,20",function(err,res){
//         if(err) {
//             return result(err,null);
//         }
//         else{
//          return result(null,res);
//         }
//     });
// }


// var numPerPage = 20;
// var skip = (page-1) * numPerPage; 
// var limit = skip + ',' + numPerPage; // Here we compute the LIMIT parameter for MySQL query

// exports.getAllBookPagination= function(result){
// sql.query('SELECT count(*) as numRows FROM users',function (err, rows, fields) {
//     if(err) {
//         console.log("error: ", err);
//         result(err, null);
//     }else{
//         var numRows = rows[0].numRows;
//         var numPages = Math.ceil(numRows / numPerPage);
//         sql.query('SELECT * FROM users LIMIT ' + limit,function (err, rows, fields) {
//             if(err) {
//                 console.log("error: ", err);
//                 result(err, null);
//             }else{
//                 console.log(rows)
//                 result(null, rows,numPages);
//             }
//         });            
//     }
// });

// };


exports.getAllBookPagination= function(result){
    sql.query("SELECT * FROM lms_book_details ORDER BY id DESC LIMIT 0,10 ",function(err,res){
        if(err) {
            return result(err,null);
        }
        else{
         return result(null,res);
        }
    });
}



// book issued by student 

exports. booksIssuedByStudent = (book, callback) => {
    var issueBook = "SELECT * FROM books WHERE lms_book_details = ?";
    sql.query(issueBook, [book], function(result) {
        callback(result);
    });
};

// book setisuue
exports. setIssueDate = (book_id, user_id, callback) => {
    var date = new Date();
    var sql = "INSERT INTO issue_date VALUES(null, ?, ?, ?)";
    db.executeQuery(sql, [book_id, user_id, date], function(result) {
        callback(result);
    });
};

//get all borroed book
exports. getAllBorrowedBooks = (callback) => {
    var sql = "SELECT * FROM issue_date";
    db.executeQuery(sql, null, function(result) {
        callback(result);
    });
};