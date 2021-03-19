"use strict";
// $(function () {
//   $("#myForm").submit(handleFormSubmit);
// });
// function handleFormSubmit(e) {
//   if (
//     $("#name").val().length >= 5 &&
//     $("#password").val().length >= 8 &&
//     $("#password").val() === $("#confirm_password").val()
//   ) {
//     alert("Submitting form");
//     $("#name ,#password , #confirm_password").css(
//       "border",
//       "1px solid currentColor"
//     );
//     $("b").remove();
//   } else {
//     if ($("#name").val().length < 5) {
//       $("#name").css("border", "2px solid red");
//       $("#name").after(
//         "<b style = 'color:red'>Name should be at least 5 characters long</b>"
//       );
//     }

//     if ($("#password").val().length < 8) {
//       $("#password").css("border", "2px solid red");
//       $("#password").after(
//         "<b style = 'color:red'>password should be at least 8 characters long</b>"
//       );
//     }

//     if ($("#password").val() !== $("#confirm_password").val()) {
//       $("#confirm_password").css("border", "2px solid red");
//       $("#confirm_password").after(
//         "<b style = 'color:red'>Password not match</b>"
//       );
//     }
//   }
//   e.preventDefault();
// }

///Using jquery inbuilt Validate function

$(document).ready(function () {
  $("#basic-form").validate({
    submitHandler: function (form) {
      alert("Form submitted");
    },
    rules: {
      name: {
        required: true,
        minlength: 5,
      },
      password: {
        required: true,
        minlength: 8,
      },
      confirm_password: {
        equalTo: "#password",
      },
    },
    messages: {
      name: {
        minlength: "Name should be at least 5 characters",
      },
      password: {
        minlength: "Password should be atleast 8 characters and secure",
      },
      confirm_password: {
        equalTo: "Password didn't matched",
      },
    },
  });
});
