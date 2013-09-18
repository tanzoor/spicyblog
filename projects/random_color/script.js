var RGBArray = [0, 0, 0];

function changeColor() {
	for (var index in RGBArray) {
		RGBArray[index] = Math.floor(Math.random()*255);
	}
	var newColor = 'rgb(' + RGBArray[0] + ', ' + RGBArray[1] + ', ' + RGBArray[2] + ')';
	$('body').css('background-color', newColor);
	$('#color').html(newColor);
}

function convertNumber(number, systemTo) {
	var mods = [];
	var result = 0;
	while (isInteger(number) && number > 0) {
		var mod = number % systemTo;
		mods.push(mod);
		number = number / 16;
	}
	console.log(mods);
}

function main() {
	changeColor();
	$('button').click(function() {
		changeColor();
	});
	convertNumber(255, 16);
}