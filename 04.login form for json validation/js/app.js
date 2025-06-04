$(document).ready(function(){
$("#formvalidation").validate({
  rules: {
      name: {
          minlength: 2
      },
      email: {
          required: true,
          email: true
      },
    //   password:{
    //      required:true,
    //      minlength:6
    //   },
    //   confirmPassword:{
    //      equalTo:"#password"
    //   },
      phone:{
         number:true,
         minlength:10,
         maxlength:10
      }

  },
  messages: {
      name: {
          required: "Please enter your name",
          minlength: "Name must be at least 2 characters"
      },
      email: {
          required: "Please enter a valid email address",
          phone :"please enter your phone",
        
      },
      password:{
        required:"please enter the password",
        minlength:"password should contain atleast 6 character"
      }
  },
  submitHandler: function(form) {
      (form).submit();
  }
});

});




  