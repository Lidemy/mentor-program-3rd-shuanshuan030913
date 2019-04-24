function capitalize(str) {

	// z =>122
	// a =>97
	// A =>65

	//if > z
	if(str.charCodeAt(0) > 122){

 		return str;

	//if z>= firstLetter => a
	}else if (str.charCodeAt(0) >= 97){

		var firstLetter = String.fromCharCode(str.charCodeAt(0) - 32);
		var lastLetter = "";

		for (var i = 1; i < str.length; i ++){
			lastLetter += str[i];
		}
 		return firstLetter + lastLetter;

	//if < a
	}else {

 		return str;

	}
}

console.log(capitalize('nick'));
console.log(capitalize('Nick'));
console.log(capitalize(',hello'));
