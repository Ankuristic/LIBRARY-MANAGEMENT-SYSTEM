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
        // var token = jwt.sign({email:user.email}, 
        //   "mynameiaankurbackenddeveloper", {
        //       expiresIn:"7days"
        //   })
        //   console.log(token);
        
      else res.send(data);

  })
}


// get all borrowed book 
exports.getAllBorrowed=(req,res)=>{
  const  data={
    book_id: req.body.book_id,
    user_id:req.body.user_id,
    issue_date:req.body.issue_date

  }

  bookModel.storedAllBorrowedBooks(req.body.user_id, function(err,data){
    if(data)
      res.send({
      const token = jwt.sign({user:user_id}, 
       "mynameiaankurbackenddeveloper", 
       {
           expiresIn:"7days"
       })
      })
       console.log(token);
       // console.log(result);
   
   else {
     res(err);
  }

   });
}


//   bookModel.storedAllBorrowedBooks((err,data)=>{
//     console.log(err);
//     console.log(data);

//       if (err)
//     res.status(500).send({
//       message:
//         err.message || "Some error occurred ."
//     });
//   else res.send(data);
//   })
  
// }



