//import './flow-handler';

export function playerEvents(){

	let nbOfPlayers = document.getElementById('nbOfPlayers');

	document.addEventListener('click', changeNbOfPlayers);
}

export function changeNbOfPlayers(event){
	if(event.target.id == 'add') addPlayer();
	else if(event.target.id == 'remove') removePlayer();

	else{
		alert('event from players-screen!')
		return;
	}
}

function addPlayer(){
	if(+nbOfPlayers.textContent < 10) nbOfPlayers.textContent = +nbOfPlayers.textContent + 1;
	else return;
}

function removePlayer(){
	if(+nbOfPlayers.textContent > 3) nbOfPlayers.textContent = +nbOfPlayers.textContent - 1;
	else return;
}