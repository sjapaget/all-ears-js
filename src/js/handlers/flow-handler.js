import namesScreen from "../screens/names-screen";
import playersScreen from "../screens/players-screen";
import welcomeScreen from "../screens/welcome-screen";
import gameScreen from "../screens/game-screen";

import { changeNbOfPlayers } from '../handlers/players-screen-handler';
import { getPlayersData } from "./names-screen-handler";
import { searchSpotify } from "./game-screen-handler";
import { getToken } from "./game-screen-handler";


export function flowEvents(){

	const appContainer = document.querySelector('#app');
	let currentScreen = document.querySelector('main');
	let nextButton = document.getElementById('next');

	nextButton.addEventListener('click', nextScreen);

	function nextScreen(){

		switch(currentScreen.id){
			case 'welcomeScreen':
				appContainer.appendChild( playersScreen() );
				appContainer.removeChild( currentScreen );				

				// Used setTimeOut() here because otherwise the event below would trigger before players-screen was loaded
				setTimeout(() => document.addEventListener('click', changeNbOfPlayers), 500);

				// We call flowEvents() each time to get new currentScreen and nextButton once the new screen is loaded
				flowEvents();
				break;

			case 'playersScreen':
				appContainer.appendChild( namesScreen(+nbOfPlayers.textContent) );
				appContainer.removeChild( currentScreen );

				document.removeEventListener('click', changeNbOfPlayers);

				flowEvents();
				break;

			case 'namesScreen':
				getPlayersData();
				getToken();

				appContainer.appendChild( gameScreen() );
				appContainer.removeChild( currentScreen );

				document.addEventListener('click', searchSpotify);

				flowEvents();
				break;

			case 'gameScreen':
				alert('not done yet !');
				break;
		}
	}
}