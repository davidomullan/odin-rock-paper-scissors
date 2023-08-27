// Round of Rock Paper Scissors
function round() {
	let userChoice, botChoice;

	while(true){
		userChoice = prompt("Rock 🪨 = 1, Paper 📰 = 2, Scissors ✄ = 3. \nEnter your choice: ");
		if (userChoice == 1 || userChoice == 2 || userChoice ==3){
			break;
		}
		else {
			alert("Invalid Entry! Try again");
		}
	}

	// Bot selection between 1 and 3 inclusive
	// Rock=1, Paper=2, Scissors=3
	botChoice = Math.floor((Math.random() * 3)) + 1;

	if (userChoice==1){
		if (botChoice==2){
			alert("User 🪨 | 📰 Bot");
			return "bot";
		}
		else if (botChoice==3){
			alert("User 🪨 | ✄ Bot");
			return "user";
		}
		else {
			alert("Both chose 🪨");
			return "draw";
		}
	}
	else if (userChoice==2){
		if (botChoice==3){
			alert("User 📰 | ✄ Bot");
			return "bot";
		}
		else if (botChoice==1){
			alert("User 📰 | 🪨 Bot");
			return "user";
		}
		else {
			alert("Both chose 📰");
			return "draw";
		}
	}
	else {
		if (botChoice==1){
			alert("User ✄ | 🪨 Bot");
			return "bot";
		}
		else if (botChoice==2){
			alert("User ✄ | 📰 Bot");
			return "user";
		}
		else {
			alert("Both chose ✄");
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
		alert(`User Score: ${userScore}, Bot Score: ${botScore}`);
	}

	if (userScore > botScore){
		alert("User wins!");
	}
	else {
		alert("Bot wins..");
	}
}