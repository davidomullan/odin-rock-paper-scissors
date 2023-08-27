// Round of Rock Paper Scissors
function round() {
	let userChoise, botChoise;

	while(true){
		userChoise = prompt("Rock=1, Paper=2, Scissors=3. UserChoise: ");
		if (userChoise == 1 || userChoise == 2 || userChoise ==3){
			break;
		}
		else {
			alert("Invalid Entry! Try again");
		}
	}

	// Bot selection between 1 and 3 inclusive
	// Rock=1, Paper=2, Scissors=3
	botChoise = Math.floor((Math.random() * 3)) + 1;

	if (userChoise==1){
		if (botChoise==2){
			alert("User chose Rock | Bot chose Paper");
			return "bot";
		}
		else if (botChoise==3){
			alert("User chose Rock | Bot chose Scissors");
			return "user";
		}
		else {
			alert("Both chose Rock");
			return "draw";
		}
	}
	else if (userChoise==2){
		if (botChoise==3){
			alert("User chose Paper | Bot chose Scissors");
			return "bot";
		}
		else if (botChoise==1){
			alert("User chose Paper | Bot chose Rock");
			return "user";
		}
		else {
			alert("Both chose Paper");
			return "draw";
		}
	}
	else {
		if (botChoise==1){
			alert("User chose Scissors | Bot chose Rock");
			return "bot";
		}
		else if (botChoise==2){
			alert("User chose Scissors | Bot chose Paper");
			return "user";
		}
		else {
			alert("Both chose Scissors");
			return "draw";
		}
	}
}

// Play game of Rock Paper Scissors
// 5 rounds
function game(){
	let userScore = 0, botScore = 0;
	while(userScore<5 && botScore <5){
		let result = round();
		if(result=="user"){
			userScore++;
		}
		else if(result=="bot"){
			botScore++;
		}
		alert(`User: ${userScore}, Bot: ${botScore}`);
	}

	if (userScore > botScore){
		alert("User wins!");
	}
	else {
		alert("Bot wins..");
	}
}