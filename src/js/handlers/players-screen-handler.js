export function changeNbOfPlayers(event){
	let nbOfPlayers = document.getElementById('nbOfPlayers');

	if(event.target.id == 'add') addPlayer();
	else if(event.target.id == 'remove') removePlayer();

	else return;
}

function addPlayer(){

	// necessary to use '+' operator because textContent property is a String by default

	if(+nbOfPlayers.textContent < 10) nbOfPlayers.textContent = +nbOfPlayers.textContent + 1;
	else return;
}

function removePlayer(){
	if(+nbOfPlayers.textContent > 3) nbOfPlayers.textContent = +nbOfPlayers.textContent - 1;
	else return;
}