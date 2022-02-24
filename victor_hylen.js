
function validateForm() {
  let fname = document.forms["myForm"]["fname"].value;
  let lname = document.forms["myForm"]["lname"].value;
  let email = document.forms["myForm"]["email"].value;
  let phonenr = document.forms["myForm"]["phonenr"].value;
  
  var phonereg = new RegExp('^[0-9]*$');
  var mailformat = new RegExp(/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/);
  let namereg = new RegExp("^[a-zA-Z]+$");

  if (namereg.test(fname) == false || fname == "") {
    alert("Name must be filled out & and only contain letters");    
    return false;
  }
  

  if (namereg.test(lname) == false || lname == "") {
    alert("Name must be filled out & and only contain letters");
    return false;
  }



  if (mailformat.test(email)==false || email == "") {
    alert("Must contain following, Presence of @ and . character & Presence of at least one character before and after the @. & Presence of at least two characters after . (dot).");
    return false
    }



  if (phonereg.test(phonenr)==false || phonenr == "") {
    alert("type in only number");
    return false
    }
}
        
