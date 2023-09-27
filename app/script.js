document.ready(function () {
  const data = [];
  const specialCharacterRegex = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/;
  btnSubmit = $("#submit");
  btnSubmit.click(function (e) {
    e.preventDefault();
    const email = $("#username").val();
    const password = $("#password").val();
    const item = {
      id: new Date().getTime(),
      email: email,
      password: password,
    };
    if (email) {
      if (password.length >= 8) {
        if (specialCharacterRegex.test(password)) {
          const profile = {
            email: email,
            password: password,
          };
          data.push(profile);
          console.log(JSON.stringify(data));
        } else {
          alert("Password must contain at least one special character");
        }
      } else {
        alert(" password should be atleast 8 character");
      }
    } else {
      alert("enter valid email");
    }
  });
});
