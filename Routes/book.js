module.exports = lms => {
    const customers = require("../controllers/book.get");
    const customers = require("../controllers/book.post");
  
  
  
    // Retrieve all Customers
    app.get("/books", books.findAll);
  
    // do the pagination 
    app.get("/books/pagianted", books.findAll);
  };
  