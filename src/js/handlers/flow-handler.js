import namesScreen from "../screens/names-screen";
import playersScreen from "../screens/players-screen";
import welcomeScreen from "../screens/welcome-screen";
import gameScreen from "../screens/pick-screen";
import { 
	roundScreen,
	selected,
} from "../screens/quiz-screen";

import { changeNbOfPlayers } from '../handlers/players-screen-handler';
import { 
	searchSpotify,
	songId,
	getToken,
} from "./pick-screen-handler";

import { 
	getPlayersData,
	playersData,
	totalOfPlayers,
} from "./names-screen-handler";

import { selectOption } from "./quiz-screen-handler";

let currentScreen;
export { currentScreen };		// => goes to game-screen-handler so it can add the iframe to the screen upon song search
let songsDataList = [];
export { songsDataList }
let player = 0;



export function flowEvents(){

	const appContainer = document.querySelector('#app');
	currentScreen = document.querySelector('main');
	let nextButton = document.getElementById('next');

	if(nextButton) nextButton.addEventListener('click', nextScreen);

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

				appContainer.appendChild( gameScreen(player) );
				appContainer.removeChild( currentScreen );

				document.addEventListener('click', searchSpotify);

				flowEvents();
				break;

			case 'pickScreen':
				let songData = {
					songId: songId,
					player: player,
				};
				songsDataList.push(songData);
				player++;

				if(player == totalOfPlayers){			// => all players have taken their turns: next screen
					player = 0;

					appContainer.appendChild( roundScreen(player) );
					appContainer.removeChild( currentScreen );
					
					document.removeEventListener('click', searchSpotify);
					document.addEventListener('click', selectOption);
				}

				else{
					appContainer.appendChild( gameScreen(player) );
					appContainer.removeChild( currentScreen );
				}

				flowEvents();
				break;

				case 'quizScreen':
					let options = document.querySelectorAll('input');
					for(let choice of options){
						if(choice.checked == true){
							if(choice.id == selected.player) playersData[player].score += 1;
							break;
						}
					}

					player++;

					if(player == totalOfPlayers){			// => all players have taken their turns: next screen
						player = 0;
						songsDataList.length = 0;

						for(let player of playersData){
							alert(`${player.name} : ${player.score} pts`);
						}

						appContainer.appendChild( gameScreen(player) );
						appContainer.removeChild( currentScreen );

						document.removeEventListener('click', selectOption);
						document.addEventListener('click', searchSpotify);
					}

					else{
						appContainer.appendChild( roundScreen(player) );
						appContainer.removeChild( currentScreen );
					}

					flowEvents();
					break;
		}
	}
}