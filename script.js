
var createAccount = document.querySelector("input.button.small.signup");
var signupForm = document.querySelector("div.panel-pop");
var closeBtn = document.querySelector(".fas.fa-window-close");
var forgotBtn = document.getElementById("lost-ps"); 
var loginBtn = document.getElementById('login-btn');

//REGISTRATION FORM
//Creating a function for the signup form pop up
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

//Tapping the create button again
document.querySelector(".fas.fa-window-close").addEventListener('click', () => {
	document.querySelector('input.button.small.signup').addEventListener('click', () => {
		document.querySelector('.panel-pop').style = 'display:block';
	})
});


//FORGOT PASSWORD FORM
forgotBtn.addEventListener('click', function () {
	if (forgotForm.style.display = 'none') {
		forgotForm.style.display = 'block'
	} else {
    forgotForm.style.display = 'block'
	}
	
});



