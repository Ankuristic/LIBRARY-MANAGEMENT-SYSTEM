const sql= require('../models/db');

const bookModel={

}
bookModel.getAllBook=function(result){
    sql.query("SELECT * FROM book",function(err,res){
        if(err) {
            return result(err,null);
        }
        else{
         return result(null,res);
        }
    });
}

bookModel.getAllBookPagination= function(result){
    sql.query("SELECT * FROM users WHERE id < PREVIOUS_LIST_LAST_ID ORDER BY id DESC LIMIT 3",function(err,res){
        if(err) {
            return result(err,null);
        }
        else{
         return result(null,res);
        }
    });
}