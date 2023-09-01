// Reset selection styling prior to next game
function resetHighlight(){
	const choices = document.querySelectorAll('button');
	choices.forEach((choice) => {
	  choice.classList.remove('selected');
	});
}

// Round of Rock Paper Scissors
function round(userChoice) {
	let botChoice;
	const playerScore = document.querySelector('#playerScore');
	const botScore = document.querySelector('#botScore');

	resetHighlight();

	// Bot selection between 1 and 3 inclusive
	// Rock=1, Paper=2, Scissors=3
	botChoice = Math.floor((Math.random() * 3)) + 1;

	if (userChoice==1){
		document.querySelector('#playerRock').classList.toggle('selected');
		if (botChoice==2){
			document.querySelector('#botPaper').classList.toggle('selected');
			botScore.textContent++;
		}
		else if (botChoice==3){
			document.querySelector('#botScissors').classList.toggle('selected');
			playerScore.textContent++;
		}
		else {
			document.querySelector('#botRock').classList.toggle('selected');
		}
	}
	else if (userChoice==2){
		document.querySelector('#playerPaper').classList.toggle('selected');
		if (botChoice==3){
			document.querySelector('#botScissors').classList.toggle('selected');
			botScore.textContent++;
		}
		else if (botChoice==1){
			document.querySelector('#botRock').classList.toggle('selected');
			playerScore.textContent++;
		}
		else {
			document.querySelector('#botPaper').classList.toggle('selected');
		}
	}
	else {
		document.querySelector('#playerScissors').classList.toggle('selected');
		if (botChoice==1){
			document.querySelector('#botRock').classList.toggle('selected');
			botScore.textContent++;
		}
		else if (botChoice==2){
			document.querySelector('#botPaper').classList.toggle('selected');
			playerScore.textContent++;
		}
		else {
			document.querySelector('#botScissors').classList.toggle('selected');
		}
	}

	// Win Condition
	if (playerScore.textContent == "5"){
		alert("Player wins!");
		playerScore.textContent = "0";
		botScore.textContent = "0";
		resetHighlight();
	}
	else if(botScore.textContent == "5"){
		alert("Bot wins!");
		playerScore.textContent = "0";
		botScore.textContent = "0";
		resetHighlight();
	}
}

// // Play game of Rock Paper Scissors
// // 5 rounds
// function game(){
// 	let userScore = 0, botScore = 0;
// 	while(userScore<5 && botScore <5){
// 		let result = round();
// 		if(result=="user"){
// 			userScore++;
// 		}
// 		else if(result=="bot"){
// 			botScore++;
// 		}
// 		alert(`User Score: ${userScore}, Bot Score: ${botScore}`);
// 	}

// 	if (userScore > botScore){
// 		alert("User wins!");
// 	}
// 	else {
// 		alert("Bot wins..");
// 	}
// }