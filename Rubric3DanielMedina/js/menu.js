var TitleChange = document.getElementById("firstTitile");
TitleChange.setAttribute("style", "color: purple");

var totalChildren = document.getElementById("navlinks");
console.log (totalChildren.childNodes.length);

var totalPtags = document.getElementById("li");
console.log ("That are " + totalChildren.length +" menu items on this page.");

var myMain = document.getElementById("main");
var newPara = document.createElement("p");
var Paratxt = document.createTextNode("My new paragraph!@#");

myMain.appendChild(newPara);
newPara.appendChild(Paratxt);

(function(menu_button, links, breakpoint) {
	'use strict';
	var menulink = document.getElementById(menu_button),
	    menu = document.getElementById(links);
		
	menu.className = 'start';
	setTimeout(function() {
		menu.className = 'collapsed';
	}, 20);
		
	menulink.onclick = function() {
		if (menu.className === 'displayed') {
			menu.className = 'collapsed';
		} else {
			menu.className = 'displayed';
		}
		return false;
	};
	
	window.onresize = function() {
		if (window.innerWidth < breakpoint) {
			menu.className = 'collapsed';
		}
	};	
})('menulink', 'navlinks', 700);
