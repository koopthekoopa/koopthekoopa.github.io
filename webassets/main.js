// copyright 2021 - 202X
document.addEventListener('contextmenu', event => event.preventDefault());

function enableJs() {
	document.getElementById('nojs').style.visibility = "hidden";
}

function downloadModel(name) {
	window.location.href = 'mdlDATA/sm64' + name + '.zip';
}

function bootWeb() {
	enableJs();
}

function getWebParams() {
}
