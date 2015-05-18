/* global WireDOM */
var target = (new Date(2015, 5, 8, 12)).getTime();

var SECOND = 1;
var MINUTE = 60 * SECOND;
var HOUR   = 60 * MINUTE;
var DAY    = 24 * HOUR;

var format = function(n) {
	var str = n + '';
	
	return str.substr(0, str.indexOf('.') + 3);
}

var update = function() {
	var diff = (target - Date.now()) / 1000;
	
	WireDOM.days = Math.floor(diff / DAY);
	diff %= DAY;
	
	WireDOM.hours = Math.floor(diff / HOUR);
	diff %= HOUR;
	
	WireDOM.minutes = Math.floor(diff / MINUTE);
	diff %= MINUTE;
	
	WireDOM.seconds = format(diff / SECOND);
	
	window.requestAnimationFrame(update);
};

update();
// setInterval(update, 250);