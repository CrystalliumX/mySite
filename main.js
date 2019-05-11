var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
	var myName = prompt("Enter your name.");
	localStorage.setItem('name', myName);
	myHeading.innerHTML = "This is block of Iron, " + myName;
}

if (!localStorage.getItem('name')) {
	setUserName();
} else {
	var storedName = localStorage.getItem('name');
	myHeading.innerHTML = 'This is block of Iron, ' + storedName;
}

myButton.onclick = function() {
	setUserName();
}