function validation(){
 let password=document.getElementById('password').value;
 if(document.getElementById('email').value =="")
  document.getElementById('emailError').innerHTML="Email is required";

  if(password =="")
  document.getElementById('passwordError').innerHTML="Password is required";
 else if(password.length<8)
 document.getElementById('passwordError').innerHTML="Passowrd is invalid";
}

function validateForm(){
  let password=document.getElementById('password').value;
  if(document.getElementById('name').value == "")
  document.getElementById('nameError').innerHTML="Name is required";
  if(document.getElementById('email').value =="")
   document.getElementById('emailError').innerHTML="Email is required";
 
   if(password =="")
   document.getElementById('passwordError').innerHTML="Password is required";
  else if(password.length<8)
  document.getElementById('passwordError').innerHTML="Passowrd is invalid";
 }
 

