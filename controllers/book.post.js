const sql= require("./db.config.js")

//
const Book =function (book) {


}


// to retrieve all book
Book.getAll = result => {
    sql.query("SELECT * FROM book", (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
  
      console.log("book: ", res);
      result(null, res);
    });
  };

  //pagiantion

  Book.getAll = result => {
    const limit = 20
    // page number
    const page = req.query.page
    // calculate offset
    const offset = (page - 1) * limit
    // query for fetching data with page number and offset
    const bookQuery =( "select * from Books limit "+limit+" OFFSET "+offset,(err,res), {  
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
          }
      
          console.log("books: ", res);
          result(null, res);
        });
    }
    
