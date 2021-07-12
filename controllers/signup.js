var router = express.Router();
var userModel = require.main.require('./models/userModel');


router.get('/', (req, res)=>{
    res.render('/', {errs: []});
});

router.post('/', (req, res)=>{

    var data = {
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      address: req.body.address,
      password: req.body.password,
      gender: req.body.gender
    };

    //password hash
    const securePassword =async(password) =>{

        const passwordHash= await bcrypt.hash(password,10)
        //$2a$10$jNVc1r5CpietCcLqMPkSC.KOooX1sDITlldRNpds9G2g.WqbBlthu
        console.log(passwordHash);
        const passwordMatch= await bcrypt.compare(password,passwordHash)
        console.log(passwordMatch)
      
      
      }
      
      securePassword("ankur")
      


    exports.signupuser(data, (errors, fields)=>{
        if(!errors){
            userModel.createUser(data, function(result){
                if(result){
                    console.log(result);
                    res.redirect('/login');
                }
                else {
                    res.send('Invalid');
                }
            });
        }
        else {
            console.log(fields);
            res.render('signup', {errs: errors});
        }
    });

});

module.exports = router;