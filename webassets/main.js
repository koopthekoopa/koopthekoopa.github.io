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
	document.getElementById('nojs').style.visibility = "hidden";
}

function getWebParam(paramName) {
	param = new URLSearchParams(window.location.search);
	return param.get(paramName);
}
