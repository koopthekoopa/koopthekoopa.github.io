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
	console.log(readFile("webargs.txt"));
}

function readFile(file) {
	var rawFile = new XMLHttpRequest();
	rawFile.open("GET", file, false);
	rawFile.onreadystatechange = function () {
		if (rawFile.readyState === 4) {
			if (rawFile.status === 200 || rawFile.status == 0) {
				rawFile.send(null);
				return rawFile.responseText;
			}
		}
	}
	rawFile.send(null);
	return "error"
}

function getWebParam(paramName) {
	param = new URLSearchParams(window.location.search);
	return param.get(paramName);
}
