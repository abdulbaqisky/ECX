const bcrypt = require("bcrypt");

const saltRounds = 10;
var myPassword = '/Baqi9932';



const salt = bcrypt.genSaltSync(saltRounds);
const hash = bcrypt.hashSync(myPassword, salt);

bcrypt.hashSync(myPassword, hash); 

console.log(hash);

if (myPassword == 'jbsuisdn'){
    console.log("Yeah")
}else{
    console.log(myPassword);
}
