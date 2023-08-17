//import { events } from "./players-screen-handler";

//document.addEventListener('DOMContentLoaded', events);

import namesScreen from "../screens/names-screen";
import playersScreen from "../screens/players-screen";

import { playerEvents, changeNbOfPlayers } from '../handlers/players-screen-handler';
import { namesEvents, playersData } from "./names-screen-handler";

export function flowEvents(){

	const appContainer = document.querySelector('#app');

	let currentScreen = document.querySelector('main');
	let nextButton = document.getElementById('next');

	nextButton.addEventListener('click', nextScreen);

	function nextScreen(){

		switch(currentScreen.id){
			case 'playersScreen':
				appContainer.appendChild( namesScreen(+nbOfPlayers.textContent) );

				appContainer.removeChild( currentScreen );
				document.removeEventListener('DOMContentLoaded', playerEvents);
				document.removeEventListener('click', changeNbOfPlayers);
				flowEvents();

				break;
			case 'namesScreen':
				alert("you're in namesScreen");
				namesEvents();
				break;
		}
	}
}