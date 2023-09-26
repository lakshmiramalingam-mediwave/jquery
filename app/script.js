$(document).ready(function () {
  const lrr = [];
  btnSubmit = $("#submit");
  btnSubmit.click(function (e) {
    e.preventDefault();
    const email = $("#username").val();
    const password = $("#pass").val();
    const item = {
      id: new Date().getTime(),
      email: email,
      password: password,
    };
    if (email) {
      if (password.length >= 8) {
        const profile = {
          email: email,
          password: password,
        };
        lrr.push(profile);
        console.log(JSON.stringify(lrr));
      } else {
        alert(" password should be atleast 8 character");
      }
    } else {
      alert("enter valid email");
    }
  });
});
