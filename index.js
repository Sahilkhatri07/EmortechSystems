$("#formId").submit(function (event) {
  event.preventDefault();
});
function mainoneFunc() {
  setTimeout(function () {
    window.location.reload();
  }, 2000);
  var passwordone = document.getElementById("passwordone").value;
  var passwordtwo = document.getElementById("passwordtwo").value;
  var textalert = document.getElementById("text-alert");
  if (passwordone === "" || passwordtwo === "") {
    textalert.innerHTML = "Password can't be empty!";
  } else if (passwordone.length < 8 || passwordtwo.length < 8) {
    textalert.innerHTML = "Password length less than 8!";
  } else if (/[^a-zA-Z]/.test(passwordone)) {
    textalert.innerHTML = "Please enter only alphabets!";
  } else if (passwordone !== passwordtwo) {
    textalert.innerHTML = "Passwords do not match!";
  } else {
    var mainhead = document.getElementById("main-heading");
    mainhead.innerHTML = "Password Changed";
    var btnonetext = document.getElementById("button-text");
    btnonetext.innerHTML = "JOIN A RACE";
    var textMessage = document.getElementById("text-message");
    textMessage.innerHTML =
      "Your password has been updated! Now get back in the driver seat, racers are waiting for you!";

    var onepassword = document.getElementById("passwordone");
    var twopassword = document.getElementById("passwordtwo");
    var textHeading = document.querySelectorAll("#text-heading");
    onepassword.style.display = "none";
    twopassword.style.display = "none";
    textHeading[0].style.display = "none";
    textHeading[1].style.display = "none";
    textHeading[2].style.display = "none";
    var buttonChange = document.getElementById("buttonChange");
    buttonChange.style.marginTop = "2rem";
  }
}
