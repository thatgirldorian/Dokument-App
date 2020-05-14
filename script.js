//Creating a function for the signup form pop up
var createAccount = document.querySelector("input.button.small.signup");
var signupForm = document.querySelector("div.panel-pop");
var closeBtn = document.querySelector(".fas.fa-window-close");


createAccount.addEventListener("click", function () {
	if (signupForm.style.display === "none") {
		signupForm.style.display = "block"
	} else {
		signupForm.style.display = "none"
	};

});

// Closing the registration form
closeBtn.addEventListener("click", function () {
     signup.style.visibility = "hidden";
});


createAccount.addEventListener("click", function () {
	if (signupForm.style.display === "none") {
		signupForm.style.display = "block"
	} else {
		signupForm.style.display = "none"
	};

});