const Customer = require("../models/customer.model.js");

// Retrieve all Customers from the database.
exports.findAll = (req, res) => {
    Book.getAll((err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving customers."
        });
      else res.send(data);
    });
  };


  // Retrieve the pagination of the book 

  exports.findAll = (req, res) => {
    Book.getAll((err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving customers."
        });
      else res.send(data);
    });
  };
