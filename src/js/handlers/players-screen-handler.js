document.addEventListener('DOMContentLoaded', events);

function events(){

	let nbOfPlayers = document.getElementById('nbOfPlayers');

	document.addEventListener('click', changeNbOfPlayers);

	function changeNbOfPlayers(event){
		if(event.target.id == 'add') addPlayer();
		else if(event.target.id == 'remove') removePlayer();

		else return;
	}

	function addPlayer(){
		if(+nbOfPlayers.textContent < 10) nbOfPlayers.textContent = +nbOfPlayers.textContent + 1;
		else return;
	}

	function removePlayer(){
		if(+nbOfPlayers.textContent > 3) nbOfPlayers.textContent = +nbOfPlayers.textContent - 1;
		else return;
	}


	document.addEventListener('click', loadNamesScreen)

	function loadNamesScreen(event){
		if(event.target.id != 'next') return;
	}

}