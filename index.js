$("#formId").submit(function (event) {
  event.preventDefault();
});
function checkFunc() {
  var firstPassword = document.getElementById("firstPassword").value;
  var secondPassword = document.getElementById("secondPassword").value;
  var alertText = document.getElementById("text-alert");
  if (firstPassword === "" || secondPassword === "") {
    alertText.innerHTML = "Password can't be empty!";
  } else if (firstPassword.length < 8 || secondPassword.length < 8) {
    alertText.innerHTML = "Password length less than 8!";
  } else if (firstPassword !== secondPassword) {
    alertText.innerHTML = "Passwords do not match!";
  } else if (/[^a-zA-Z]/.test(firstPassword)) {
    alertText.innerHTML = "Please enter only alphabets!";
  } else {
    var mainHeading = document.getElementById("main-heading");
    mainHeading.innerHTML = "Password Changed";
    var buttonText = document.getElementById("button-text");
    buttonText.innerHTML = "JOIN A RACE";
    var textMessage = document.getElementById("text-message");
    textMessage.innerHTML =
      "Your password has been updated! Now get back in the driver seat, racers are waiting for you!";
    var headingText = document.getElementById("heading-text");
    headingText.style.visibility = "hidden";
    firstPassword.style.visibility = "hidden";
    secondPassword.style.visibility = "hidden";
  }
}
