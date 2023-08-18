//import { events } from "./players-screen-handler";

//document.addEventListener('DOMContentLoaded', events);

import namesScreen from "../screens/names-screen";
import playersScreen from "../screens/players-screen";
import welcomeScreen from "../screens/welcome-screen";

import { playerEvents, changeNbOfPlayers } from '../handlers/players-screen-handler';
import { startTheGame } from "./names-screen-handler";


export function flowEvents(){

	const appContainer = document.querySelector('#app');

	let currentScreen = document.querySelector('main');
	let nextButton = document.getElementById('next');

	nextButton.addEventListener('click', nextScreen);

	function nextScreen(){

		switch(currentScreen.id){
			case 'welcomeScreen':
				appContainer.removeChild( currentScreen );
				appContainer.appendChild( playersScreen() );

				flowEvents();
				break;

			case 'playersScreen':
				appContainer.appendChild( namesScreen(+nbOfPlayers.textContent) );

				appContainer.removeChild( currentScreen );
				document.removeEventListener('DOMContentLoaded', playerEvents);
				document.removeEventListener('click', changeNbOfPlayers);

				flowEvents();
				break;

			case 'namesScreen':

				startTheGame();

				appContainer.removeChild( currentScreen );
				appContainer.appendChild( welcomeScreen() );

				flowEvents();
				break;
		}
	}
}