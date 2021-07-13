var userModel = require.main.require('./models/userModel');
const bcrypt= require("bcryptjs")
const saltRounds = 10;
const myPlaintextPassword = 's0/\/\P4$$w0rD';
const someOtherPlaintextPassword = 'not_bacon';



// router.get('/', (req, res)=>{
//     res.render('/', {errs: []});
// });

// router.post('/', (req, res)=>{

//     var data = {
//       name: req.body.name,
//       email: req.body.email,
//       phone: req.body.phone,
//       address: req.body.address,
//       password: req.body.password,
//       gender: req.body.gender
//     };

    //password hash
    // const securePassword =async(password) =>{

    //     // const passwordHash= await bcrypt.hash(password,10)
    //     // //$2a$10$jNVc1r5CpietCcLqMPkSC.KOooX1sDITlldRNpds9G2g.WqbBlthu
    //     // console.log(passwordHash);
    //     // const passwordMatch= await bcrypt.compare(password,passwordHash)
    //     // console.log(passwordMatch)
    // }
    //   securePassword("ankur")
      


exports.signupuser = function(req, res){
        var data = {
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      address: req.body.address,
      password: req.body.password,
      gender: req.body.gender
    };

    
  
     userModel.createUser(data, function(result){
         if(result){
          bcrypt.genSalt(saltRounds, function(err, salt) {
            bcrypt.hash(myPlaintextPassword, salt, function(err, hash) {
                // Store hash in your password DB.
            });
        });
        bcrypt.compare(password, hash, function(err, result) {
          // result == true
      });
      bcrypt.compare(someOtherPlaintextPassword, hash, function(err, result) {
          // result == false
      });
    
            console.log(result);
            res(result);
        }
        else {
            res('Invalid');

    
        }
    });
    console.log(req.body);
}

