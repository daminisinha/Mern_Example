 module.exports = {
   validateEmail:function validateEmail(email){
     var re = /^[a-zA-Z ]{2,30}$/;
     console.log("Inside validate email",email)
     if(email=== null && email !==''){
       console.log("Enter username");
       return false;
     }
     else if (!re.test(email)){
        console.log("Enter valid username");
        return re.test(email);
     }else if (re.test(email)){
       console.log("valid username");
       return re.test(email);
     }
   },
   validatePassword: function validatePassword(password){
  //4 letters
  var strongRegex = /^[a-zA-Z ]{2,30}$/;
  console.log("Inside validate password",password)
  if(password=== null && password !==''){
    console.log("Enter password");
    return false;
  }
  else if (!strongRegex.test(password)){
     console.log("Enter valid password");
     return strongRegex.test(password);
  }
  else if (strongRegex.test(password)){
     console.log("valid password");
     return strongRegex.test(password);
  }
}
 }
