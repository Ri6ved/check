var x = document.getElementById('user');
var err = document.getElementById('err')
var p = document.getElementById('pass');
var err1 = document.getElementById('err1');
console.log(x.value)
var regex="^([ADMIN-admin])*$"
var segex="^([123456])*$"
function validateUser() {

   if (x.value.trim() == "") {
      err.innerText = "Username cannot be Empty"
      x.style.border = "2px solid red"
      return false
   }
   else if (!x.value.match(regex)) {


      err.innerText = "Username incorrect"
      x.style.border = "2px solid red"
      return false
   }

   else {
      err.innerText = ''
      x.style.border = "2px solid green"
      return true

   }
}

function validatePass() {
   if (p.value.trim() == '') {
      p.style.border = "2px solid red";
      err1.innerText = "Password Should not be empty";
      return false;
   }
   else if (!p.value.match(segex)) {


    err1.innerText = "password incorrect"
    p.style.border = "2px solid red"
    return false
 }

 else if(p.value.length<6){
   err1.innerText="Password should be at least 6 characters long";
  pwd.style.border='1px solid red';
  return false;
 }
   else {
      err1.innerText = '';
      p.style.border = "2px solid green"
      return true
   }

}

function validateform(callback) {
   if (!validateUser() || !validatePass()) {
      return false
   }
   else {
      callback()
      return true
   }
}
function nextPage(){
   window.location.href="todo.html"
}

