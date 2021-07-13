var userModel = require.main.require('./models/userModel');
const bcrypt= require("bcryptjs")
const password="ankur"
const saltRounds=10
const hash="YOUR_HASH_STRING"


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

    bcrypt.genSalt(saltRounds, function (err, salt) {
        if (err) {
          throw err
        } else {
          bcrypt.hash(password, salt, function(err, hash) {
            if (err) {
              throw err
            } else {
              console.log(hash)
              //$2a$10$FEBywZh8u9M0Cec/0mWep.1kXrwKeiWDba6tdKvDfEBjyePJnDT7K
            }
          })
        }
      })

      bcrypt.compare(data.password, hash, function(err, isMatch) {
        if (err) {
          throw err
        } else if (!isMatch) {
          console.log("Password doesn't match!")
        } else {
          console.log("Password matches!")
        }
      })
  
     userModel.createUser(data, function(result){
         if(result){
            console.log(result);
            res(result);
        }
        else {
            res('Invalid');

    
        }
    });
    console.log(req.body);
}

