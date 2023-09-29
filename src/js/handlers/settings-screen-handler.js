let numberOfRounds;
export { numberOfRounds };

export function getNbOfRounds(){
	numberOfRounds = +document.getElementById('nbOfRounds').textContent;
}

export function changeNbOfPlayers(event){
	if(event.target.id != 'add' && event.target.id != 'remove') return;

	let nbOfPlayers = document.getElementById('nbOfPlayers');
	let nbOfRounds = document.getElementById('nbOfRounds');

	if(event.target.parentElement.children[1].id == 'nbOfPlayers'){
		if(event.target.id =='add') addPlayer();
		if(event.target.id =='remove') removePlayer();
	}

	if(event.target.parentElement.children[1].id == 'nbOfRounds'){
		if(event.target.id =='add') addRound();
		if(event.target.id =='remove') removeRound();
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

function addRound(){
	if(+nbOfRounds.textContent < 10) nbOfRounds.textContent = +nbOfRounds.textContent + 1;
	else return;
}

function removeRound(){
	if(+nbOfRounds.textContent > 3) nbOfRounds.textContent = +nbOfRounds.textContent - 1;
	else return;
}