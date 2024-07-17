function firstChar(text) {
  // your code here
	 const trimmedStr = str.trim();
    if (trimmedStr === '') {
        return ''; 
	} else {
        return trimmedStr[0]; 
	}
}

// Do not change the code below
//Uncomment the following line to show the prompt popup
const text = prompt("Enter text:")
alert(firstChar(text));
