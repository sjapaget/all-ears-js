import namesScreen from "../screens/names-screen";

const appContainer = document.querySelector('#app');

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

	const next = document.getElementById('next');
	next.addEventListener('click', loadNamesScreen);

	function loadNamesScreen(){

		alert('Players-screen "next-button" listener triggered!');
		appContainer.appendChild( namesScreen(+nbOfPlayers.textContent) );

		const currentScreen = document.querySelector('main');
		appContainer.removeChild( currentScreen );

		document.removeEventListener('DOMContentLoaded', events);
		next.removeEventListener('click', loadNamesScreen);
	}

}