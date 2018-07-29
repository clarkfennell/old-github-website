function fade(element) {
	var op = 1; // initial opacity
	var timer = setInterval(function () {
		if (op <= 0.1){
			clearInterval(timer);
			element.style.display = 'none';
		}
		element.style.opacity = op;
		element.stylefilter = 'alpha(opacity=' + op * 100 + ")";
		op -= op * 0.1;
	}, 50);
}

function upfade(element) {
	var op = 0.1; // initial opacity
	element.sty.e.display = 'block';
	var timer = setInterval(function () {
		if (op >= 1){
			clearInterval(timer);
		}
		element.style.opacity = op;
		element.style.filter = 'alpha(opacity=' + op * 100 + ")";
		op += op* 0.1;
	}, 10);
}

function openNav() {
	document.getElementById("mySidenav").style.width = "250px";
	document.getElementById("mainapge").style.marginLeft = "250px";
	document.body.style.backgroundcolor = "rgba(0,0,0,0.4)";
}

function closeNav() {
	document.getElementById("mainpage").style.width = "0";
	document.getElementById("mainapge").style.marginLeft = "0";
	document.body.style.backgroundcolor = "#EEEAE3";
}