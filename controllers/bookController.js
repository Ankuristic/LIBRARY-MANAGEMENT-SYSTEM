const bookModel =require("../models/bookModel")
const jwt= require('jsonwebtoken');







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
// exports.getAllBorrowed=(req,res)=>{
//   const  data={
//     book_id: req.body.book_id,
//     user_id:req.body.user_id,
//     issue_date:req.body.issue_date
// }

// var token = req.headers['token'];
// console.log(req.headers)

//         if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
//         jwt.verify(token, "mynameisankur456789123", function(err, decoded) {
//           if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
//           res.status(200).send(decoded);
//            //borrow books logic
//            bookModel.storedAllBorrowedBooks((err,data)=>{
//             console.log(err);
//             console.log(data);
//               if (err){
//                   res.status(500).send({message:err.message || "Some error occurred."});
//               }else{
//                  res.status(201).send({result:data})
//               }
//           })
          
         
//         });
        
// }

//  {
//   var token = req.headers['x-access-token'];
//   if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
//   jwt.verify(token, config.secret, function(err, decoded) {
//     if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
    
//     res.status(200).send(decoded);
//   });
//  };



exports.getAllBorrowed=(req,res)=>{
  const  data={
        book_id: req.body.book_id,
        user_id:req.body.user_id,
        issue_date:req.body.issue_date
    }
  var token = req.headers['token'];
  // console.log(req.headers)
          if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
          jwt.verify(token, "mynameisankur456789123", function(err, decoded) {
            if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
            res.status(200).send(decoded);
             //borrow books logic
             const data={
                book_id: req.body.book_id,
                user_id:req.body.user_id,
                issue_date:req.body.issue_date
            }
             bookModel.storedAllBorrowedBooks(data.book_id,data.user_id,data.issue_date,(err,data)=>{
               console.log(data);
              console.log(err);
              console.log(data);
                if (err){
                    res.status(500).send({message:err.message || "Some error occurred."});
                }else{
                   res.status(201).send({result:data})
                }
            })
          });
  }