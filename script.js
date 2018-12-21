const gameBoard = document.getElementById('gameBoard');

const answers = [
	{word:'short',riddle: 'What five-letter word becomes shorter when you add two letters to it?', hints:''},
	{word:'clock', riddle: 'What has a face and two hands but no arms or legs?', hints:''},
	{word:'silence', riddle: 'What is so delicate that saying its name breaks it?', hints:''},
	{word:'post office',riddle: 'What starts with a P, ends with an E and has thousands of letters?', hints:''}
]

let onTitleScreen = true;
let riddleNumber = 0;
let mainTitle = document.querySelector("h1");
let secTitle = document.querySelector("h2");
let triTitle = document.querySelector("h3");
let mainButton = document.querySelector("button");
let formSet = document.getElementById('formDiv');

function setRiddleText(){
	secTitle.innerHTML = answers[riddleNumber].riddle;	
}


function gameInit(){
	mainButton.addEventListener("click", function(){
	if(onTitleScreen == true) {
		//console.log("in init");
		mainTitle.innerHTML = 'level one'
		mainTitle.id ='fadeOut';
		setRiddleText();
		secTitle.id ='fadeIn';
		triTitle.innerHTML = '';
		mainButton.innerHTML = 'Guess';
		let input = '<input type="text" id="userInput">';
		formDiv.innerHTML = input;
		onTitleScreen = false; 
	} else {
		checkAnswer();
	}
	});
};

function checkForWin(){
	if(riddleNumber == answers.length){
		//console.log('YOU WINN!!!!!');

		return true;
	}
	return false;
}

function checkAnswer(){
	let userInput = document.getElementById('userInput').value;
	if(userInput == answers[riddleNumber].word) {
		triTitle.id ='fadeOut';
		triTitle.innerHTML = "Correct! Now try this!";
		riddleNumber = riddleNumber + 1;
		if(checkForWin() == true) {
			gameBoard.style.fontSize = "45px";
			gameBoard.innerHTML = 'You Win!';

			return;
	}
	setRiddleText();

	} else { 
		triTitle.id ='fadeOut';
		triTitle.innerHTML = "Please Try Again";
	}
}

gameInit();

















/*function replaceElement(){ 
	let x = 0;
	while(x < 1){
		document.getElementById("repl").innerHTML=word1.definition;
		document.getElementById('repl2')

		x++;
	}
}
*/

 

//function addDef1ToBoard(){
 //   document.getElementById("repl").innerHTML=word1.definition;
//}


//document.getElementById("startButton").addEventListener("click", function(){
//document.querySelector("h1").innerHTML = '';
//document.querySelector("h3").innerHTML = '';
//document.getElementById("startButton").innerHTML = 'Guess';
//document.getElementById("startButton").id = 'guessButton';

//addDef1ToBoard();

//document.getElementById('guessButton').addEventListener('click', function(){


//let guess1 = prompt(word1.definition);


//if (guess1 == word1.word){
//	document.getElementById("repl").innerHTML = 'Correct!';
//	document.getElementById("guessButton").innerHTML = 'Next';
//	document.getElementById("guessButton").id = 'nextButton';
//	 }

//else if (guess1 !== word1.word){
//	document.getElementById("repl").innerHTML = 'Try Again';
//	document.getElementById("repl1").innerHTML = word1.hint;
//}
//});

//});
