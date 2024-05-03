let bcrypt = require('bcrypt')

let user ={
    "email":"kanha19march@gmail.com",
    "password":"kanha@123",
    "creditcard":"5588 7788 4456 2525"
}
console.log(user);

let salt =bcrypt.genSaltSync(10)
let pass =bcrypt.hashSync(user.password,salt)
console.log(pass);