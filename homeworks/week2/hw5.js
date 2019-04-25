function join(str, concatStr) {

	var answer = "";

	for(var i = 0; i < str.length - 1; i++) {

		answer += str[i] + concatStr;
	}

	return answer += str[str.length - 1] ;

}

function repeat(str, times) {

	var answer = "";

	for(var i = 0; i < times; i++){
		answer += str;
	}

	return answer;
}



console.log(join([1, 2, 3], ''));
console.log(join(["a", "b", "c"], "!"));
console.log(join(["a", 1, "b", 2, "c", 3], ','));

console.log(repeat('a', 5));
console.log(repeat('yoyo', 2));
