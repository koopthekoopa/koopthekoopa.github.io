document.addEventListener('contextmenu', event => event.preventDefault());

function enableJs() {
	document.getElementById('nojs').style.visibility = "hidden";
}

function bootWeb() {
	enableJs();
}

function getWebParams() {
}
