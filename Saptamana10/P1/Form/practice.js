function validate() {
      
    if( document.form.username.value == "" ||  document.form.username.value.length < 3 )  {
       alert( "Please provide your name!" );
       document.form.username.focus() ;
       return false;
    }
    if( document.form.emailAddress.value == "") {
        alert( "Please provide your Email!" );
        document.form.emailAddress.focus() ;
        return false;
     }
     if( document.form.firstName.value == ""||  document.form.firstName.value.length < 3) {
        alert( "Please provide your firstName!" );
        document.form.firstName.focus() ;
        return false;
     }
     if( document.form.lastName.value == "" ||  document.form.lastName.value.length < 3) {
        alert( "Please provide your lastName!" )
        document.form.lastName.focus() ;
        return false;
     }
     if( document.form.nickname.value == "") {
        alert( "Please provide your nickname!" );
        document.form.nickname.focus() ;
        return false;
     }
     var phoneno = /^\d{10}$/;
     if( document.form.phone.value.match(phoneno)) {
         return true}
         else {
        alert( "Please provide your phone in format #### ### ###!" );
        return false;
     }
    }