const bookModel =require("../models/bookModel")


// to retrieve all books
exports.findAll=(req,res)=>{
    bookModel.getAllBook((err,data)=>{
      console.log(err);
      console.log(data);

        if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving books."
      });
    else res.send(data);
    })
    
}

// // to retrieve all book by pagination
exports.findAllPagination=(req,res)=>{
    bookModel.getAllBookPagination((err,data)=>{
      console.log(err);
      console.log(data);
        if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred ."
        });
      else res.send(data);
    })
}
// book get by student
exports.bookGetByStudent=(req,res)=>{
  bookModel. booksIssuedByStudent((err,data)=>{
    console.log(err);
      console.log(data);
        if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred ."
        });
      else res.send(data);

  })
}