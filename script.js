"use strict";

// ClassWork

//1. Write a JavaScript program which compute, the average marks of the following students Then, this average is used to determine the corresponding grade.

// John - 80
// Bill - 77
// David - 68
// Ryan - 88
// Nick - 95

// <60 - F
// <70 - D
// <80 - C
// <90 - B
// <100 - A

let arr = [80, 77, 68, 88, 95,]
let Newarr = [0];
for(let i = 0; i < arr.length; i++){
	Newarr[0] = arr[i] + Newarr[0]
}
let MidlScore = Newarr[0]/arr.length;
alert(`MidlScore: ${MidlScore}`)

if(MidlScore < 60){
	alert('Score: F')
}else if(MidlScore < 70){
	alert('Score: D')
}else if(MidlScore < 80){
	alert('Score: C')
}else if(MidlScore < 90){
	alert('Score: B')
}else if(MidlScore < 100){
	alert('Score: A')
}

//2. Write a JavaScript program to sum the multiples of 3 or 5 under 1000.

let num = 0;
for( let i = 0; i <= 1000; i++){
	if((i % 3 === 0)||(i % 5 === 0)){
		num += i;
	}
}
console.log(num)

//3. Write a JavaScript program to construct the following pattern, using a nested for loop.

* 

* * 

* * * 

* * * * 

* * * * *


for( let i = 0; i < 5; i++){
	for(let j = 0; j < i; j++){
		document.write("* ")
	}
	document.write("*<br \/> <br \/>")
}