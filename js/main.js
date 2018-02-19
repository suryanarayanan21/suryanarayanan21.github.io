var menu = function()
{
	var m = document.getElementById("menu");
	m.style.left = "0";
	m.style.zIndex = "1";
	document.body.onclick = "closeMenu()";
}

var closeMenu = function()
{
	var m = document.getElementById("menu");
	m.style.left = "-70%";
	document.body.onclick = "";
}