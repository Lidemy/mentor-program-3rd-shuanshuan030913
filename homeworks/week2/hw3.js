function reverse(str) {

	var newWord = "";
	for (var i = str.length - 1; i >= 0; i--){
		newWord += str[i];
	}
	console.log(newWord);
}

reverse('hello');
reverse('yoyoyo');
reverse('1abc2');
reverse('1,2,3,2,1');
