function giveMeEms(pixels) {
	var baseValue = 16;

	function doTheMath() {
		return pixels/baseValue;
	}

	return doTheMath;
}

var smallSize = giveMeEms(12);
var mediumSize = giveMeEms(18);
var largeSize = giveMeEms(24);
var xlargeSize = giveMeEms(32);

console.log("small size: ", smallSize());
console.log("medium size: ", mediumSize());
console.log("large size: ", largeSize());
console.log("xlarge size: ", xlargeSize());
